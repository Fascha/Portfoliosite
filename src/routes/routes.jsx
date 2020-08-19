import React from "react";

import { Portfolio } from "../views/Portfolio/Portfolio";

export const routes = [
    {
        exact: false,
        name: "portfolio",
        displayName: "Portfolio",
        endpoint: "/",
        component: <Portfolio />,
    },
];
