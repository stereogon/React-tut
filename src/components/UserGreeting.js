import { Component } from "react";

class UserGreeting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            message: "Nice to Meet you",
        };

        this.sayhello = this.sayhello.bind(this);
    }

    sayhello() {
        console.log(this.state.message);
    }

    render() {
        // if (this.state.isLoggedIn) {
        //     return (
        //         <>
        //             <h1>Hello Chandan</h1>
        //         </>
        //     );
        // }

        // let message;
        // if (this.state.isLoggedIn) {
        //     message = "Hello Chandan";
        // } else {
        //     message = "Hello Guest";
        // }

        // return (
        //     <>
        //         <h1>{message}</h1>
        //     </>
        // );

        // return this.state.isLoggedIn ? (
        //     <div>Welcome Chandan</div>
        // ) : (
        //     <div>Welcome Guest</div>
        // );

        return this.state.isLoggedIn && <div>Welcome Chandan</div>;
    }
}

export default UserGreeting;
