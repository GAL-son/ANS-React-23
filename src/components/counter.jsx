import React, { Component } from "react";

class Counter extends Component {
    state = {
        count: 0
    };

    incementCounter = () => {
        this.setState({count: this.state.count + 1});
    };

    currentCounter = () => {
        return this.state.count === 0 ? "Zero" : this.state.count;
    };

    resetCounter = () => {
        this.setState({count: 0});
    };

    render() {
        return <div>
            <span className="badge bg-primary m-2">{this.currentCounter()}</span>
            <button className="btn btn-secondary btn-sm" onClick={this.incementCounter}>Add value</button>
            <button className="btn btn-danger btn-sm" onClick={this.resetCounter}>Reset</button>
        </div>
    }
}

export default Counter;