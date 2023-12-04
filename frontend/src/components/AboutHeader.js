import React from "react";
import headerImg from "../assets/images/gdsc-banner.webp";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

const AboutHeader = () => {
  return (
    <div className="flex xs:flex-col mt-10 px-20 xs:px-3 xs:mt-5 gap-10 justify-between items-center w-full max-w-[2500px]">
      <div className="flex xs:justify-center items-center w-1/2 xs:w-full">
        <img
          src={headerImg}
          alt="header-img"
          className="w-[500px] custom-border"
        />
      </div>
      <div className="flex xs:mt-8 flex-col gap-4 max-w-[800px] xs:gap-5 justify-center items-start w-1/2 xs:w-full">
        <h1 className="text-[44px] flex items-center gap-2 font-medium xs:text-2xl text-blue-500">
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
        <button className="px-3 mt-1 py-2 flex items-center gap-2 bg-blue-500 hover:bg-blue-600 transition-all duration-200 rounded-md font-medium text-white">
          Know More <HiArrowTopRightOnSquare fontSize={20} />
        </button>
      </div>
    </div>
  );
};

export default AboutHeader;
