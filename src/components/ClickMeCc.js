import { Component } from "react";

class ClickMeCc extends Component {
    clickhandler() {
        console.log("button clicked");
    }

    render() {
        return (
            <>
                <button onClick={this.clickhandler}>Click Me</button>
            </>
        );
    }
}

export default ClickMeCc;
