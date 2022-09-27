import React, { PureComponent } from "react";

class PureCom extends PureComponent {
    constructor() {
        super();
        this.state = {
            name: "Chandan",
        };
    }

    componentDidMount() {
        console.log("Pure Component componentDidMount");

        setInterval(() => {
            this.setState({
                name: "Chandan",
            });
        }, 2000);
    }

    componentDidUpdate() {
        console.log("Pure Component componentDidUpdate");
    }

    render() {
        return (
            <React.Fragment>
                <h1>This is a Pure Component.</h1>
                <p>{this.state.name} is 🔥</p>
            </React.Fragment>
        );
    }
}

export default PureCom;
