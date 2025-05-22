import React from 'react'
import AboutSection from '../Component/AboutSection'
import ITBusinessSection from '../Component/ITBusinessSection'
import AboutHero from '../Component/AboutHero'

const About = () => {
  return (
    <div>
      <AboutHero/>
      <ITBusinessSection/>
      <AboutSection/>
    </div>
  )
}

export default About