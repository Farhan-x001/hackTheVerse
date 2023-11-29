import React from "react";
import { AboutRow } from "./AboutRow";
import MainImage from "../../public/images/main-img.png";

export const About = () => {
  return (
    
    <div className="flex flex-col gap-20 max-w-7xl mx-auto">
      
      
      <AboutRow
        heading={"About Hack The Verse Codeoholics"}
        img={"./images/clubLogo.png"}
        isReverse
      >
             <p>
Embark on a coding adventure with the "Codeoholics Club" as we present "Hack the Verse," a national-level hackathon that promises to elevate the world of technology to new heights

        </p>
        <p>
          Envision a world where technology knows no bounds and where the power of coding transforms ideas into reality. With "Hack the Verse," we invite participants to push their limits and explore the vast landscape of possibilities in the ever-evolving tech domain.
        </p>
        { <p> This event is being organised by Codeoholics club,CMR Technical Campus, In collaboration with T&apos;hub, Edventure Park, Flutter, Swecha, Knowvation,ElitCeler Technologies, and TensorFlow, this event is set to be a melting pot of creativity and skill. </p> }
        
      </AboutRow>
    </div>
  );
};
