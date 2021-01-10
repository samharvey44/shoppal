import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import React from "react";

const NavBar: React.FC = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <p>hello</p>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
