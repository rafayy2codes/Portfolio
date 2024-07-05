import React from 'react'
import { FaArrowDown } from "react-icons/fa";

const Education = () => {
    return (
        <div className='w-full h-auto min-h-screen bg-[#D6AD60] flex flex-col items-center text-[#122620] py-10'>
            <h1 className='font-mono font-bold text-8xl mb-10 border-t-1'>Professional Milestones</h1>
            <div className='bg-[#F4EBD0] p-10 rounded-lg shadow-lg max-w-3xl text-center mb-10'>
                <h2 className='font-mono font-semibold text-4xl mb-4'>Further Vocational Qualification in ICT, Web Development</h2>
                <p className='font-mono text-xl mb-6'>Had an internship (on the job learning) developed various projects and gained hands-on experience in web development.</p>
                <div className='flex justify-center items-center'>
                    <FaArrowDown className='text-3xl' />
                </div>
            </div>
            <div className='bg-[#F4EBD0] p-10 rounded-lg shadow-lg max-w-3xl text-center mb-10'>
                <h2 className='font-mono font-semibold text-4xl mb-4'>Oracle AI Foundation</h2>
                <p className='font-mono text-xl mb-6'>Completed the Oracle AI Foundation certification, covering essential AI concepts and applications.</p>
                <div className='flex justify-center items-center'>
                    <FaArrowDown className='text-3xl' />
                </div>
            </div>
            <div className='bg-[#F4EBD0] p-10 rounded-lg shadow-lg max-w-3xl text-center mb-10'>
                <h2 className='font-mono font-semibold text-4xl mb-4'>Oracle AI Professional</h2>
                <p className='font-mono text-xl mb-6'>Achieved the Oracle AI Professional certification, demonstrating advanced skills and knowledge in AI and machine learning.</p>
                <div className='flex justify-center items-center'>
                    <FaArrowDown className='text-3xl' />
                </div>
            </div>
        </div>
    )
}

export default Education;
