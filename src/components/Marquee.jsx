import React from 'react';
import { motion } from 'framer-motion';
import { FaReact } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNestjs } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";

const Marquee = () => {
    return (

        <div className='w-full h-[50vh] bg-[#122620] flex justify-center items-center'>
            <div className='text flex items-center justify-center space-x-10 border-t-2 border-b-2 overflow-hidden'>
                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: "-100%" }}
                    transition={{ ease: "linear", duration: 20, repeat: Infinity }}
                    style={{ display: "inline-flex" }}
                >
                    <FaReact className='text-white text-9xl' />
                </motion.div>
                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: "-100%" }}
                    transition={{ ease: "linear", duration: 20, repeat: Infinity }}
                    style={{ display: "inline-flex" }}
                >
                    <IoLogoJavascript className='text-white text-9xl' />
                </motion.div>
                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: "-100%" }}
                    transition={{ ease: "linear", duration: 20, repeat: Infinity }}
                    style={{ display: "inline-flex" }}
                >
                    <RiTailwindCssFill className='text-white text-9xl' />
                </motion.div>
                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: "-100%" }}
                    transition={{ ease: "linear", duration: 20, repeat: Infinity }}
                    style={{ display: "inline-flex" }}
                >
                    <SiScikitlearn className='text-white text-9xl' />
                </motion.div>
                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: "-100%" }}
                    transition={{ ease: "linear", duration: 20, repeat: Infinity }}
                    style={{ display: "inline-flex" }}
                >
                    <SiNestjs className='text-white text-9xl' />
                </motion.div>
                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: "-100%" }}
                    transition={{ ease: "linear", duration: 20, repeat: Infinity }}
                    style={{ display: "inline-flex" }}
                >
                    <SiTypescript className='text-white text-9xl' />
                </motion.div>
                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: "-100%" }}
                    transition={{ ease: "linear", duration: 20, repeat: Infinity }}
                    style={{ display: "inline-flex" }}
                >
                    <BiLogoPostgresql className='text-white text-9xl' />
                </motion.div>
                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: "-100%" }}
                    transition={{ ease: "linear", duration: 20, repeat: Infinity }}
                    style={{ display: "inline-flex" }}
                >
                    <RiNextjsFill className='text-white text-9xl' />
                </motion.div>
                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: "-100%" }}
                    transition={{ ease: "linear", duration: 20, repeat: Infinity }}
                    style={{ display: "inline-flex" }}
                >
                    <SiMysql className='text-white text-9xl' />
                </motion.div>
                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: "-100%" }}
                    transition={{ ease: "linear", duration: 20, repeat: Infinity }}
                    style={{ display: "inline-flex" }}
                >
                    <FaHtml5 className='text-white text-9xl' />
                </motion.div>
            </div>
        </div>
    );
};

export default Marquee;
