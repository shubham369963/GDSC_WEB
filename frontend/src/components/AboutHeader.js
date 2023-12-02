import React from "react";
import headerImg from "../assets/images/about-header.png";

const AboutHeader = () => {
  return (
    <div className="flex mt-10 justify-center items-center w-full">
      <div className="flex relative justify-start items-center w-1/2">
        <div
          className="shadow-big flex w-[500px] h-[500px] overflow-hidden"
          style={{ borderRadius: "35% 65% 60% 40% / 30% 28% 72% 70% " }}
        >
            <img src="https://img.freepik.com/free-vector/corporate-meeting-employees-cartoon-characters-discussing-business-strategy-planning-further-actions-brainstorming-formal-communication-seminar-concept-illustration_335657-2035.jpg?w=740&t=st=1701526281~exp=1701526881~hmac=b05bbfee4ebc83ce2ee2470fe258df9f963900b42f6fb642a8a42291126c3340" alt="header-img" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="flex flex-col gap-8 justify-center items-start w-1/2">
        <h1 className="text-6xl font-semibold text-primary-blue">
          What is GDSC..?
        </h1>
        <p className="text-xl text-primary-grey">
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
