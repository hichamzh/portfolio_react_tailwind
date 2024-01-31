import React from 'react';
import {Button, Avatar } from '@material-tailwind/react';
import { IoDownloadOutline } from "react-icons/io5";
import devImg from '../assets/developer.svg';
const Main = () => {
    return (
        <main className='h-full w-full'>
        <div className=' w-full mx-auto h-[80%] flex flex-col-reverse items-center justify-center lg:flex-row lg:w-9/12 lg:h-[70%]'>
            <div className='text-5xl w-[80%] flex flex-col justify-center gap-8 h-[80%] lg:w-1/2'>
            <p>Bonjour je suis</p>
            <h1 >Hicham, Developer Junior</h1>
            <p className='text-balance text-sm'>Je suis un passionné de codage, j'ai fais une formation de 7 mois chez Simplon. Mon enthousiasme pour la programmation me pousse à poursuivre une carrière dans le développement.</p>

            <a href="HICHAM_CV.pdf"
              download='Cv_hicham_zouit'
            >
            <Button className='max-w-[300px] bg-[#3c57a1] text-white flex items-center justify-center gap-3'>
                <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-5 w-5"
      >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
        />
                </svg>
                Télécharger mon CV
            </Button>
             </a>
            </div>
            <div className='w-1/3 h-1/2'>
                <img src={devImg} alt="" className='h-full w-full'/>
            </div>
        </div>
        <div className=' w-1/5 mt-5 mx-auto flex justify-around items-center gap-5'>
        <Avatar size='xl' src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" />
        <Avatar size='xl' src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" />
        <Avatar size='xl' src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" />
        </div>
        </main>
    );
    
    }


    export default Main;


    <Button variant="gradient" className="flex items-center gap-3">

    Upload Files
  </Button>