import "./App.css";
// import NavbarJsx from "./components/Navbar_jsx";
// import NavbarClassComponent from "./components/Navbar-classcomponent";
// import Counter from "./components/Counter";
import ClickMe from "./components/ClickMe";
import ClickMeCc from "./components/ClickMeCc";

function App() {
    return (
        <>
            <ClickMe />
            <ClickMeCc />
            {/* <Counter value={1} /> */}
            {/* <NavbarJsx name="Bruce" heroName="Batman">
                This is children props
            </NavbarJsx>
            <NavbarJsx name="Clark" heroName="Superman" />
            <NavbarJsx name="Diana" heroName="Wonderwoman" />
            <NavbarClassComponent name="Chandan"/> */}
        </>
    );
}

export default App;
