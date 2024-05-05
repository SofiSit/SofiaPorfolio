import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Banner = () => {
    useEffect(() => {
    AOS.init({
        easing: "ease-out-quart",
        duration: 750,
        delay: 0
    })},[])

    return (
        <div className='lg:px-56 px-10 lg:py-0 py-20 text-center lg:text-center lg-text-center flex justify-center   items-center'>
            <div data-aos="fade-up" className='h-full lg:py-40 flex flex-col justify-center items-center text-white'>
                <h1 className='text-[52px] font-semibold mb-8 leading-normal uppercase'>Welcome to <span className='text-pink-500'>my website!</span> </h1>
                <p className="lg:text-center">"I'm Sofi! Full-Stack developer who enjoys providing solutions using HTML, CSS, JavaScript, Node.js, Express, React,MongoDB and SQL. I am focused on being a valued member of the team, delivering thoughtful solutions and continually improving my skills."</p>
                <div className='flex mt-8 gap-2'>
                    <div className='flex items-center justify-center'>
                        <div className='flex space-x-2 '>
                            <a href="https://github.com/SofiSit" target="_blank" className='text-pink-500 hover:text-pink-300 glow rounded-full glow p-2'>
                                <AiFillGithub className='text-[28px]  ' />
                            </a>
                            <a href="https://www.linkedin.com/in/sofia-sitjar/" target="_blank" className='text-pink-500 hover:text-pink-300 glow rounded-full glow p-2'>
                                <AiFillLinkedin className='text-[28px] ' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
