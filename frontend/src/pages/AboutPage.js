import React from 'react'
import AboutHeader from '../components/AboutHeader'
import AboutTimeline from '../components/AboutTimeline'

const AboutPage = () => {
  return (
    <div className='w-full flex flex-col gap-20 px-20 py-10'>
      <AboutHeader />
      <AboutTimeline />
    </div>
  )
}

export default AboutPage