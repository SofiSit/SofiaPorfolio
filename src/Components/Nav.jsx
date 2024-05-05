import { Link } from "react-scroll";
import Logo from "../assets/Logo.png";
import { CiMenuFries } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import StarsCanvas from "./canvas/Stars";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="h-10v flex justify-between z-50 text-white lg:py-5 px-20 py-4 border-b border-slate-950">
      <StarsCanvas/>
        <div className="flex items-center flex-1">
          <img
            className="object-contain animate-bounce h-80 w-80"
            src={Logo}
            alt="Logo image"
          />
        </div>
        <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
          <ul className="flex gap-8 mr-16 text-[28px]">
            <Link spy={true} smooth={true} to="Home">
              <li className="hover:text-pink-500 transition animate-pulse border-b-2 border-slate-900 hover:border-pink-600 cursor-pointer">Home</li>
            </Link>
            <Link spy={true} smooth={true} to="About">
              <li className="hover:text-pink-500 transition animate-pulse border-b-2 border-slate-900 hover:border-pink-500 cursor-pointer">About</li>
            </Link> 
            <Link spy={true} smooth={true} to="tech">
              <li className="hover:text-pink-500 transition animate-pulse border-b-2 border-slate-900 hover:border-pink-500 cursor-pointer">Technologies</li>
            </Link> 
            <Link spy={true} smooth={true} to="Projects">
              <li className="hover:text-pink-500 transition animate-pulse border-b-2 border-slate-900 hover:border-pink-500 cursor-pointer">Projects</li>
            </Link> 
            <Link spy={true} smooth={true} to="Contact">
              <li className="hover:text-pink-500 transition animate-pulse border-b-2 border-slate-900 hover:border-pink-500 cursor-pointer">Contact</li>
            </Link>
          </ul>
        </div>
        <div>
          <button className="block sm:hidden transition " onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes/> : <CiMenuFries/>}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden block absolute top-16 w-fill left-0 right-0 bg-black transition">
          <ul className="text-center text-xl p-20">
            <Link spy={true} smooth={true} to="Home">
              <li className="my-4 py-4 border-b border-salate-800 hover:bg-slate-800 hover:rounded text-white">Home</li>
            </Link>
            <Link spy={true} smooth={true} to="About">
              <li className="my-4 py-4 border-b border-salate-800 hover:bg-slate-800 hover:rounded text-white">About</li>
            </Link> 
            <Link spy={true} smooth={true} to="Projects">
              <li className="my-4 py-4 border-b border-salate-800 hover:bg-slate-800 hover:rounded text-white">Projects</li>
            </Link> 
            <Link spy={true} smooth={true} to="Services">
              <li className="my-4 py-4 border-b border-salate-800 hover:bg-slate-800 hover:rounded text-white">Services</li>
            </Link> 
            <Link spy={true} smooth={true} to="Contact">
              <li className="my-4 py-4 border-b border-salate-800 hover:bg-slate-800 hover:rounded text-white">Contact</li>
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;