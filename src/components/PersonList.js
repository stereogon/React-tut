import { Component } from "react";
import Person from "./Person";

class PersonList extends Component {
    render() {
        const persons = [
            {
                name: "Chandan",
                age: 20,
            },
            {
                name: "Sam",
                age: 21,
            },
            {
                name: "Anuj",
                age: 23,
            },
        ];

        const personlist = persons.map((person) => <Person person={person} />);

        return <>{personlist}</>;
    }
}

export default PersonList;
