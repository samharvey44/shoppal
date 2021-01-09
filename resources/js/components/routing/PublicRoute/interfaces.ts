import { RouteComponentProps } from "react-router-dom";

export interface IProps {
    component:
        | React.ComponentType<RouteComponentProps<any>>
        | React.ComponentType<any>;
    authed: boolean;
    redirectRoute?: string;
}
