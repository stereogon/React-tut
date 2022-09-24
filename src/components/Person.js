import { Component } from "react";

class Person extends Component {
    render() {
        const { name, age } = this.props.person;
        return (
            <>
                <h1>
                    {name} is {age} years old.
                </h1>
            </>
        );
    }
}

export default Person;
