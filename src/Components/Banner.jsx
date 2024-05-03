import React from 'react'
import { AiFillGithub } from 'react-icons/ai'

const Banner = () => {
  return (
    <div className='lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flexlg:flex-row flex-col-reverse justify-between lg_gap-28 items-center'>
        <div className='h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white'>
            <h1 className='text-[52px] font-semibold mb-8 leading-normal'>Welcome to <span className='text-pink-500'>my website!</span> </h1>
            <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
            <div className='flex mt-8 gap-2'>
                <div className='flex items-center justify-center'>
                    <div className='flex space-x-2 '>
                        <a href="" className='text-pink-500 hover:text-pink-300 rounded-fulll glow p-2'>
                            <AiFillGithub className='text-[28px]'/>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner