import React from "react";

const Hello = () => {
    return React.createElement(
        "div",
        { id: "div_id", class: "dummyClass" },
        React.createElement("h1", null, "Hello Chandan")
    );
};

export default Hello;
