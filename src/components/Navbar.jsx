import React from 'react';
import { TiThMenu } from 'react-icons/ti';

const Navbar = () => {
  return (
    <>
      <nav className='hidden lg:flex lg:w-[60%] xl:w-[40%] mx-auto rounded-xl justify-between items-center px-8 py-4 bg-gradient-to-r from-teal-400 to-indigo-800 text-white'>
        <div>
          <span>Hicham</span>
        </div>
        <ul className='flex w-1/2 justify-evenly'>
          <a href="#skills">
          <li>Compétences</li>
          </a>
          <a href="#projets">
          <li>Projet</li>
          </a>
          <a href="#contact">
          <li>Contact</li>

          </a>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
