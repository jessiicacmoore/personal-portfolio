import React from 'react'
import Footer from "./Footer";
import { Helmet } from 'react-helmet'
import 'normalize.css';
import "../styles/main.scss";

const Layout = ({title, children}) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <link
      href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700|Playfair+Display:400,900&display=swap"
      rel="stylesheet"
    />
    <script src="https://kit.fontawesome.com/fd4fafc6c7.js"></script>
      </Helmet>
      {children}
      <Footer/>
    </div>
  )
}

export default Layout
