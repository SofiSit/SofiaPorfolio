import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillPhone } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto flex justify-center items-center">
                <div className="flex flex-col items-center justify-center space-y-4">
                    <p className="text-lg">Contact Me!</p>
                    <div className="flex space-x-2">
                        <a href="https://github.com/SofiSit" target="_blank" className="text-pink-500 hover:text-pink-300">
                            <AiFillGithub className="text-[28px]" />
                        </a>
                        <a href="https://www.linkedin.com/in/sofia-sitjar/" target="_blank" className="text-pink-500 hover:text-pink-300">
                            <AiFillLinkedin className="text-[28px]" />
                        </a>
                        <a href="https://wa.me/673058712" target="_blank" className="text-pink-500 hover:text-pink-300">
                            <AiFillPhone className="text-[28px]" />
                        </a>
                    </div>
                    <p className="text-sm">© {new Date().getFullYear()} SofiSit - All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
