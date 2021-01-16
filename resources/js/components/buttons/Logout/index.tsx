import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import Button from "@material-ui/core/Button";
import React from "react";

import useLogoutUser from "../../../hooks/user/logout";

const Logout = () => {
    const logout = useLogoutUser;

    return (
        <Button
            onClick={logout()}
            startIcon={<MeetingRoomIcon />}
            size="large"
            variant="contained"
            style={{
                marginLeft: "8px",
                outline: "none",
            }}
        >
            Logout
        </Button>
    );
};

export default Logout;
