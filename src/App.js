import "./App.css";
import Navbar from "./components/Navbar";
import NavbarCc from "./components/Navbar-classcomponent";
import NavbarNojsx from "./components/Navbar_nojsx";

function App() {
    return (
        <>
            <Navbar />
            <NavbarCc />
            <NavbarNojsx />
            <div className="App">
                <h1>Hello World!</h1>
            </div>
        </>
    );
}

export default App;
