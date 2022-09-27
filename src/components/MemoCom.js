import React from "react";

function MemoCom() {
    return (
        <>
            <h1>This is a Memo Component</h1>
            <p>
                What Pure components are to Class Components, Memo Components
                are to Functional Components.
            </p>
        </>
    );
}

export default React.memo(MemoCom);
