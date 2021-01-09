import { Switch, Redirect } from "react-router-dom";
import { useRecoilValue } from "recoil";
import React from "react";

import PrivateRoute from "./components/routing/PrivateRoute";
import PublicRoute from "./components/routing/PublicRoute";
import { EPages } from "./pages/enums";
import userAtom from "./atoms/user";
import { pages } from "./pages";

const Router: React.FC = () => {
    const user = useRecoilValue(userAtom);

    return (
        <Switch>
            {pages.map(({ authed, path, Component }) => {
                const Route = authed ? PrivateRoute : PublicRoute;

                const authorised = !!user;

                // If the user isn't authorised, redirect them to the login page.
                let redirectRoute = authed ? "/login" : "/dashboard";

                // If we've got an authed route, a user and they don't have the role
                // for this route, redirect them back to the dashboard.
                if (authed && authorised) {
                    redirectRoute = "/dashboard";
                }

                return (
                    <Route
                        key={path}
                        exact
                        path={path}
                        authed={authorised}
                        component={Component}
                        redirectRoute={redirectRoute}
                    />
                );
            })}

            <Redirect to={`/${user ? EPages.Dashboard : EPages.Login}`} />
        </Switch>
    );
};

export default Router;
