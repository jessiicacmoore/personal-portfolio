import React from "react"
import Fade from 'react-reveal/Fade';


const AboutSection = () => {
  return (
    <section id="about" className="section section-about">
      <figure className="about-section--content">
        <Fade bottom>
          <img src="img/self.jpeg" alt="Jessica Moore" />
        </Fade>
        <Fade bottom>
          <div className="written-content wrapper">
            <h2 className="about-section--title">About Me</h2>
            <p>
              My name is Jessica, but I'd love it if you'd call me
              <span className="highlight"> Jess</span> - I'm a full stack developer
              from the Toronto area.
            </p>
            <p>
              I'm passionate about learning new skills, and always on the lookout
              for my next creative outlet. With a background in marketing, I'm
              driven in my work to make strategic and creative processes come
              together to create a powerful end product.
            </p>
            <a
              className="btn"
              href="./jessica-moore-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="far fa-file"></i> Resume
            </a>
          </div>
        </Fade>
      </figure>
    </section>
  )
}

export default AboutSection
