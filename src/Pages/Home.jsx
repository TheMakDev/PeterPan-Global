import React from 'react'
import HeroSection from '../Component/HeroSection'
import ITBusinessSection from '../Component/ITBusinessSection'
import BusinessSolution from '../Component/BusinessSolution'
import ITBanner from '../Component/ITBanner'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <ITBusinessSection/>
      <BusinessSolution/>
      <ITBanner/>
    </div>
  )
}

export default Home