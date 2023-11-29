import React from "react";
import { TimelineCard } from "./TimelineCard";
import { TimelineDay } from "./TimelineDay";
import { motion } from "framer-motion";

export const Timeline = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.20,
      },
    },
  };
  return (
    <div className="mx-auto md:flex md:gap-20" id="timeline">
      <h1 className="text-center text-glow md:self-center text-5xl md:text-6xl font-semibold text-white pb-8">
        Timeline
      </h1>
      <div>
        <div className="text-white mt-6 mx-auto" id="timeline">
          <motion.ol
            initial="hidden"
            whileInView="show"
            variants={container}
            viewport={{ once: true, amount: 0.4 }}
            className="relative border-l border-gray-200"
          >
              
            <TimelineCard
              heading={"Registration begins"}
              timing={"7th Dec 2023"}
              dotColor={"bg-[#008000]"}
              E94336
            />
            <TimelineCard
              heading={"Registration Ends"}
              timing={"17th Dec 2023"}
              dotColor={"bg-[#008000]"}
            />
            <TimelineDay day={1} date={"16th Dec 2023"} />
            <TimelineCard
              heading={"Team Check-In and Opening Ceremony"}
              timing={"9:00 AM to 9:30 AM"}
              dotColor={"bg-[#008000]"}
            />
             <TimelineCard
              heading={"Company Intro & Presentation"}
              timing={"9:30 AM to 10:30 AM"}
              dotColor={"bg-[#008000]"}
            />
            
            <TimelineCard
              heading={"Idea Presentation with Prototype Demonstration!"}
              timing={"10:30 AM onwards"}
              dotColor={"bg-[#008000]"}
            />
            
            <TimelineCard
              heading={"Break"}
              timing={"1:30 PM to 2:00 PM onwards"}
              dotColor={"bg-[#008000]"}
            />
            <TimelineCard
              heading={"Presentation Resumes"}
              timing={"2:00 PM onwards"}
              dotColor={"bg-[#008000]"}
            />
            <TimelineCard
              heading={"Top 13 Team Announcement"}
              timing={"4:00 PM"}
              dotColor={"bg-[#008000]"}
            />
            
            {/* <TimelineCard
              heading={"Dinner"}
              timing={"8:00 PM onwards"}
              dotColor={"bg-[#FFFFFF]"}
            />
            
            <TimelineCard
              heading={"Mentoring Round"}
              timing={"9:00 PM onwards"}
              dotColor={"bg-[#FFFFFF]"}
            /> */}
            <TimelineDay day={2} date={"17th Dec 2023"} />
            
            
            <TimelineCard
              heading={"Team 13 Teams Check- In"}
              timing={"9:00 AM to 9:30 AM"}
              dotColor={"bg-[#008000]"}
            />
            
            <TimelineCard
              heading={"Final Presentation Start"}
              timing={"9:30 AM"}
              dotColor={"bg-[#008000]"}
            />
            {/* <TimelineCard
              heading={"Final Round of Judging"}
              timing={"11:00 AM to 1:00 PM"}
              dotColor={"bg-[#FFFFFF]"}
            /> */}
            <TimelineCard
              heading={"Lunch"}
              timing={"12:30 PM to 1:30 PM"}
              dotColor={"bg-[#008000]"}
            />
              <TimelineCard
              heading={"Winners Announcement"}
              timing={"1:30 PM to 2:30 PM"}
              dotColor={"bg-[#008000]"}
            />
            
            <TimelineCard
              heading={"Hackathon Ends"}
              timing={"3:00 PM"}
              dotColor={"bg-[#008000]"}
            />
          </motion.ol>
        </div>
      </div>
    </div>
  );
};
