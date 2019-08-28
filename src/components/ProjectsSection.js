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
        <Fade bottom>
          <li className="projects-list-item">
            <img src="./img/projects-wine.png" alt="" />
            <div className="project-content-container">
              <h3>Niagara Wineries</h3>
              <h4 className="stack">JavaScript / React / Sass / Yelp Fusion Api</h4>
              <p className="description">
                A work in projgress - Niagara Wineries is a front-end React app that makes calls to Yelp's Fusion api in order to display the local wineries in Niagara. Users can filter results to specific regions of Niagara such as Niagara-On-The-Lake or Beamsville. After completing the winery details aspect, I plan to incorperate a backend so users can save wineries they would like to visit, or wineries they enjoyed.
              </p>
              <p>
                Check it out live as I work on it!
              </p>
              <a
                className="btn"
                href="https://niagara-wineries.netlify.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fas fa-globe"></i>
                {" "}Live
              </a>
              <a
                className="btn btn-ghost"
                href="https://github.com/jessiicacmoore/react-niagara-wineries"
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
            <img src="./img/projects-latda.png" alt="" />
            <div className="project-content-container">
              <h3>Literally Another ToDo App (LATDA)</h3>
              <h4 className="stack">JavaScript / React / Axios / Sass / Django Rest Framework / JWT Authentication</h4>
              <p className="description">
                A simple, minimalist todo app - latda was built with the sole intention of practicing building a full stack web application that required user authentication. A particular challenge I faced was how to handle refreshing the short-lived access token without interrupting the users experience, or ability to post or update todos if they had been inactive for a few minutes.
              </p>
              <a
                className="btn"
                href="https://latda.netlify.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fas fa-globe"></i>
                {" "}Live
              </a>
              <a
                className="btn btn-ghost"
                href="https://github.com/jessiicacmoore/fullstack-todo-app"
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
