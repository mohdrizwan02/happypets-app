import AboutBanner from '@/components/AboutBanner'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import TeamSection from '@/components/TeamSection'
import React from 'react'

const AboutPage = () => {
  return (
    <>
        <Navbar/>
        <AboutBanner/>
        <TeamSection/>
        <Footer/>
    </>
  )
}

export default AboutPage