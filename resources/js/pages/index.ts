import { IPage } from "./interfaces";
import Dashboard from "./Dashboard";
import { EPages } from "./enums";
import Login from "./Login";

const unauthed: IPage[] = [
    {
        name: EPages.Login,
        label: "Login",
        path: "/login",
        Component: Login,
        authed: false,
    },
];

const authed: IPage[] = [
    {
        name: EPages.Dashboard,
        label: "Dashboard",
        path: "/dashboard",
        Component: Dashboard,
        authed: true,
    },
];

export const pages: IPage[] = [...unauthed, ...authed];
