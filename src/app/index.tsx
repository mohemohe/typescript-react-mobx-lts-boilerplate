import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import Router, { RouteInfo } from "./containers/Router";
import Store from "./stores";
import Top from "./top";
import Page1 from "./page1";

const routes: RouteInfo[] = [
    {
        path: "/",
        component: Top,
    },
    {
        path: "/page1",
        component: Page1,
    },
];

export function render() {
    ReactDOM.render(
        <Provider {...Store}>
            <Router routes={routes} />
        </Provider>,
        document.querySelector("#app")
    );
}
