import React from "react";
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

export default class Index extends React.Component<{}, {}> {
    public render() {
        return (
            <Provider {...Store}>
                <Router {...this.props} routes={routes} />
            </Provider>
        );
    }
}
