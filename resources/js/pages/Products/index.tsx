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

const Products = () => {
    const [lists, setLists] = useState([]);
    const { enqueueSnackbar } = useSnackbar();

    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.down("sm"));

    const history = useHistory();
    const goBack = useGoBack();

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
                    </Grid>
                </Grid>
            </Grid>
        </Slide>
    );
};

export default Products;
