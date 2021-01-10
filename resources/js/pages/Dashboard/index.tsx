import React from "react";

import useLogoutUser from "../../hooks/user/logout";

const Dashboard: React.FC = () => {
    const logout = useLogoutUser;
    return <button onClick={logout()}>dashboard</button>;
};

export default Dashboard;
