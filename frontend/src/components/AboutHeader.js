import React from "react";
import headerImg from "../assets/images/about-header.png";

const AboutHeader = () => {
  return (
    <div className="flex xs:flex-col mt-10 xs:mt-5 justify-center items-center w-full">
      <div className="flex relative justify-start xs:justify-center items-center w-1/2 xs:w-full">
        <div
          className="shadow-big flex items-center justify-center w-[500px] xs:w-[300px] h-[500px] xs:h-[300px] overflow-hidden"
          style={{ borderRadius: "35% 65% 60% 40% / 30% 28% 72% 70% " }}
        >
            <img src={headerImg} alt="header-img" className="w-[500px]" />
        </div>
      </div>
      <div className="flex xs:mt-8 flex-col gap-8 xs:gap-5 justify-center items-start w-1/2 xs:w-full">
        <h1 className="text-6xl xs:text-5xl font-semibold text-primary-blue">
          What is GDSC..?
        </h1>
        <p className="text-xl xs:text-justify text-primary-grey">
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
