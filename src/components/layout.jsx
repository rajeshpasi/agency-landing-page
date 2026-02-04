import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Stats from './Stats'
import Team from './Team'
import Services from './Services'

const layout = () => {
  return (
    <div className="">
        <Navbar />
        <Hero/>
        <Stats />
        <Team />
        <Services />
    </div>
  )
}

export default layout