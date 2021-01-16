import CircularProgress from "@material-ui/core/CircularProgress";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CardActionArea from "@material-ui/core/CardActionArea";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CardContent from "@material-ui/core/CardContent";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import Typography from "@material-ui/core/Typography";
import SubjectIcon from "@material-ui/icons/Subject";
import { useTheme } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import { useRecoilValue } from "recoil";
import { useSnackbar } from "notistack";

import { timeOfDay } from "../../helpers";
import userAtom from "../../atoms/user";
import api from "../../services/api";
import { IData } from "./interfaces";

const Dashboard: React.FC = () => {
    const [data, setData] = useState<IData | null>(null);
    const { enqueueSnackbar } = useSnackbar();

    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.down("sm"));

    const user = useRecoilValue(userAtom);

    useEffect(() => {
        api.get("/dashboard")
            .then(({ data: { data: d } }) => {
                setData(d);
            })
            .catch(() => {
                enqueueSnackbar("Failed to get storage information.", {
                    variant: "error",
                });
            });
    }, [enqueueSnackbar]);

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
                        <Paper
                            elevation={3}
                            style={{
                                marginTop: "5%",
                                marginLeft: isTablet ? "7%" : "20%",
                                marginRight: isTablet ? "7%" : "20%",
                                marginBottom: "3%",
                                padding: isTablet ? "18px" : "25px",
                            }}
                        >
                            <Grid
                                container
                                direction="column"
                                justify="center"
                                alignItems="center"
                            >
                                {isTablet ? (
                                    <Typography
                                        variant="h3"
                                        style={{ textAlign: "center" }}
                                    >
                                        {`Good ${timeOfDay()}, ${
                                            user ? user.name + "." : ""
                                        }`}
                                    </Typography>
                                ) : (
                                    <Typography variant="h2">
                                        {`Good ${timeOfDay()}, ${
                                            user ? user.name + "." : ""
                                        }`}
                                    </Typography>
                                )}

                                <hr />
                                <hr />

                                {isTablet ? (
                                    <React.Fragment>
                                        <div>
                                            <Card
                                                variant="outlined"
                                                style={{
                                                    padding: "10px",
                                                    width: "300px",
                                                }}
                                            >
                                                <CardActionArea
                                                    style={{
                                                        outline: "none",
                                                    }}
                                                >
                                                    <Grid
                                                        container
                                                        direction="column"
                                                        justify="center"
                                                        alignItems="center"
                                                    >
                                                        <SubjectIcon
                                                            style={{
                                                                height: "50px",
                                                                width: "50px",
                                                            }}
                                                        />
                                                        <CardContent>
                                                            <Grid
                                                                container
                                                                direction="column"
                                                                justify="center"
                                                                alignItems="center"
                                                            >
                                                                <Typography variant="h4">
                                                                    Lists
                                                                </Typography>
                                                                <hr />
                                                                <Typography variant="h5">
                                                                    {data ? (
                                                                        data.listCount
                                                                    ) : (
                                                                        <CircularProgress />
                                                                    )}
                                                                </Typography>
                                                            </Grid>
                                                        </CardContent>
                                                    </Grid>
                                                </CardActionArea>
                                            </Card>
                                        </div>

                                        <hr />

                                        <div>
                                            <Card
                                                variant="outlined"
                                                style={{
                                                    padding: "10px",
                                                    width: "300px",
                                                }}
                                            >
                                                <CardActionArea
                                                    style={{
                                                        outline: "none",
                                                    }}
                                                >
                                                    <Grid
                                                        container
                                                        direction="column"
                                                        justify="center"
                                                        alignItems="center"
                                                    >
                                                        <FastfoodIcon
                                                            style={{
                                                                height: "50px",
                                                                width: "50px",
                                                            }}
                                                        />
                                                        <CardContent>
                                                            <Grid
                                                                container
                                                                direction="column"
                                                                justify="center"
                                                                alignItems="center"
                                                            >
                                                                <Typography variant="h4">
                                                                    Products
                                                                </Typography>
                                                                <hr />
                                                                <Typography variant="h5">
                                                                    {data ? (
                                                                        data.productCount
                                                                    ) : (
                                                                        <CircularProgress />
                                                                    )}
                                                                </Typography>
                                                            </Grid>
                                                        </CardContent>
                                                    </Grid>
                                                </CardActionArea>
                                            </Card>
                                        </div>

                                        <hr />

                                        <div>
                                            <Card
                                                variant="outlined"
                                                style={{
                                                    padding: "10px",
                                                    width: "300px",
                                                }}
                                            >
                                                <CardActionArea
                                                    style={{
                                                        outline: "none",
                                                    }}
                                                >
                                                    <Grid
                                                        container
                                                        direction="column"
                                                        justify="center"
                                                        alignItems="center"
                                                    >
                                                        <ShoppingCartIcon
                                                            style={{
                                                                height: "50px",
                                                                width: "50px",
                                                            }}
                                                        />
                                                        <CardContent>
                                                            <Grid
                                                                container
                                                                direction="column"
                                                                justify="center"
                                                                alignItems="center"
                                                            >
                                                                <Typography variant="h4">
                                                                    Shopping
                                                                    Runs
                                                                </Typography>
                                                                <hr />
                                                                <Typography variant="h5">
                                                                    {data ? (
                                                                        data.shoppingRunCount
                                                                    ) : (
                                                                        <CircularProgress />
                                                                    )}
                                                                </Typography>
                                                            </Grid>
                                                        </CardContent>
                                                    </Grid>
                                                </CardActionArea>
                                            </Card>
                                        </div>
                                    </React.Fragment>
                                ) : (
                                    <div
                                        style={{
                                            display: "flex",
                                            width: "100%",
                                            justifyContent: "space-evenly",
                                        }}
                                    >
                                        <Card
                                            variant="outlined"
                                            style={{
                                                flex: 0.3,
                                                padding: "10px",
                                            }}
                                        >
                                            <CardActionArea
                                                style={{
                                                    outline: "none",
                                                }}
                                            >
                                                <Grid
                                                    container
                                                    direction="column"
                                                    justify="center"
                                                    alignItems="center"
                                                >
                                                    <SubjectIcon
                                                        style={{
                                                            height: "50px",
                                                            width: "50px",
                                                        }}
                                                    />
                                                    <CardContent>
                                                        <Grid
                                                            container
                                                            direction="column"
                                                            justify="center"
                                                            alignItems="center"
                                                        >
                                                            <Typography variant="h4">
                                                                Lists
                                                            </Typography>
                                                            <hr />
                                                            <Typography variant="h5">
                                                                {data ? (
                                                                    data.listCount
                                                                ) : (
                                                                    <CircularProgress />
                                                                )}
                                                            </Typography>
                                                        </Grid>
                                                    </CardContent>
                                                </Grid>
                                            </CardActionArea>
                                        </Card>
                                        <Card
                                            variant="outlined"
                                            style={{
                                                flex: 0.3,
                                                padding: "10px",
                                            }}
                                        >
                                            <CardActionArea
                                                style={{
                                                    outline: "none",
                                                }}
                                            >
                                                <Grid
                                                    container
                                                    direction="column"
                                                    justify="center"
                                                    alignItems="center"
                                                >
                                                    <FastfoodIcon
                                                        style={{
                                                            height: "50px",
                                                            width: "50px",
                                                        }}
                                                    />
                                                    <CardContent>
                                                        <Grid
                                                            container
                                                            direction="column"
                                                            justify="center"
                                                            alignItems="center"
                                                        >
                                                            <Typography variant="h4">
                                                                Products
                                                            </Typography>
                                                            <hr />
                                                            <Typography variant="h5">
                                                                {data ? (
                                                                    data.productCount
                                                                ) : (
                                                                    <CircularProgress />
                                                                )}
                                                            </Typography>
                                                        </Grid>
                                                    </CardContent>
                                                </Grid>
                                            </CardActionArea>
                                        </Card>
                                        <Card
                                            variant="outlined"
                                            style={{
                                                flex: 0.3,
                                                padding: "10px",
                                            }}
                                        >
                                            <CardActionArea
                                                style={{
                                                    outline: "none",
                                                }}
                                            >
                                                <Grid
                                                    container
                                                    direction="column"
                                                    justify="center"
                                                    alignItems="center"
                                                >
                                                    <ShoppingCartIcon
                                                        style={{
                                                            height: "50px",
                                                            width: "50px",
                                                        }}
                                                    />
                                                    <CardContent>
                                                        <Grid
                                                            container
                                                            direction="column"
                                                            justify="center"
                                                            alignItems="center"
                                                        >
                                                            <Typography variant="h4">
                                                                Shopping Runs
                                                            </Typography>
                                                            <hr />
                                                            <Typography variant="h5">
                                                                {data ? (
                                                                    data.shoppingRunCount
                                                                ) : (
                                                                    <CircularProgress />
                                                                )}
                                                            </Typography>
                                                        </Grid>
                                                    </CardContent>
                                                </Grid>
                                            </CardActionArea>
                                        </Card>
                                    </div>
                                )}

                                <hr />
                                <hr />
                                {isTablet ? (
                                    <React.Fragment>
                                        <div style={{ textAlign: "center" }}>
                                            <Typography variant="h6">
                                                ShopPal helps to simplify your
                                                shopping trips by putting all of
                                                your lists in one place.
                                            </Typography>
                                        </div>
                                        <div style={{ textAlign: "center" }}>
                                            <Typography variant="body1">
                                                Let's make your shopping a
                                                breeze. Why not start getting
                                                your list together for your next
                                                big shop?
                                            </Typography>
                                        </div>
                                    </React.Fragment>
                                ) : (
                                    <React.Fragment>
                                        <div>
                                            <Typography variant="h6">
                                                ShopPal helps to simplify your
                                                shopping trips by putting all of
                                                your lists in one place.
                                            </Typography>
                                        </div>
                                        <div>
                                            <Typography variant="body1">
                                                Let's make your shopping a
                                                breeze. Why not start getting
                                                your list together for your next
                                                big shop?
                                            </Typography>
                                        </div>
                                    </React.Fragment>
                                )}
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Slide>
    );
};

export default Dashboard;
