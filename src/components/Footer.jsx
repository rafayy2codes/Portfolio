import React from 'react';
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 py-6">
            <div className="max-w-7xl mx-auto px-4 flex justify-center items-center space-x-8">
                <a href="" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-3xl hover:text-gray-400 transition-colors duration-300" />
                </a>
                <a href="">
                    <FaEnvelope className="text-3xl hover:text-gray-400 transition-colors duration-300" />
                </a>
                <a href="">
                    <FaPhone className="text-3xl hover:text-gray-400 transition-colors duration-300" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
