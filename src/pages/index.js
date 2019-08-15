import React from 'react'
import Layout from "../components/Layout";
import MainHeader from "../components/MainHeader"
import AboutSection from '../components/AboutSection'
import SkillsSection from '../components/SkillsSection'
import ProjectsSection from '../components/ProjectsSection'
import ContactSection from '../components/ContactSection'
const index = () => {
  console.log("hello")
  return (
    <Layout title="Jessica Moore"> 
    <MainHeader/>
      <main>
        <AboutSection/>
        <SkillsSection/>
        <ProjectsSection/>
        <ContactSection/>
      </main>
    </Layout>
  )
}

export default index
