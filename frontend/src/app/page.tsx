import HeroSection from '@/components/HomeComponents/hero'
import HowWeWorks from '@/components/HomeComponents/HowWeWorks'
import Info from '@/components/HomeComponents/Info'
import OurSisterConcern from '@/components/HomeComponents/OurSisterConcern'
import Services from '@/components/HomeComponents/Services'
import React from 'react'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <Info/>
      <HowWeWorks></HowWeWorks>
      <Services></Services>
      <OurSisterConcern></OurSisterConcern>
    </div>
  )
}

export default Home
