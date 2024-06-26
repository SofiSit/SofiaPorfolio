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
        <StarsCanvas />
        <div className="flex items-center flex-1">
          <img
            className="object-contain h-96 w-96"
            src={Logo}
            alt="Logo image"
          />
        </div>
        <div className="lg:flex md:flex lg:flex-1 items-center font-bold justify-end uppercase hidden">
          <ul className="flex gap-8 mr-16 text-[28px]">
            <Link spy={true} smooth={true} to="Home" activeClass="active">
              <li className="hover:text-pink-500 transition animate-pulse border-b-2 border-slate-900 hover:border-pink-600 cursor-pointer">Home</li>
            </Link>
            <Link spy={true} smooth={true} to="About" activeClass="active">
              <li className="hover:text-pink-500 transition animate-pulse border-b-2 border-slate-900 hover:border-pink-500 cursor-pointer">About</li>
            </Link>
            <Link spy={true} smooth={true} to="tech" activeClass="active">
              <li className="hover:text-pink-500 transition animate-pulse border-b-2 border-slate-900 hover:border-pink-500 cursor-pointer">Technologies</li>
            </Link>
            <Link spy={true} smooth={true} to="work" activeClass="active">
              <li className="hover:text-pink-500 transition animate-pulse border-b-2 border-slate-900 hover:border-pink-500 cursor-pointer">Projects</li>
            </Link>
          </ul>
        </div>
        <div>
          <button className="block sm:hidden transition " onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <CiMenuFries />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden block absolute top-16 w-fill left-0 right-0 bg-black transition">
          <ul className="text-center text-xl p-20">
            <Link spy={true} smooth={true} to="Home" activeClass="active">
              <li className="my-4 py-4 border-b border-salate-800 hover:bg-slate-800 hover:rounded text-white">Home</li>
            </Link>
            <Link spy={true} smooth={true} to="About" activeClass="active">
              <li className="my-4 py-4 border-b border-salate-800 hover:bg-slate-800 hover:rounded text-white">About</li>
            </Link>
            <Link spy={true} smooth={true} to="tech" activeClass="active">
              <li className="my-4 py-4 border-b border-salate-800 hover:bg-slate-800 hover:rounded text-white">Technologies</li>
            </Link>
            <Link spy={true} smooth={true} to="work" activeClass="active">
              <li className="my-4 py-4 border-b border-salate-800 hover:bg-slate-800 hover:rounded text-white">Projects</li>
            </Link>
            
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;