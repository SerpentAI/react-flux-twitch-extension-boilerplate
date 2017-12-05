import React, { Component } from "react";

import "./index.css";

class Config extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {};
    }

    componentDidMount() {
        window.Twitch.ext.onAuthorized(auth => {
            console.log(auth);
        });
    }

    componentWillUnmount() {}

    render() {
        return <section className="Config">Config</section>;
    }
}

export default Config;
