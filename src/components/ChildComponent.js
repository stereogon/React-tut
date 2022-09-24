export default function ChildComponent(props) {
    return (
        <>
            <button onClick={() => props.parentfun("child")}>Click Me</button>
        </>
    );
}
