import React from "react";

export interface IProps {
    children: (ready: boolean) => null | React.ReactElement;
}
