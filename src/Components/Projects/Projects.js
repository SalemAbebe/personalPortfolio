import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="project">
        <div className="works one">
          <a href="https://airbnb-ae-2-22.herokuapp.com/" target="_blank">
            <img
              src={process.env.PUBLIC_URL + "/aibnbshot.png"}
              alt="airbnb page"
            />{" "}
          </a>
        </div>
        <div className="works">
          <img
            src={process.env.PUBLIC_URL + "/magic8ball.png"}
            alt="airbnb page"
          />
          <button>
            <a href=" https://salemabebe.github.io/magic8ball/" target="_blank">
              View{" "}
            </a>
          </button>
        </div>
        <div className="works"></div>
      </div>
    </div>
  );
}

export default Projects;
