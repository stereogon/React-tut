const Hello = ({ name, heroName }) => {
    // props.name = "Chandan" this is not possible
    // props are immutable
    // const {name, heroName} = props;
    return (
        <div>
            Hello {name} aka {heroName}
            <h1>{children}</h1>
        </div>
    );
};

export default Hello;
