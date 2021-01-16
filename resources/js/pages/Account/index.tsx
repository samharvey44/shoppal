import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import React from "react";

const Account: React.FC = () => {
    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Slide direction="right" in>
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
                        <p>Hello</p>
                    </Paper>
                </Grid>
            </Grid>
        </Slide>
    );
};

export default Account;
