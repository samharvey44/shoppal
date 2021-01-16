import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import StorefrontIcon from "@material-ui/icons/Storefront";
import ExtensionIcon from "@material-ui/icons/Extension";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import SubjectIcon from "@material-ui/icons/Subject";
import MenuItem from "@material-ui/core/MenuItem";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Menu from "@material-ui/core/Menu";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import useLogoutUser from "../../../hooks/user/logout";

const NavBar: React.FC<{ page: any }> = ({ page, children }) => {
    const logout = useLogoutUser;

    return (
        <React.Fragment>
            <AppBar position="static" style={{ marginBottom: "25px" }}>
                <Toolbar>
                    <Link to="/dashboard">
                        <Button
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
                    </Link>

                    <div
                        style={{
                            display: "flex",
                            width: "100%",
                        }}
                    >
                        <Button
                            startIcon={<SubjectIcon />}
                            size="large"
                            variant="contained"
                            style={{
                                marginLeft: "auto",
                                outline: "none",
                                backgroundColor:
                                    page.label === "Lists"
                                        ? "#fca10d"
                                        : undefined,
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

                        <Button
                            onClick={logout()}
                            startIcon={<MeetingRoomIcon />}
                            size="large"
                            variant="contained"
                            style={{ marginLeft: "8px", outline: "none" }}
                        >
                            Logout
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
            {children}
        </React.Fragment>
    );
};

export default NavBar;
