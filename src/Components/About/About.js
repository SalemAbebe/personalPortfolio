import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="about_text">
        <h2>About Me</h2>
        <br />
        <p>
          Full stack web developer adapt at building responsive web application
          from front to back. passionate about learning new technologies,
          bringing ideas to life, and working with dedicated teams to build
          efficient and robust application suited to the user needs.
        </p>
      </div>
      <div className="about_picture">
        <img src={process.env.PUBLIC_URL + "/foto.png"}></img>

        <a href={process.env.PUBLIC_URL + "resume-ea.pdf"} target="_blank">
          <p className="cv">Resume</p>
        </a>
      </div>
    </div>
  );
}

export default About;
