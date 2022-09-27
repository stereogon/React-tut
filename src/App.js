import "./App.css";
// import NavbarJsx from "./components/Navbar_jsx";
// import NavbarClassComponent from "./components/Navbar-classcomponent";
// import Counter from "./components/Counter";
// import ClickMe from "./components/ClickMe";
// import ClickMeCc from "./components/ClickMeCc";
// import Eventbind from "./components/Eventbind";
// import ParentComponent from "./components/ParentComponent";
// import UserGreeting from "./components/UserGreeting";
// import Namelist from "./components/Namelist";
// import PersonList from "./components/PersonList";
// import FormHandling from "./components/FormHandling";
import LifeCycleA from "./components/LifeCycleA";
import PureCom from "./components/PureCom";
import MemoCom from "./components/MemoCom";

function App() {
    return (
        <>
            <div className="App">
                <LifeCycleA />
                <hr />
                <PureCom />
                <hr />
                <MemoCom />
            </div>
            {/* <FormHandling /> */}
            {/* <PersonList /> */}
            {/* <Namelist /> */}
            {/* <UserGreeting /> */}
            {/* <ParentComponent /> */}
            {/* <Eventbind /> */}
            {/* <ClickMe />
            <ClickMeCc /> */}
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
