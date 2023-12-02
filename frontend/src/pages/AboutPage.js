import React from 'react'
import AboutHeader from '../components/AboutHeader'
import AboutTimeline from '../components/AboutTimeline'

const AboutPage = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center gap-20 px-20 py-10 xs:px-5 xs:py-5'>
      <AboutHeader />
      <AboutTimeline />
    </div>
  )
}

export default AboutPage