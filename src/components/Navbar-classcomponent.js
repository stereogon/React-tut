import { Component } from "react";

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            message: "Welcome Visitor",
            buttonText: "Subscribe",
        };
    }

    myfun() {
        this.setState({
            message: "Thanks for Subscribing",
            buttonText: "Subscribed",
        });
    }

    render() {
        const { name } = this.props;
        return (
            <>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.myfun()}>
                    {this.state.buttonText}
                </button>
                <h1> Class Component {name} </h1>
            </>
        );
    }
}

export default Navbar;
