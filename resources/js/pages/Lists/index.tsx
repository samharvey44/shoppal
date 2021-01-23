import KeyboardReturnIcon from "@material-ui/icons/KeyboardReturn";
import CircularProgress from "@material-ui/core/CircularProgress";
import React, { useEffect, useState, useCallback } from "react";
import CardActionArea from "@material-ui/core/CardActionArea";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Slide from "@material-ui/core/Slide";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import { useSnackbar } from "notistack";
import moment from "moment";

import { useGoBack, ellipsise } from "../../helpers";
import api from "../../services/api";

const Lists: React.FC = () => {
    const [lists, setLists] = useState([]);
    const { enqueueSnackbar } = useSnackbar();

    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.down("sm"));

    const history = useHistory();
    const goBack = useGoBack();

    const getLists = useCallback(
        (s = false) => {
            api.get("/lists", { params: { search: s } })
                .then(({ data: { data: d } }) => {
                    setLists(d);
                })
                .catch(() => {
                    enqueueSnackbar("Failed to get lists!", {
                        variant: "error",
                    });
                });
        },
        [enqueueSnackbar]
    );

    useEffect(() => {
        getLists();
    }, [getLists]);

    const handleChecked = (e: any) => {
        getLists(e.target.checked);
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

                        <div
                            style={{
                                marginTop: "3%",
                                marginLeft: isTablet ? "7%" : "10%",
                                marginRight: isTablet ? "7%" : "10%",
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
                                <Button
                                    size="large"
                                    variant="contained"
                                    style={{
                                        outline: "none",
                                        backgroundColor: "#fca10d",
                                    }}
                                >
                                    Create a List
                                </Button>
                                <hr />

                                <div style={{ display: "flex" }}>
                                    <Typography
                                        variant="subtitle1"
                                        style={{ marginTop: "8px" }}
                                    >
                                        Show completed
                                    </Typography>
                                    <Checkbox
                                        style={{
                                            color: "#fca10d",
                                        }}
                                        onChange={handleChecked}
                                        defaultChecked={false}
                                    />
                                </div>

                                {isTablet ? null : <hr />}
                                <Grid
                                    container
                                    spacing={2}
                                    style={{ alignItems: "stretch" }}
                                >
                                    {lists ? (
                                        lists.map(
                                            (list: {
                                                id: number;
                                                name: string;
                                                notes: string;
                                                complete: boolean;
                                                shop: any;
                                                createdAt: Date;
                                            }) => {
                                                return (
                                                    <Grid
                                                        item
                                                        xs={12}
                                                        md={4}
                                                        style={{
                                                            display: "flex",
                                                            flexWrap: "wrap",
                                                        }}
                                                        key={list.id}
                                                    >
                                                        <Card
                                                            elevation={3}
                                                            style={{
                                                                padding: "10px",
                                                                width: "100%",
                                                            }}
                                                        >
                                                            <CardActionArea
                                                                style={{
                                                                    outline:
                                                                        "none",
                                                                }}
                                                            >
                                                                <CardContent>
                                                                    <Grid
                                                                        container
                                                                        direction="column"
                                                                        justify="center"
                                                                        alignItems="center"
                                                                        style={{
                                                                            overflowWrap:
                                                                                "anywhere",
                                                                            whiteSpace:
                                                                                "pre-line",
                                                                            textAlign:
                                                                                "center",
                                                                        }}
                                                                    >
                                                                        <Typography
                                                                            variant="h4"
                                                                            style={{
                                                                                fontWeight:
                                                                                    "bold",
                                                                                color: list.complete
                                                                                    ? "#fca10d"
                                                                                    : undefined,
                                                                            }}
                                                                        >
                                                                            {`${ellipsise(
                                                                                list.name,
                                                                                40
                                                                            )}`}
                                                                        </Typography>

                                                                        {list.shop ? (
                                                                            <React.Fragment>
                                                                                <Typography variant="subtitle1">
                                                                                    {`List for: ${
                                                                                        isTablet
                                                                                            ? ellipsise(
                                                                                                  list
                                                                                                      .shop
                                                                                                      .name,
                                                                                                  40
                                                                                              )
                                                                                            : ellipsise(
                                                                                                  list
                                                                                                      .shop
                                                                                                      .name,
                                                                                                  50
                                                                                              )
                                                                                    }`}
                                                                                </Typography>
                                                                            </React.Fragment>
                                                                        ) : null}

                                                                        <Typography variant="subtitle1">
                                                                            {`Created: ${moment
                                                                                .utc(
                                                                                    list.createdAt
                                                                                )
                                                                                .format(
                                                                                    "DD/MM/YYYY"
                                                                                )}`}
                                                                        </Typography>

                                                                        <Typography variant="subtitle1">
                                                                            {list.notes ? (
                                                                                <React.Fragment>
                                                                                    <hr />
                                                                                    {isTablet
                                                                                        ? ellipsise(
                                                                                              list.notes,
                                                                                              40
                                                                                          )
                                                                                        : ellipsise(
                                                                                              list.notes,
                                                                                              50
                                                                                          )}
                                                                                </React.Fragment>
                                                                            ) : null}
                                                                        </Typography>
                                                                    </Grid>
                                                                </CardContent>
                                                            </CardActionArea>
                                                        </Card>
                                                    </Grid>
                                                );
                                            }
                                        )
                                    ) : (
                                        <CircularProgress />
                                    )}
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Slide>
    );
};

export default Lists;
