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
          <li>Skill</li>
          <li>Projet</li>
          <li>Contact</li>
        </ul>
      </nav>
      <button className='ml-4 mt-3 lg:hidden'>
        <TiThMenu fontSize={30} />
      </button>
    </>
  );
};

export default Navbar;
