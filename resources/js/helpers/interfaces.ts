import React from "react";

import { IPage } from "../pages/interfaces";

export interface IProps {
    children: (page: IPage | null) => null | React.ReactElement;
}
