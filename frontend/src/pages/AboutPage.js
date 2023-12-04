import React from 'react';
import AboutHeader from '../components/AboutHeader';
import AboutTimeline from '../components/AboutTimeline';
import back from '../assets/images/back.webp';

const AboutPage = () => {
  const containerStyle = {
    backgroundImage: `url(${back})`, // Set the background image
  };

  return (
    <div className='w-full bg-auto bg-repeat-y flex flex-col justify-center items-center gap-20 px-20 py-10 xs:px-5 xs:py-5' style={containerStyle}>
      <AboutHeader />
      <AboutTimeline />
    </div>
  );
}

export default AboutPage;
