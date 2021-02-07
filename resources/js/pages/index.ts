import EditAccount from "./Account/Edit";
import { IPage } from "./interfaces";
import Dashboard from "./Dashboard";
import Products from "./Products";
import { EPages } from "./enums";
import Account from "./Account";
import Extras from "./Extras";
import Login from "./Login";
import Lists from "./Lists";

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

    {
        name: EPages.Account,
        label: "Account",
        path: "/account",
        Component: Account,
        authed: true,
    },

    {
        name: EPages.EditAccount,
        label: "Account",
        path: "/account/edit",
        Component: EditAccount,
        authed: true,
    },

    {
        name: EPages.Lists,
        label: "Lists",
        path: "/lists",
        Component: Lists,
        authed: true,
    },

    {
        name: EPages.Products,
        label: "Products",
        path: "/products",
        Component: Products,
        authed: true,
    },

    {
        name: EPages.Extras,
        label: "Extras",
        path: "/extras",
        Component: Extras,
        authed: true,
    },
];

export const pages: IPage[] = [...unauthed, ...authed];
