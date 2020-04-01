import React from "react";
import LinkButton from "./components/LinkButton";

export default class Top extends React.Component<{}, {}> {
    public render() {
        return (
            <div>
                <h1>page1</h1>
                <LinkButton to="/">back to top</LinkButton>
            </div>
        );
    }
}
