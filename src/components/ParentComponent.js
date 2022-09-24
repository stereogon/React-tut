import ChildComponent from "./ChildComponent";
import { Component } from "react";

class ParentComponent extends Component {
    constructor() {
        super();

        this.state = {
            name: "Parent",
        };

        this.parentfun = this.parentfun.bind(this);
    }

    parentfun(childName) {
        alert(`${this.state.name} and ${childName}`);
    }

    render() {
        return (
            <>
                <ChildComponent parentfun={this.parentfun} />
            </>
        );
    }
}

export default ParentComponent;
