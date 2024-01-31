import React from 'react';
import CardSkill from './CardSkill'

const Skill = () => {
    return (
        <>

            <div className='text-5xl text-center mx-auto w-full mb-3'>
                <p className='text-sm'>Skills</p>
                <h2>Skills - Set</h2>
            </div>
            <div className='grid grid-cols-1 mx-auto place-items-center w-full md:grid-cols-2 lg:w-[80%] 2xl:grid-cols-3 lg:gap-x-5'>
                <CardSkill />
            </div>

        </>
    );
};

export default Skill