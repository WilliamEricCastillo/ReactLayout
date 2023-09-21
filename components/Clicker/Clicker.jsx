import React, { Component } from 'react';

export class Clicker extends Component {
    state = { clickCount: 0 };

    Button = () => {
        this.setState((prevState) => ({ clickCount: prevState.clickCount + 1 }));
    };

    render() {
        return (
            <div>
                <p>{this.state.clickCount}</p>
                <button onClick={this.Button}>Count</button>
            </div>
        );
    }
}