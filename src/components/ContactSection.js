import React from 'react'
import Fade from 'react-reveal/Fade';


const ContactSection = () => {
  return (
    <section id="contact" className="section section-contact">
        <h2>Get In Touch!</h2>
        <ul className="contact-details wrapper">
          <Fade bottom>
            <li className="contact-details-item js--fadeInUp">
              <a
                href="mailto:hello@jessicacmoore.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>Email:</h3>
                <p>hello@jessicacmoore.com</p>
              </a>
            </li>
          </Fade>
          <Fade bottom>
            <li className="contact-details-item js--fadeInUp">
              <a href="tel:1-905-484-4739">
                <h3>Phone:</h3>
                <p>905-484-4739</p>
              </a>
            </li>
          </Fade>
          <Fade bottom>
            <li className="contact-details-item js--fadeInUp">
              <a
                href="https://www.linkedin.com/in/jesscodes/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>LinkedIn:</h3>
                <p>linkedin.com/in/jesscodes/</p>
              </a>
            </li>
          </Fade>
        </ul>
      </section>
  )
}

export default ContactSection
