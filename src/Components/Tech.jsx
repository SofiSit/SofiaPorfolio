import React from "react";

import { SectionWrapper } from "../hoc";
import BallCanvas from "./canvas/Ball";
import { technologies } from "../Constant";

const Tech = () => {
  return (
    <div data-aos="fade-up" className='flex flex-row flex-wrap justify-center gap-10 mb-15'>
       {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    

  );
};

export default SectionWrapper(Tech, "tech");