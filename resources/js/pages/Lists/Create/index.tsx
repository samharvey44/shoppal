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

import { useGoBack } from "../../helpers";
import api from "../../services/api";

const CreateList = () => {
    const [list, setList] = useState(null);
    const { enqueueSnackbar } = useSnackbar();

    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.down("sm"));

    const history = useHistory();
    const goBack = useGoBack();

    return <p>Hello</p>;
};

export default CreateList;
