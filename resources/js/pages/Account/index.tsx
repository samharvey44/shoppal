import BrandingWatermarkIcon from "@material-ui/icons/BrandingWatermark";
import KeyboardReturnIcon from "@material-ui/icons/KeyboardReturn";
import CircularProgress from "@material-ui/core/CircularProgress";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CardActionArea from "@material-ui/core/CardActionArea";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CardContent from "@material-ui/core/CardContent";
import CategoryIcon from "@material-ui/icons/Category";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import Typography from "@material-ui/core/Typography";
import SubjectIcon from "@material-ui/icons/Subject";
import { useTheme } from "@material-ui/core/styles";
import React, { useState, useEffect } from "react";
import StoreIcon from "@material-ui/icons/Store";
import EditIcon from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import Slide from "@material-ui/core/Slide";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import { useRecoilValue } from "recoil";
import { useSnackbar } from "notistack";
import moment from "moment";

import { useGoBack } from "../../helpers";
import userAtom from "../../atoms/user";
import api from "../../services/api";
import { IData } from "./interfaces";

const Account: React.FC = () => {
    const [data, setData] = useState<IData | null>(null);
    const { enqueueSnackbar } = useSnackbar();

    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.down("sm"));
    const isPhone = useMediaQuery(theme.breakpoints.down("xs"));

    const history = useHistory();
    const goBack = useGoBack();

    const user = useRecoilValue(userAtom);

    useEffect(() => {
        api.get("/account")
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
                                <Typography
                                    variant="h2"
                                    style={{ textAlign: "center" }}
                                >
                                    {`${user ? user.name : ""}'s Profile`}
                                </Typography>

                                <br />

                                <Typography
                                    variant="h5"
                                    style={{ textAlign: "center" }}
                                >
                                    {`You joined us on: ${
                                        user
                                            ? moment
                                                  .utc(user.createdAt)
                                                  .format("DD/MM/YYYY")
                                            : ""
                                    }.`}
                                </Typography>

                                <hr />

                                <Button
                                    onClick={() => {
                                        history.push("/account/edit");
                                    }}
                                    startIcon={<EditIcon />}
                                    size="large"
                                    variant="contained"
                                    style={{
                                        outline: "none",
                                        backgroundColor: "#fca10d",
                                    }}
                                >
                                    Edit
                                </Button>

                                <hr />
                                <hr />

                                {isTablet ? (
                                    <React.Fragment>
                                        <div>
                                            <Card
                                                variant="outlined"
                                                style={{
                                                    padding: "10px",
                                                    width: isPhone
                                                        ? "250px"
                                                        : "300px",
                                                }}
                                            >
                                                <CardActionArea
                                                    style={{
                                                        outline: "none",
                                                    }}
                                                    onClick={() => {
                                                        history.push("/lists");
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
                                                        <CardContent
                                                            style={{
                                                                textAlign:
                                                                    "center",
                                                            }}
                                                        >
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
                                                    width: isPhone
                                                        ? "250px"
                                                        : "300px",
                                                }}
                                            >
                                                <CardActionArea
                                                    style={{
                                                        outline: "none",
                                                    }}
                                                    onClick={() => {
                                                        history.push(
                                                            "/products"
                                                        );
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
                                                        <CardContent
                                                            style={{
                                                                textAlign:
                                                                    "center",
                                                            }}
                                                        >
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
                                                    width: isPhone
                                                        ? "250px"
                                                        : "300px",
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
                                                        <CardContent
                                                            style={{
                                                                textAlign:
                                                                    "center",
                                                            }}
                                                        >
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

                                        <hr />

                                        <div
                                            style={{
                                                display: "flex",
                                                width: "100%",
                                                justifyContent: "space-evenly",
                                                textAlign: "center",
                                            }}
                                        >
                                            <Card
                                                variant="outlined"
                                                style={{
                                                    padding: "10px",
                                                    width: isPhone
                                                        ? "250px"
                                                        : "300px",
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
                                                        <BrandingWatermarkIcon
                                                            style={{
                                                                height: "50px",
                                                                width: "50px",
                                                            }}
                                                        />
                                                        <CardContent
                                                            style={{
                                                                textAlign:
                                                                    "center",
                                                            }}
                                                        >
                                                            <Grid
                                                                container
                                                                direction="column"
                                                                justify="center"
                                                                alignItems="center"
                                                            >
                                                                <Typography variant="h4">
                                                                    Brands
                                                                </Typography>
                                                                <hr />
                                                                <Typography variant="h5">
                                                                    {data ? (
                                                                        data.brandCount
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
                                                    width: isPhone
                                                        ? "250px"
                                                        : "300px",
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
                                                        <CategoryIcon
                                                            style={{
                                                                height: "50px",
                                                                width: "50px",
                                                            }}
                                                        />
                                                        <CardContent
                                                            style={{
                                                                textAlign:
                                                                    "center",
                                                            }}
                                                        >
                                                            <Grid
                                                                container
                                                                direction="column"
                                                                justify="center"
                                                                alignItems="center"
                                                            >
                                                                <Typography variant="h4">
                                                                    Categories
                                                                </Typography>
                                                                <hr />
                                                                <Typography variant="h5">
                                                                    {data ? (
                                                                        data.categoryCount
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
                                                    width: isPhone
                                                        ? "250px"
                                                        : "300px",
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
                                                        <StoreIcon
                                                            style={{
                                                                height: "50px",
                                                                width: "50px",
                                                            }}
                                                        />
                                                        <CardContent
                                                            style={{
                                                                textAlign:
                                                                    "center",
                                                            }}
                                                        >
                                                            <Grid
                                                                container
                                                                direction="column"
                                                                justify="center"
                                                                alignItems="center"
                                                            >
                                                                <Typography variant="h4">
                                                                    Shops
                                                                </Typography>
                                                                <hr />
                                                                <Typography variant="h5">
                                                                    {data ? (
                                                                        data.shopCount
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
                                    <React.Fragment>
                                        <div
                                            style={{
                                                display: "flex",
                                                width: "100%",
                                                justifyContent: "space-evenly",
                                                textAlign: "center",
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
                                                    onClick={() => {
                                                        history.push("/lists");
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
                                                        <CardContent
                                                            style={{
                                                                textAlign:
                                                                    "center",
                                                            }}
                                                        >
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
                                                    onClick={() => {
                                                        history.push(
                                                            "/products"
                                                        );
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
                                                        <CardContent
                                                            style={{
                                                                textAlign:
                                                                    "center",
                                                            }}
                                                        >
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
                                                        <CardContent
                                                            style={{
                                                                textAlign:
                                                                    "center",
                                                            }}
                                                        >
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

                                        <hr />

                                        <div
                                            style={{
                                                display: "flex",
                                                width: "100%",
                                                justifyContent: "space-evenly",
                                                textAlign: "center",
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
                                                        <BrandingWatermarkIcon
                                                            style={{
                                                                height: "50px",
                                                                width: "50px",
                                                            }}
                                                        />
                                                        <CardContent
                                                            style={{
                                                                textAlign:
                                                                    "center",
                                                            }}
                                                        >
                                                            <Grid
                                                                container
                                                                direction="column"
                                                                justify="center"
                                                                alignItems="center"
                                                            >
                                                                <Typography variant="h4">
                                                                    Brands
                                                                </Typography>
                                                                <hr />
                                                                <Typography variant="h5">
                                                                    {data ? (
                                                                        data.brandCount
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
                                                        <CategoryIcon
                                                            style={{
                                                                height: "50px",
                                                                width: "50px",
                                                            }}
                                                        />
                                                        <CardContent
                                                            style={{
                                                                textAlign:
                                                                    "center",
                                                            }}
                                                        >
                                                            <Grid
                                                                container
                                                                direction="column"
                                                                justify="center"
                                                                alignItems="center"
                                                            >
                                                                <Typography variant="h4">
                                                                    Categories
                                                                </Typography>
                                                                <hr />
                                                                <Typography variant="h5">
                                                                    {data ? (
                                                                        data.categoryCount
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
                                                        <StoreIcon
                                                            style={{
                                                                height: "50px",
                                                                width: "50px",
                                                            }}
                                                        />
                                                        <CardContent
                                                            style={{
                                                                textAlign:
                                                                    "center",
                                                            }}
                                                        >
                                                            <Grid
                                                                container
                                                                direction="column"
                                                                justify="center"
                                                                alignItems="center"
                                                            >
                                                                <Typography variant="h4">
                                                                    Shops
                                                                </Typography>
                                                                <hr />
                                                                <Typography variant="h5">
                                                                    {data ? (
                                                                        data.shopCount
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
                                )}
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Slide>
    );
};

export default Account;
