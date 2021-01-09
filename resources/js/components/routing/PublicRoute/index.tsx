import { Route, Redirect, RouteProps } from "react-router-dom";
import React from "react";

import { IProps } from "./interfaces";

const PublicRoute: React.FC<IProps & RouteProps> = ({
    redirectRoute = "/dashboard",
    component: Component,
    authed,
    ...rest
}) => (
    <Route
        {...rest}
        render={(props) =>
            authed ? (
                <Redirect
                    to={{
                        pathname: redirectRoute,
                        state: { from: props.location },
                    }}
                />
            ) : (
                <Component {...props} />
            )
        }
    />
);

export default PublicRoute;
