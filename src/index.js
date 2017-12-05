import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import Viewer from "./containers/Viewer";
import Config from "./containers/Config";
import LiveConfig from "./containers/LiveConfig";

if (window.entryPoint === "VIEWER") {
    ReactDOM.render(<Viewer />, document.getElementById("root"));
} else if (window.entryPoint === "CONFIG") {
    ReactDOM.render(<Config />, document.getElementById("root"));
} else if (window.entryPoint === "LIVE_CONFIG") {
    ReactDOM.render(<LiveConfig />, document.getElementById("root"));
}
