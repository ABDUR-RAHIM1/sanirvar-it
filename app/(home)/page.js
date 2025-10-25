import React from 'react' 
import Hero from './components/Hero'
import Courses from './components/Courses'
import AdmissionCTA from './components/AdmissionCTA'
import Contact from './components/Contact'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <> 
      <Hero />
      <Courses />
      <AdmissionCTA />
      <Contact />
      <Footer />
    </>
  )
}
