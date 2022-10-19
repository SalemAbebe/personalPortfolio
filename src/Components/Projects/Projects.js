import React from "react";
import Iframe from "react-iframe";
import "./Projects.css";
const view = () => {};
function Projects() {
  return (
    <div className="projects">
      <h2>Project</h2>
      <div className="project">
        <div className="project1">
          <div className="project-link">
            <a href="https://airbnb-ae-2-22.herokuapp.com/" target="_blank">
              <p className="view">View</p>
            </a>
          </div>
        </div>

        <div className="iframe">
          <Iframe
            src={process.env.PUBLIC_URL + "/magic8ball.png"}
            alt="airbnb page"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
