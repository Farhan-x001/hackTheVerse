import React from "react";
import { Trackcard } from "./Trackcard";

export const Tracks = () => {
  return (
    <div className="text-white">
      <h1 className="text-center text-glow text-5xl md:text-6xl font-semibold text-white pb-8">
        Tracks
      </h1>
      <div className="flex flex-col my-12 flex-wrap gap-10">
        <div className="flex flex-wrap justify-center p-4 gap-10">
          { <Trackcard
            headingBg={"bg-white-500"}
            borderBg={"border-white-500"}
            text="Fin-Tech Theme 1"
            para="Business Innovation in Digital Banking leveraging the power of Data and AI"
          /> }
          <Trackcard
            headingBg={"bg-white-400"}
            borderBg={"border-white-400"}
            text="Fin-Tech Theme 2"
            para="Business innovation and Fintech integrations by leveraging the power of Q2 "
          />
        </div>
        {/* <div className="flex flex-wrap justify-center p-4 gap-10">
          
          <Trackcard
            headingBg={"bg-white-500"}
            borderBg={"border-white-500"}
            text="Entertainment"
            para="The Entertainment track promotes the use of technology as a means of expression, encouraging hackers to explore the ways that we create, consume, and share content. Projects in this track will make the most of hackers’ interdisciplinary skills, perhaps by incorporating music, graphics, and other creative mediums, as well as keeping the user at the forefront of design."
          />
          <Trackcard
            headingBg={"bg-white-500"}
            borderBg={"border-white-500"}
            text="Healthcare"
            para="Each year millions of people face the reality of living with a mental
            illness. This year, we have 4 amazing challenges: Universal Access, Remote Patient Monitoring, Self Care and Active Living, Skills Shortage in Care Services"
          />
        </div>
        */
        <div className="flex flex-wrap justify-center p-4 gap-10">
          {/* <Trackcard
            headingBg={"bg-white-500"}
            borderBg={"border-white-500"}
            text="Open Innovation"
            para="Open innovation is based on the notion that ideas can come from
            anywhere. It means opening up the innovation process beyond
            boundaries in order to increase one's own creative potential through
            the active strategic use of the environment.
            Open Innovation is the use of internal and other companies' ideas to
            develop new businesses. It is a co-creative process that requires
            excellent innovation capability including rich connectivity of people in
            their roles within the community. Users, all with different knowledge,
            skills, experiences, roles, points of view and needs, can contribute
            positively to the innovation process. Ideas do not come when we are
            bound to think, they come when we are free to think."
          />  */}
          <Trackcard
            headingBg={"bg-white-500"}
            borderBg={"border-white-500"}
            text="Fin-Tech Theme 3"
            para="How to keep businesses safe and secure with next-gen fraud & risk management"
          />
        </div>  }
      
      </div> 
    </div>
  );
};
