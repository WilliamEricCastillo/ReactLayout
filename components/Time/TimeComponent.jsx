import React, { Component } from 'react';

export class TimeComponent extends Component {
    state = { time: new Date() };

    componentDidMount() {
        this.intervalID = setInterval(() => {
            this.setState({ time: new Date() });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    render() {
        return (this.state.time.toLocaleTimeString()
        );
    }
}