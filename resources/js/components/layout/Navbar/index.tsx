import CircularProgress from "@material-ui/core/CircularProgress";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import StorefrontIcon from "@material-ui/icons/Storefront";
import ExtensionIcon from "@material-ui/icons/Extension";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import SubjectIcon from "@material-ui/icons/Subject";
import { useTheme } from "@material-ui/core/styles";
import { Link, useHistory } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import React from "react";

import Logout from "../../buttons/Logout";

const NavBar: React.FC<{ page: any }> = ({ page, children }) => {
    const theme = useTheme();
    const isPhone = useMediaQuery(theme.breakpoints.down("xs"));
    const isTablet = useMediaQuery(theme.breakpoints.down("sm"));

    const history = useHistory();

    return (
        <React.Fragment>
            {page ? (
                <AppBar position="static">
                    {isPhone ? (
                        <React.Fragment>
                            <Toolbar
                                style={{
                                    paddingLeft: "6px",
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        width: "100%",
                                    }}
                                >
                                    <Grid
                                        container
                                        justify="center"
                                        alignItems="center"
                                    >
                                        <Button
                                            onClick={() => {
                                                history.push(`/lists`);
                                            }}
                                            size="large"
                                            variant="contained"
                                            style={{
                                                outline: "none",
                                                backgroundColor:
                                                    page.label === "Lists"
                                                        ? "#fca10d"
                                                        : undefined,
                                                marginLeft: "6px",
                                            }}
                                        >
                                            <SubjectIcon />
                                        </Button>

                                        <Button
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
                                            <FastfoodIcon />
                                        </Button>

                                        <Button
                                            size="large"
                                            variant="contained"
                                            style={{
                                                marginLeft: "6px",
                                                outline: "none",
                                                backgroundColor:
                                                    page.label === "Extras"
                                                        ? "#fca10d"
                                                        : undefined,
                                            }}
                                        >
                                            <ExtensionIcon />
                                        </Button>

                                        <Button
                                            onClick={() => {
                                                history.push("/account");
                                            }}
                                            size="large"
                                            variant="contained"
                                            style={{
                                                marginLeft: "6px",
                                                outline: "none",
                                                backgroundColor:
                                                    page.label === "Account"
                                                        ? "#fca10d"
                                                        : undefined,
                                            }}
                                        >
                                            <AccountBoxIcon />
                                        </Button>
                                    </Grid>
                                </div>
                            </Toolbar>
                            <Toolbar>
                                <Grid
                                    container
                                    justify="center"
                                    alignItems="center"
                                >
                                    <Button
                                        onClick={() => {
                                            history.push(`/dashboard`);
                                        }}
                                        startIcon={<StorefrontIcon />}
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
                                        ShopPal
                                    </Button>

                                    <Logout />
                                </Grid>
                            </Toolbar>
                        </React.Fragment>
                    ) : isTablet && !isPhone ? (
                        <React.Fragment>
                            <Toolbar
                                style={{
                                    paddingLeft: "8px",
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        width: "100%",
                                    }}
                                >
                                    <Button
                                        onClick={() => {
                                            history.push(`/lists`);
                                        }}
                                        startIcon={<SubjectIcon />}
                                        size="large"
                                        variant="contained"
                                        style={{
                                            outline: "none",
                                            backgroundColor:
                                                page.label === "Lists"
                                                    ? "#fca10d"
                                                    : undefined,
                                            marginLeft: "auto",
                                        }}
                                    >
                                        Lists
                                    </Button>

                                    <Button
                                        startIcon={<FastfoodIcon />}
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
                                        Products
                                    </Button>

                                    <Button
                                        startIcon={<ExtensionIcon />}
                                        size="large"
                                        variant="contained"
                                        style={{
                                            marginLeft: "8px",
                                            outline: "none",
                                            backgroundColor:
                                                page.label === "Extras"
                                                    ? "#fca10d"
                                                    : undefined,
                                        }}
                                    >
                                        Extras
                                    </Button>

                                    <Button
                                        onClick={() => {
                                            history.push("/account");
                                        }}
                                        startIcon={<AccountBoxIcon />}
                                        size="large"
                                        variant="contained"
                                        style={{
                                            marginLeft: "8px",
                                            outline: "none",
                                            backgroundColor:
                                                page.label === "Account"
                                                    ? "#fca10d"
                                                    : undefined,
                                        }}
                                    >
                                        Account
                                    </Button>

                                    <Logout />
                                </div>
                            </Toolbar>

                            <Toolbar>
                                <Grid
                                    container
                                    justify="center"
                                    alignItems="center"
                                >
                                    <Button
                                        startIcon={<StorefrontIcon />}
                                        onClick={() => {
                                            history.push(`/dashboard`);
                                        }}
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
                                        ShopPal
                                    </Button>

                                    <Logout />
                                </Grid>
                            </Toolbar>
                        </React.Fragment>
                    ) : (
                        <Toolbar
                            style={{
                                paddingLeft: isTablet ? "8px" : undefined,
                            }}
                        >
                            <Button
                                onClick={() => {
                                    history.push(`/dashboard`);
                                }}
                                startIcon={<StorefrontIcon />}
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
                                ShopPal
                            </Button>

                            <div
                                style={{
                                    display: "flex",
                                    width: "100%",
                                }}
                            >
                                <Button
                                    onClick={() => {
                                        history.push(`/lists`);
                                    }}
                                    startIcon={<SubjectIcon />}
                                    size="large"
                                    variant="contained"
                                    style={{
                                        outline: "none",
                                        backgroundColor:
                                            page.label === "Lists"
                                                ? "#fca10d"
                                                : undefined,
                                        marginLeft: "auto",
                                    }}
                                >
                                    Lists
                                </Button>

                                <Button
                                    startIcon={<FastfoodIcon />}
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
                                    Products
                                </Button>

                                <Button
                                    startIcon={<ExtensionIcon />}
                                    size="large"
                                    variant="contained"
                                    style={{
                                        marginLeft: "8px",
                                        outline: "none",
                                        backgroundColor:
                                            page.label === "Extras"
                                                ? "#fca10d"
                                                : undefined,
                                    }}
                                >
                                    Extras
                                </Button>

                                <Button
                                    onClick={() => {
                                        history.push("/account");
                                    }}
                                    startIcon={<AccountBoxIcon />}
                                    size="large"
                                    variant="contained"
                                    style={{
                                        marginLeft: "8px",
                                        outline: "none",
                                        backgroundColor:
                                            page.label === "Account"
                                                ? "#fca10d"
                                                : undefined,
                                    }}
                                >
                                    Account
                                </Button>

                                <Logout />
                            </div>
                        </Toolbar>
                    )}
                </AppBar>
            ) : (
                <CircularProgress />
            )}
            {children}
        </React.Fragment>
    );
};

export default NavBar;
