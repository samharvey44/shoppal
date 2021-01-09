import React from "react";

import { EPages } from "./enums";

export interface IPage {
    name: EPages;
    label: string;
    path: string;
    Component: React.ComponentType;
    authed: boolean;
}
