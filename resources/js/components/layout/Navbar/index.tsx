import CircularProgress from "@material-ui/core/CircularProgress";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import StorefrontIcon from "@material-ui/icons/Storefront";
import ExtensionIcon from "@material-ui/icons/Extension";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import SubjectIcon from "@material-ui/icons/Subject";
import { useTheme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import React from "react";

import Logout from "../../buttons/Logout";

const NavBar: React.FC<{ page: any }> = ({ page, children }) => {
    const theme = useTheme();
    const isPhone = useMediaQuery(theme.breakpoints.down("xs"));
    const isTablet = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <React.Fragment>
            {page ? (
                <AppBar
                    position="static"
                    style={{
                        marginBottom: "25px",
                    }}
                >
                    <Toolbar
                        style={{
                            paddingLeft: isPhone
                                ? "6px"
                                : isTablet
                                ? "8px"
                                : undefined,
                        }}
                    >
                        <Link to="/dashboard">
                            <Button
                                startIcon={isPhone ? null : <StorefrontIcon />}
                                size="large"
                                variant="contained"
                                style={{
                                    outline: "none",
                                    backgroundColor:
                                        page.label === "Dashboard"
                                            ? "#fca10d"
                                            : undefined,
                                }}
                            >
                                {isPhone ? <StorefrontIcon /> : "ShopPal"}
                            </Button>
                        </Link>

                        <div
                            style={{
                                display: "flex",
                                width: "100%",
                            }}
                        >
                            <Button
                                startIcon={isPhone ? null : <SubjectIcon />}
                                size="large"
                                variant="contained"
                                style={{
                                    marginLeft: isPhone ? "6px" : "auto",
                                    outline: "none",
                                    backgroundColor:
                                        page.label === "Lists"
                                            ? "#fca10d"
                                            : undefined,
                                }}
                            >
                                {isPhone ? <SubjectIcon /> : "Lists"}
                            </Button>

                            <Button
                                startIcon={isPhone ? null : <FastfoodIcon />}
                                size="large"
                                variant="contained"
                                style={{
                                    marginLeft: "8px",
                                    outline: "none",
                                    backgroundColor:
                                        page.label === "Products"
                                            ? "#fca10d"
                                            : undefined,
                                }}
                            >
                                {isPhone ? <FastfoodIcon /> : "Products"}
                            </Button>

                            <Button
                                startIcon={isPhone ? null : <ExtensionIcon />}
                                size="large"
                                variant="contained"
                                style={{
                                    marginLeft: isPhone ? "6px" : "8px",
                                    outline: "none",
                                    backgroundColor:
                                        page.label === "Extras"
                                            ? "#fca10d"
                                            : undefined,
                                }}
                            >
                                {isPhone ? <ExtensionIcon /> : "Extras"}
                            </Button>

                            <Link to="/account">
                                <Button
                                    startIcon={
                                        isPhone ? null : <AccountBoxIcon />
                                    }
                                    size="large"
                                    variant="contained"
                                    style={{
                                        marginLeft: isPhone ? "6px" : "8px",
                                        outline: "none",
                                        backgroundColor:
                                            page.label === "Account"
                                                ? "#fca10d"
                                                : undefined,
                                    }}
                                >
                                    {isPhone ? <AccountBoxIcon /> : "Account"}
                                </Button>
                            </Link>

                            {page.label === "Login" ? null : isPhone ||
                              isTablet ? null : (
                                <Logout />
                            )}
                        </div>
                    </Toolbar>

                    {page.label === "Login" ? null : isPhone || isTablet ? (
                        <Toolbar>
                            <Grid
                                container
                                direction="column"
                                justify="center"
                                alignItems="center"
                            >
                                <Logout />
                            </Grid>
                        </Toolbar>
                    ) : null}
                </AppBar>
            ) : (
                <CircularProgress />
            )}
            {children}
        </React.Fragment>
    );
};

export default NavBar;
