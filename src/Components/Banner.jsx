import { AiFillContacts, AiFillGithub, AiFillLinkedin, AiFillPhone } from 'react-icons/ai'
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
        <div id='Home' className='lg:px-56 px-10 lg:py-0 py-20 text-center lg:text-center lg-text-center flex justify-center   items-center'>
            <div data-aos="fade-up" className='h-full lg:py-40 flex flex-col justify-center items-center text-white'>
                <h1 className='text-[52px] font-semibold mb-8 leading-normal uppercase'>Welcome <span className='text-pink-500'> I'm Sofi!</span> </h1>
                <p className="lg:text-center text-[25px]"> A passionate Full-Stack developer committed to excellence and innovation. My focus is not only limited to creating creative and functional solutions, but also drives me to stay updated with the latest technologies and market trends. With a strong ability to collaborate effectively as a team, I strive to contribute my experience and creativity to every project I participate in. I am ready to face any challenge and push our ideas beyond the limits!</p>
                <div className='flex mt-8 gap-2'>
                    <div className='flex items-center justify-center'>
                        <div className='flex space-x-2 '>
                            <a href="https://github.com/SofiSit" target="_blank" className='text-pink-500 hover:text-pink-300 glow rounded-full glow p-2'>
                                <AiFillGithub className='text-[28px]  ' />
                            </a>
                            <a href="https://www.linkedin.com/in/sofia-sitjar/" target="_blank" className='text-pink-500 hover:text-pink-300 glow rounded-full glow p-2'>
                                <AiFillLinkedin className='text-[28px] ' />
                            </a>
                            <a href="https://wa.me/673058712" target="_blank" className='text-pink-500 hover:text-pink-300 glow rounded-full glow p-2'>
                                <AiFillPhone className='text-[28px] ' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
