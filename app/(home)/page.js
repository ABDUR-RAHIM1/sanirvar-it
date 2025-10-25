import React from 'react' 
import Hero from './components/Hero'
import AdmissionCTA from './components/AdmissionCTA'
import Contact from './components/Contact'
import Footer from '../components/Footer'
import CourseView from './components/CourseView'

export default function HomePage() {
  return (
    <> 
      <Hero />
      <CourseView />
      <AdmissionCTA />
      <Contact />
      <Footer />
    </>
  )
}
