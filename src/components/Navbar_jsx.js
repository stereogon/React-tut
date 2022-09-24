const Hello = (props) => {
    // props.name = "Chandan" this is not possible
    // props are immutable
    return (
        <div>
            Hello {props.name} aka {props.heroName}
            <h1>{props.children}</h1>
        </div>
    );
};

export default Hello;
