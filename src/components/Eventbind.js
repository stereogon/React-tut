import { Component } from "react";

class Eventbind extends Component {
    constructor() {
        super();

        this.state = {
            message: "Hello",
        };

        this.clickhandler = this.clickhandler.bind(this);

        /* this is considered the best way to do this */
    }

    clickhandler = () => {
        this.setState({
            message: "Goodbye",
        });
    };

    render() {
        return (
            <>
                <div>
                    <h1>{this.state.message}</h1>
                    <button onClick={this.clickhandler}>Click</button>
                    {/* if we use this the application will break because, the this will now be binded to the function and not the component class */}
                    <button onClick={this.clickhandler.bind(this)}>
                        Click
                    </button>{" "}
                    {/* here we explicitely binded this to the function */}
                    <button onClick={() => this.clickhandler}>
                        Click
                    </button>{" "}
                    {/* this will work fine because arrow functions don't change the binding */}
                    <button onClick={this.clickhandler}>Click</button>
                </div>
            </>
        );
    }
}

export default Eventbind;
