import img from "../assets/img1.png"
import cvPDF from "../assets/cv.pdf";
const About = () => {
  return (
    <div id="About"  className='lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center'>
        <div className='h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white'>
            <h1 data-aos="fade-right" className='text-[52px] font-semibold mb-8 leading-normal text-pink-500 uppercase'>About me</h1>
            <p data-aos="fade-left" className="text-[25px]" >I am a web programmer skilled in collaborating within multidisciplinary teams,
efficiently manage development tasks and deliver high-quality solutions to
satisfy customer needs. I am focused on being a valued member
of the team, offering well thought out solutions and continually improving my
skills.</p>
            <div className='flex mt-8 gap-2'>
                <div className='flex items-center justify-center'>
                <a href={cvPDF} target="_blank" rel="noopener noreferrer">
              <button className='neno-button shadow-xl hover:shadow-pink-200/50 text-white border-2 hover:bg-pink-500 border-with rounded-lg py-4 px-8 uppercase relative overflow-hidden'>CV</button>
            </a>
                </div>
            </div>
        </div>
      <img data-aos="fade-down" src={img} width={290} height={290} className='rounded-full  p-1  ' />
    </div>
  )
}

export default About











