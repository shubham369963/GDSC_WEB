import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { TimelineData } from "../constants/TimelineData";

const AboutTimeline = () => {
  return (
    <VerticalTimeline lineColor="#82b1ff">
      {TimelineData.map((data, index) => (
        <VerticalTimelineElement
          key={index}
          className="vertical-timeline-element--work"
          icon={
            <div className="flex justify-center items-center w-full h-full">
              <img src={data.icon} className="w-[70%] h-[70%] object-contain" />
            </div>
          }
          iconStyle={{
            background: data.color,
            boxShadow: "rgba(130,177,255, 1) 0px 0px 0px 5px",
          }}
          contentStyle={{
            borderBottom: "8px",
            borderStyle: "solid",
            borderBottomColor: data.color,
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            background: "#e1f5fe",
          }}
          contentArrowStyle={{ borderRight: "10px solid  #e1f5fe" }}
          date=""
        >
          <h3 className="text-2xl font-semibold">{data.title}</h3>
          <h4 className="text-xl text-neutral-800 mt-2">{data.subtitle}</h4>
          <p className="text-neutral-700" style={{ fontWeight: "400"}}>{data.description}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default AboutTimeline;
