import React from "react";
import LinkButton from "./components/LinkButton";

export default class Page1 extends React.Component<{}, {}> {
    public render() {
        return (
            <div>
                <h1>top page</h1>
                <LinkButton to="/page1">move to page1</LinkButton>
            </div>
        );
    }
}
