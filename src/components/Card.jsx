import React from 'react';

const Card = ({ title, desc, link, tech_stack }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-amber-900 text-white p-20 m-10 ">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-300 text-base mb-4">
                    {desc}
                </p>
                <a href={link} className="text-blue-400 hover:text-blue-600 underline">
                    Visit Project
                </a>
            </div>
            <div className="px-6 pt-4 pb-2">
                {tech_stack.map((tech, index) => (
                    <span key={index} className="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">
                        #{tech}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Card;
