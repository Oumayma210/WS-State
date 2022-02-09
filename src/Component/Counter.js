import React, { Component } from "react";

export default class Counter extends Component {
    //1 intialisation de l'etat
    constructor(props) {
        console.log("component init");
        super(props);
        this.state = { count: 0 };
    }
    //2 state update
    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };
    decrement = () => {
        this.setState({
            count:
                this.state.count > 0 ? this.state.count - 1 : this.state.count,
        });
    };
    componentDidMount() {
        console.log("Component DidMount");
    }
    componentDidUpdate() {
        console.log("component updated");
    }
    componentWillUnmount() {
        console.log("component will unmount");
    }
    render() {
        console.log("component rendering");
        return <div>
            <button onClick={this.increment}>+</button>
            <h5>{this.state.count}</h5>
            <button onClick={this.decrement}>-</button>
        </div>;
    }
}
