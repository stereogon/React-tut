import { Component } from "react";

class Namelist extends Component {
    render() {
        const names = ["Chandan", "Anuj", "Sam"];
        const namelist = names.map((name) => <h1>{name}</h1>);
        return (
            <>
                {namelist}
                {/* {names.map((name) => (
                    <h1>{name}</h1>
                ))} */}
            </>
        );
    }
}

export default Namelist;
