import "./App.css";
import Navbar from "./components/Navbar";
import NavbarCc from "./components/Navbar-classcomponent";

function App() {
    return (
        <>
            <Navbar />
            <NavbarCc />
            <div className="App">
                <h1>Hello World!</h1>
            </div>
        </>
    );
}

export default App;
