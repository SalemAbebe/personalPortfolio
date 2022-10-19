import "./App.css";
import routes from "./Config/routes";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/ContactMe/Contact";
import Nav2 from "./Components/Nav2/Nav2";

function App() {
  return (
    <div className="App">
      <Nav2 />
      {routes}
    </div>
  );
}

export default App;
