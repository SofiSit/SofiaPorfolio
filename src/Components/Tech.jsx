import React from "react";

import { SectionWrapper } from "../hoc";
import BallCanvas from "./canvas/Ball";
import { technologies } from "../Constant";

const Tech = () => {
  return (
  <>
      <div data-aos="fade-up" className='h-full lg:py-40 flex flex-col justify-center items-center text-white'>
                <h1 className='text-[52px] font-semibold mb-8 leading-normal uppercase'>Technologies</h1>
    <div data-aos="fade-up" className='flex flex-row flex-wrap justify-center gap-10 mb-15'>
       {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    </div>
    </>

  );
};

export default SectionWrapper(Tech, "tech");