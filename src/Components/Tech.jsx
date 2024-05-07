import React from 'react'
import css from "../assets/tech/css.png"
import html from "../assets/tech/html.png"
import javascript from "../assets/tech/javascript.png"
import typescript from "../assets/tech/typescript.png"
import reactjs from "../assets/tech/reactjs.png"
import redux from "../assets/tech/redux.png"
import tailwind from "../assets/tech/tailwind.png"
import nodejs from "../assets/tech/nodejs.png"
import mongodb from "../assets/tech/mongodb.png"
import git from "../assets/tech/git.png"
import docker from "../assets/tech/docker.png"
import strapi from "../assets/tech/strapi.png"
import pg from "../assets/tech/pg.png"

const Tech = () => {
  return (
    <div id='tech' className='p-20 flex  flex-col items-center justify-center'>
      <h1 data-aos="fade-up" className='text-[52px] font-semibold mb-20 leading-normal uppercase text-pink-500' >Technologies</h1>
      <div data-aos="fade-up" className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 justify-around   '>
        <h2 className=" text-[26px] flex items-center justify-center font-semibold  text-white rounded-3xl h-36 w-44 border-2 border-pink-300 b-glow" ><img src={css} width={120} height={120} alt="" /></h2>
        <h2 className=" text-[26px] flex items-center justify-center font-semibold  text-white rounded-3xl h-36 w-44 border-2 border-pink-300 b-glow" ><img src={html} width={120} height={120} alt="" /></h2>
        <h2 className=" text-[26px] flex items-center justify-center font-semibold  text-white rounded-3xl h-36 w-44 border-2 border-pink-300 b-glow" ><img src={javascript} width={120} height={120} alt="" /></h2>
        <h2 className=" text-[26px] flex items-center justify-center font-semibold  text-white rounded-3xl h-36 w-44 border-2 border-pink-300 b-glow" ><img src={typescript} width={120} height={120} alt="" /></h2>
        <h2 className=" text-[26px] flex items-center justify-center font-semibold  text-white rounded-3xl h-36 w-44 border-2 border-pink-300 b-glow" ><img src={reactjs} width={120} height={120} alt="" /></h2>
        <h2 className=" text-[26px] flex items-center justify-center font-semibold  text-white rounded-3xl h-36 w-44 border-2 border-pink-300 b-glow" ><img src={redux} width={120} height={120} alt="" /></h2>
        <h2 className=" text-[26px] flex items-center justify-center font-semibold  text-white rounded-3xl h-36 w-44 border-2 border-pink-300 b-glow" ><img src={tailwind} width={120} height={120} alt="" /></h2>
        <h2 className=" text-[26px] flex items-center justify-center font-semibold  text-white rounded-3xl h-36 w-44 border-2 border-pink-300 b-glow" ><img src={nodejs} width={120} height={120} alt="" /></h2>
        <h2 className=" text-[26px] flex items-center justify-center font-semibold  text-white rounded-3xl h-36 w-44 border-2 border-pink-300 b-glow" ><img src={mongodb} width={120} height={120} alt="" /></h2>
        <h2 className=" text-[26px] flex items-center justify-center font-semibold  text-white rounded-3xl h-36 w-44 border-2 border-pink-300 b-glow" ><img src={docker} width={120} height={120} alt="" /></h2>
        <h2 className=" text-[26px] flex items-center justify-center font-semibold  text-white rounded-3xl h-36 w-44 border-2 border-pink-300 b-glow" ><img src={strapi} width={100} height={100} alt="" /></h2>
        <h2 className=" text-[26px] flex items-center justify-center font-semibold  text-white rounded-3xl h-36 w-44 border-2 border-pink-300 b-glow" ><img src={git} width={120} height={120} alt="" /></h2>
        <h2 className=" text-[26px] flex items-center justify-center font-semibold  text-white rounded-3xl h-36 w-44 border-2 border-pink-300 b-glow" ><img src={pg} width={120} height={120} alt="" /></h2>

      </div>
    </div>
  )
}
export default Tech