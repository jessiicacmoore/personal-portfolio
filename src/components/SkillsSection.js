import React from 'react'
import Fade from 'react-reveal/Fade';

const SkillsSection = () => {
  return (
    <section id="skills" className="section section-skills">
        <h2>Core Skills</h2>
        <div className="dev-skills skills-container wrapper">
          <h3>Development</h3>
          <ul className="skills-list dev-skills-list">
            <Fade bottom>
              <li className="skills-list-item">
                <p>HTML</p>
                <img src="./img/skills-html.svg" alt="html" />
              </li>
            </Fade>
            <Fade bottom>
              <li className="skills-list-item">
                <p>CSS</p>
                <img src="./img/skills-css.svg" alt="css" />
              </li>
            </Fade>
            <Fade bottom>
              <li className="skills-list-item">
                <p>Sass</p>
                <img src="./img/skills-sass.svg" alt="Sass" />
              </li>
            </Fade>
            <Fade bottom>
              <li className="skills-list-item">
                <p>JavaScript</p>
                <img src="./img/skills-javascript.svg" alt="JavaScript" />
              </li>
            </Fade>
            <Fade bottom>
              <li className="skills-list-item">
                <p>React</p>
                <img src="./img/skills-react.svg" alt="React" />
              </li>
            </Fade>
            <Fade bottom>
              <li className="skills-list-item">
                <p>Python</p>
                <img src="./img/skills-python.svg" alt="Python" />
              </li>
            </Fade>
            <Fade bottom>
              <li className="skills-list-item">
                <p>Django</p>
                <img src="./img/skills-django.svg" alt="Django" />
              </li>
            </Fade>
            <Fade bottom>
              <li className="skills-list-item">
                <p>PostGresql</p>
                <img src="./img/skills-postgresql.svg" alt="PostGresql" />
              </li>
            </Fade>
            <Fade bottom>
              <li className="skills-list-item">
                <p>Git</p>
                <img src="./img/skills-git.svg" alt="Git" />
              </li>
            </Fade>
          </ul>
        </div>
        <div className="design-skills skills-container wrapper">
          <h3>Design</h3>
          <ul className="skills-list design-skills-list">
            <Fade bottom>
              <li className="skills-list-item">
                <p>Illustrator</p>
                <img src="./img/skills-illustrator.svg" alt="Illustrator" />
              </li>
            </Fade>
            <Fade bottom>
              <li className="skills-list-item">
                <p>Photoshop</p>
                <img src="./img/skills-photoshop.svg" alt="Photoshop" />
              </li>
            </Fade>
            <Fade bottom>
              <li className="skills-list-item">
                <p>InDesign</p>
                <img src="./img/skills-indesign.svg" alt="InDesign" />
              </li>
            </Fade>
          </ul>
        </div>
      </section>
  )
}

export default SkillsSection
