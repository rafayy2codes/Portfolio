import React, { useEffect, useState } from 'react';
import { FaHandsHelping, FaLaptopCode, FaLayerGroup } from "react-icons/fa";
import { BsFillCursorFill } from "react-icons/bs";
import { GiTorch } from "react-icons/gi";

const LandingPage = () => {
    const [showFullStack, setShowFullStack] = useState(false);
    const [showSolveProblems, setShowSolveProblems] = useState(false);
    const [showMERNStack, setShowMERNStack] = useState(false);

    useEffect(() => {
        const timer1 = setTimeout(() => setShowFullStack(true), 1000); // Show "Full Stack Developer" after 1000ms (1 second)
        const timer2 = setTimeout(() => setShowSolveProblems(true), 2000); // Show "I Solve Problems" after 2000ms (2 seconds)
        const timer3 = setTimeout(() => setShowMERNStack(true), 3000); // Show "I Use MERN Stack" after 3000ms (3 seconds)

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, []);

    return (
        <div className='w-full h-screen bg-[#EEEDE7] pt-1 font-mono'>
            <div className='textstructure mt-32 px-20'>
                <div className={`masker font-extrabold font-mono ${showFullStack ? 'animate-slide-up' : 'opacity-0'}`}>
                    <h1 className='uppercase text-[5vw] leading-[5vw] tracking-tighter font-semibold from-neutral-600'>
                        Full Stack Developer
                    </h1>
                </div>
                <div className={`masker font-extrabold font-mono ml-4 ${showSolveProblems ? 'animate-slide-up' : 'opacity-0'}`}>
                    <h1 className='uppercase text-[5vw] leading-[5vw] tracking-tighter font-semibold from-neutral-600'>
                        <FaHandsHelping className="inline-block mb-1 mr-3" /> I Solve Problems
                    </h1>
                </div>
                <div className={`masker font-extrabold font-mono ${showMERNStack ? 'animate-slide-up' : 'opacity-0'}`}>
                    <h1 className='uppercase text-[5vw] leading-[5vw] tracking-tighter font-semibold from-neutral-600'>
                        I Use MERN Stack
                    </h1>
                </div>
                <div className='border-t-2 border-zinc-500 mt-32 py-3 px-5 flex justify-center space-x-10'>
                    {["For public", "First opportunity"].map((item, index) => (
                        <p key={index} className='text-md font-extralight font-mono tracking-tighter leading-none'>{item}</p>
                    ))}
                </div>
                <div className='start flex justify-center items-center gap-5 mt-4'>
                    <button className='px-4 py-2 border-2 rounded-full bg-gray-800 text-white font-semibold hover:bg-gray-700 focus:outline-none'>
                        Start the journey
                    </button>
                    <div className='w-7 h-7 rounded-full bg-gray-800 flex items-center justify-center'>
                        <span className='rotate-[45deg] text-white cursor-pointer'>
                            <BsFillCursorFill />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
