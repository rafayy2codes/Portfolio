import React from 'react';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full bg- shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center h-16 items-center">
                    <div className='text-3xl font-extrabold font-mono space-x-10'>
                        <a href="#" className="text-black hover:text-gray-300">About me</a>
                        <a href="#" className="text-black hover:text-gray-300">Skills</a>

                        <a href="#" className="text-black hover:text-gray-300">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
