import KeyboardReturnIcon from "@material-ui/icons/KeyboardReturn";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import React, { useState, useEffect } from "react";
import SaveIcon from "@material-ui/icons/Save";
import LockIcon from "@material-ui/icons/Lock";
import Button from "@material-ui/core/Button";
import Slide from "@material-ui/core/Slide";
import Paper from "@material-ui/core/Paper";
import { useSetRecoilState } from "recoil";
import Grid from "@material-ui/core/Grid";
import { useRecoilValue } from "recoil";
import { useSnackbar } from "notistack";
import moment from "moment";

import { useGoBack } from "../../../helpers";
import userAtom from "../../../atoms/user";
import api from "../../../services/api";

const EditAccount = () => {
    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.down("sm"));

    const user = useRecoilValue(userAtom);
    const setUser = useSetRecoilState(userAtom);
    const { enqueueSnackbar } = useSnackbar();

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const goBack = useGoBack();

    useEffect(() => {
        if (user) {
            setEmail(user.email);
            setName(user.name);
        }
    }, [user]);

    const emailChangeHandler = (e: any) => {
        setEmail(e.target.value);
    };

    const nameChangeHandler = (e: any) => {
        setName(e.target.value);
    };

    const passwordChangeHandler = (e: any) => {
        setPassword(e.target.value);
    };

    const passwordConfirmChangeHandler = (e: any) => {
        setPasswordConfirm(e.target.value);
    };

    const profileUpdateHandler = () => {
        api.put("account/edit", {
            email,
            name,
            requestType: "profile",
        })
            .then(({ data: { data: d } }) => {
                setUser(d);
                enqueueSnackbar("Your profile was updated successfully.", {
                    variant: "success",
                });
            })
            .catch((error) => {
                enqueueSnackbar(
                    "Oops, something went wrong! Ensure you have filled all fields.",
                    {
                        variant: "error",
                    }
                );
            });
    };

    const passwordUpdateHandler = () => {
        api.put("account/edit", {
            password,
            passwordConfirm,
        })
            .then(({ data: { data: d } }) => {
                setUser(d);
                enqueueSnackbar("Your password was updated successfully.", {
                    variant: "success",
                });
            })
            .catch((error) => {
                enqueueSnackbar(
                    "Oops, something went wrong! Ensure you enter matching passwords.",
                    {
                        variant: "error",
                    }
                );
            });
    };

    return (
        <Slide direction="right" in>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        {isTablet ? (
                            <Grid
                                container
                                direction="column"
                                justify="center"
                                alignItems="center"
                            >
                                <Button
                                    onClick={() => {
                                        goBack();
                                    }}
                                    startIcon={<KeyboardReturnIcon />}
                                    size="small"
                                    variant="contained"
                                    style={{
                                        outline: "none",
                                        marginTop: "3%",
                                        backgroundColor: "#fca10d",
                                    }}
                                >
                                    Return
                                </Button>
                            </Grid>
                        ) : (
                            <Button
                                onClick={() => {
                                    goBack();
                                }}
                                startIcon={<KeyboardReturnIcon />}
                                size="small"
                                variant="contained"
                                style={{
                                    outline: "none",
                                    marginLeft: "24px",
                                    marginTop: "1%",
                                    backgroundColor: "#fca10d",
                                }}
                            >
                                Return
                            </Button>
                        )}

                        <Paper
                            elevation={3}
                            style={{
                                marginTop: "2%",
                                marginLeft: isTablet ? "7%" : "20%",
                                marginRight: isTablet ? "7%" : "20%",
                                marginBottom: "5%",
                                padding: isTablet ? "18px" : "25px",
                            }}
                        >
                            <Grid
                                container
                                direction="column"
                                justify="center"
                                alignItems="center"
                            >
                                <Typography variant="h2">
                                    Edit Profile
                                </Typography>

                                <br />

                                <div style={{ textAlign: "center" }}>
                                    <Typography variant="h5">
                                        {`You joined us on: ${
                                            user
                                                ? moment
                                                      .utc(user.createdAt)
                                                      .format("DD/MM/YYYY")
                                                : ""
                                        }.`}
                                    </Typography>
                                </div>

                                <hr />

                                <TextField
                                    label="Email"
                                    name="email"
                                    type="email"
                                    value={email}
                                    onChange={emailChangeHandler}
                                    style={{ width: isTablet ? "75%" : "50%" }}
                                />

                                <hr />

                                <TextField
                                    label="Name"
                                    name="name"
                                    type="text"
                                    value={name}
                                    onChange={nameChangeHandler}
                                    style={{ width: isTablet ? "75%" : "50%" }}
                                />

                                <hr />

                                <Button
                                    onClick={profileUpdateHandler}
                                    startIcon={<SaveIcon />}
                                    size="large"
                                    variant="contained"
                                    style={{
                                        outline: "none",
                                        backgroundColor: "#fca10d",
                                    }}
                                >
                                    Save
                                </Button>

                                <hr />

                                <TextField
                                    label="New Password"
                                    name="password"
                                    type="password"
                                    value={password}
                                    onChange={passwordChangeHandler}
                                    style={{ width: isTablet ? "75%" : "50%" }}
                                />

                                <hr />

                                <TextField
                                    label="Confirm New Password"
                                    name="confirmPassword"
                                    type="password"
                                    value={passwordConfirm}
                                    onChange={passwordConfirmChangeHandler}
                                    style={{ width: isTablet ? "75%" : "50%" }}
                                />

                                <hr />

                                <Button
                                    onClick={passwordUpdateHandler}
                                    startIcon={<LockIcon />}
                                    size="large"
                                    variant="contained"
                                    style={{
                                        outline: "none",
                                        backgroundColor: "#fca10d",
                                    }}
                                >
                                    Change Password
                                </Button>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Slide>
    );
};

export default EditAccount;
