import CircularProgress from "@material-ui/core/CircularProgress";
import CardActionArea from "@material-ui/core/CardActionArea";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import Slide from "@material-ui/core/Slide";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import { useSnackbar } from "notistack";
import moment from "moment";

import api from "../../services/api";

const Lists: React.FC = () => {
    const [lists, setLists] = useState([]);
    const { enqueueSnackbar } = useSnackbar();

    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.down("sm"));

    const [checked, setChecked] = useState(false);

    useEffect(() => {
        api.get("/lists")
            .then(({ data: { data: d } }) => {
                setLists(d);
            })
            .catch(() => {
                enqueueSnackbar("Failed to get lists!", { variant: "error" });
            });
    }, [enqueueSnackbar]);

    const handleChecked = (e: any) => {
        setChecked(e.target.checked);
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
                        <div
                            style={{
                                marginTop: "5%",
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
                                <Paper
                                    style={{ padding: "15px" }}
                                    elevation={3}
                                >
                                    <Grid
                                        container
                                        direction="column"
                                        justify="center"
                                        alignItems="center"
                                    >
                                        <Typography
                                            variant="subtitle1"
                                            style={{ fontWeight: "bold" }}
                                        >
                                            Show Completed?
                                        </Typography>

                                        <Checkbox
                                            style={{
                                                color: "#fca10d",
                                            }}
                                            checked={checked}
                                            onChange={handleChecked}
                                        />
                                    </Grid>
                                </Paper>

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
                                                                            {`${list.name}`}
                                                                        </Typography>

                                                                        {list.shop ? (
                                                                            <React.Fragment>
                                                                                <Typography variant="subtitle1">
                                                                                    {`List for:
                                                                                        ${list.shop.name}`}
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
                                                                                    {
                                                                                        list.notes
                                                                                    }
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
