import React, { Component } from "react";
import PropTypes from "prop-types";

import "./index.css";

class ExtensionComponent extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {};
    }

    static propTypes = {};

    componentDidMount() {}

    componentWillUnmount() {}

    render() {
        return <div>ExtensionComponent</div>;
    }
}

export default ExtensionComponent;
