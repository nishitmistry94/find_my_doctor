import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero_section from '../../components/Hero_section/Hero_section'
import Footer from '../../components/Footer/Footer'
import Lottie_section from '../../components/lottie_section/Lottie_section'
import Lottie_section2 from '../../components/lottie_section2/Lottie_section2'
import Home_carousel from '../../components/Home_carousal/Home_carousel'

function Home() {
  return (
    <div>
        <Navbar/>
        <Hero_section/>
        <Lottie_section/>
        <Lottie_section2/>
        <Home_carousel/>
        <Footer/>
    </div>
  )
}

export default Home