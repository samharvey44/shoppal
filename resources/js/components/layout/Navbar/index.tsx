import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import StorefrontIcon from "@material-ui/icons/Storefront";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import { Link } from "react-router-dom";
import React from "react";

const NavBar: React.FC = () => {
    return (
        <AppBar position="fixed">
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
    );
};

export default NavBar;
