import React from "react"
import ParticlesBG from "./ParticlesBG"
import Flip from "react-reveal/Flip"

const MainHeader = () => {
  return (
    <header>
      <ParticlesBG />
      <Flip bottom>
        <nav>
          <ul className="nav-links nav-wrapper wrapper">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="wrapper header-wrapper">
          <div className="text-box js--fadeIn">
            <h1>Jessica Moore</h1>
            <h2>
              Forward thinking developer who embraces change and new challenges.
            </h2>
          </div>
          <ul className="social-links js--fadeIn">
            <li>
              <a href="mailto:hello@jessicacmoore.com">
                <i className="fas fa-envelope"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jesscodes/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.github.com/jessiicacmoore"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com/jessiicatweets"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </Flip>
    </header>
  )
}

export default MainHeader
