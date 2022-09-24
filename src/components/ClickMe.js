export default function ClickMe() {
    const clickhandler = () => {
        console.log("Clicked");
    };

    // if instead of passing the function in the event handler
    // if we would of passed the function and called it then and there
    // then the function would have run on the page load itself and not on the click event

    return (
        <>
            <button onClick={clickhandler}>Click</button>
        </>
    );
}
