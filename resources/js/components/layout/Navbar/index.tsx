import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import StorefrontIcon from "@material-ui/icons/Storefront";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import { Link } from "react-router-dom";
import React from "react";

import useLogoutUser from "../../../hooks/user/logout";

const NavBar: React.FC = ({ children }) => {
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
                        >
                            ShopPal
                        </Button>
                    </Link>

                    <div style={{ display: "flex", width: "100%" }}>
                        <Button
                            onClick={logout()}
                            startIcon={<MeetingRoomIcon />}
                            size="large"
                            variant="contained"
                            style={{ marginLeft: "auto" }}
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
