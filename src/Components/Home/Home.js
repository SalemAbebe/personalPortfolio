import React from "react";
import "./Home.css";
import About from "../About/About";
import Contact from "../ContactMe/Contact";
import Projects from "../Projects/Projects";

function Home() {
  return (
    <div className="home">
      <div className="home-img">
        <div className="home-txt">
          <h1>EYERUSALEM </h1>
          <h2>Web Developer</h2>
          <br />
          <h2>
            Hi there <span>&#128075;</span>{" "}
          </h2>
        </div>
      </div>

      {/* <About />
      <Projects />
      <Contact /> */}
    </div>
  );
}

export default Home;
