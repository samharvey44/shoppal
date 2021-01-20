import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";
import Grid from "@material-ui/core/Grid";
import { useSnackbar } from "notistack";

import api from "../../services/api";
import { IData } from "./interfaces";

const Lists: React.FC = () => {
    const [data, setData] = useState<IData | null>(null);
    const { enqueueSnackbar } = useSnackbar();

    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.down("sm"));

    useEffect(() => {
        api.get("/lists")
            .then(({ data: { data: d } }) => {
                setData(d);
            })
            .catch(() => {
                enqueueSnackbar("Failed to get lists!", { variant: "error" });
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
                                marginBottom: "5%",
                                padding: isTablet ? "18px" : "25px",
                            }}
                        >
                            <Grid
                                container
                                direction="column"
                                justify="center"
                                alignItems="center"
                            ></Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Slide>
    );
};

export default Lists;
