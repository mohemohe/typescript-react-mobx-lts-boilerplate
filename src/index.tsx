import "core-js/stable";
import "whatwg-fetch";
import React from "react";
import ReactDOM from "react-dom";

import("./app").then((module) => {
    ReactDOM.render(<module.default />, document.querySelector("#app"));
});
