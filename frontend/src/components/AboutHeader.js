import React from "react";
import headerImg from "../assets/images/gdsc-banner.webp";

const AboutHeader = () => {
  return (
    <div className="flex xs:flex-col mt-10 px-20 xs:mt-5 justify-between items-center w-full max-w-[2500px]">
      <div className="flex  xs:justify-center items-center w-1/2 xs:w-full">
            <img src={headerImg} alt="header-img" className="w-[500px]" />
      </div>
      <div className="flex xs:mt-8 flex-col gap-4 max-w-[800px] xs:gap-5 justify-center items-start w-1/2 xs:w-full">
        <h1 className="text-[44px] xs:text-2xl text-black">
          Learn About GDSC
        </h1>
        <p className="text-[1.05em] text-justify xs:text-justify text-neutral-800">
          Google Developer Student Clubs (GDSC) are student-led communities on
          campuses worldwide, fostering a passion for technology through coding
          challenges, workshops, and hackathons. Part of the Google Developer
          Groups (GDG) program, these inclusive clubs provide diverse learning
          opportunities, connecting students with industry professionals and
          Google support. With a focus on community building, GDSC empowers
          students to learn, collaborate, and contribute to the global developer
          community, supported by Google resources and expertise.
        </p>
      </div>
    </div>
  );
};

export default AboutHeader;
