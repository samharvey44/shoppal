import { Route, Redirect, RouteProps } from "react-router-dom";
import React from "react";

import { IProps } from "./interfaces";

const PrivateRoute: React.FC<IProps & RouteProps> = ({
    redirectRoute = "/login",
    component: Component,
    authed,
    ...rest
}) => (
    <Route
        {...rest}
        render={(props) =>
            authed ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: redirectRoute,
                        state: { from: props.location },
                    }}
                />
            )
        }
    />
);

export default PrivateRoute;
