import React from "react"
import Fade from 'react-reveal/Fade';


const ProjectsSection = () => {
  return (
    <section id="projects" className="section section-projects">
      <h2>Projects</h2>
      <ul className="projects-list wrapper">
        <Fade bottom>
          <li className="projects-list-item">
            <img
              src="./img/projects-buildme.png"
              alt="crowdfunder on mobile device and laptop"
            />
            <div className="project-content-container">
              <h3>buildme</h3>
              <h4 className="stack">
                React / Redux / JavaScript / Sass / Django REST Framework Api /
                PostgreSQL
              </h4>
              <p className="description">
                A web application where junior developers and designers can
                collaborate with one another in order to build an impressive
                portfolio. Users can view, post, find and apply to projects in
                order to connect with other users. This full stack application was
                built with a React front end which makes API requests to the
                Django back end. A collaboration with {" "}
                <a
                  href="https://www.alexyang.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Alex Yang
                </a>
                {" "}and{" "}
                <a
                  href="https://timkurbanov.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Timur Kurbanov
                </a>
                .
              </p>
              <a
                className="btn"
                href="https://github.com/jessiicacmoore/buildme"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
                {" "}GitHub
              </a>
            </div>
          </li>
        </Fade>
        <Fade bottom>
          <li className="projects-list-item">
            <img src="./img/projects-crowdfunder.png" alt="" />
            <div className="project-content-container">
              <h3>Crowdfunder</h3>
              <h4 className="stack">Python / Django / Sqlite / Css</h4>
              <p className="description">
                A backend clone of Kick starter using Django. As a team, we were
                tasked with managing and prioritizing user stories to complete a
                viable product within a short period of time. This project
                required agile development and team coding with GitHub. A
                collaboration with{" "}
                <a
                  href="https://www.alexyang.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Alex Yang
                </a>
                {" "}and{" "}
                <a
                  href="https://timkurbanov.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Timur Kurbanov
                </a>
                .
              </p>
              <a
                className="btn"
                href="https://github.com/jessiicacmoore/django_crowdfunder"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
                {" "}GitHub
              </a>
            </div>
          </li>
        </Fade>
      </ul>
    </section>
  )
}

export default ProjectsSection
