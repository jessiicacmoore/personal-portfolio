import React from 'react'

const Footer = () => {
  return (
    <footer>
      <p>&copy;2019 Jessica Moore</p>
      <div className="footer-links wrapper">
        <ul className="site-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        
        <ul className="social-links">
          <li>
            <a
              href="mailto:hello@jessicacmoore.com"
            >
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
    </footer>
  )
}

export default Footer;
