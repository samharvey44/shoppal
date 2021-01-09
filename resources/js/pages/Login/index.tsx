import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useSnackbar } from "notistack";
import React, { useState } from "react";

import { API, cupboard } from "../../config/globals";
import useLoginUser from "../../hooks/user/login";
import { toFormData } from "../../helpers";
import api from "../../services/api";

const Login: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { enqueueSnackbar } = useSnackbar();

    const emailChangeHandler = (e: any) => {
        setEmail(e.target.value);
    };

    const passwordChangeHandler = (e: any) => {
        setPassword(e.target.value);
    };

    const signinHandler = (e: any) => {
        e.preventDefault();
        api.post(
            API.AUTH.PREFIX,
            toFormData({
                ...API.AUTH.PARAMS,
                username: email,
                password,
            }),
            {
                baseURL: API.SERVER,
            }
        )
            .then(({ data }) => {
                cupboard.set(cupboard.KEYS.AUTH, data);
                useLoginUser();
            })

            .catch((error) => {
                if (error.response.status === 400) {
                    enqueueSnackbar("Incorrect login details.", {
                        variant: "error",
                    });
                } else {
                    enqueueSnackbar("Login failed.", { variant: "error" });
                }
            });
    };

    return (
        <Grid container spacing={4}>
            <Grid item xs={6}>
                <Paper
                    elevation={3}
                    style={{
                        height: "600px",
                        marginTop: "15%",
                        marginLeft: "20%",
                        marginBottom: "3%",
                    }}
                >
                    <div></div>
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper
                    elevation={3}
                    style={{
                        height: "600px",
                        marginTop: "15%",
                        marginRight: "20%",
                        marginBottom: "3%",
                    }}
                >
                    <div style={{ marginLeft: "5%", paddingTop: "3%" }}>
                        <Typography variant="h2">ShopPal</Typography>
                    </div>
                    <div style={{ marginLeft: "5%", paddingTop: "3%" }}>
                        <Typography variant="h5">
                            Welcome to the shopping list application.
                        </Typography>
                        <br />
                        <br />
                        <Typography variant="h6">
                            To get started, sign up using the button below.
                            <br />
                            Already have an account? Great! Sign in using the
                            provided form.
                        </Typography>
                    </div>
                    <br />
                    <br />
                    <br />

                    <div style={{ marginLeft: "5%" }}>
                        <Button
                            variant="contained"
                            color="primary"
                            style={{ outline: "none" }}
                        >
                            Sign up
                        </Button>
                    </div>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default Login;
