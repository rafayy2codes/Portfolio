import React from 'react';
import Card from './Card'; // Adjust the path if necessary
import { Projects } from './Projects'; // Adjust the path if necessary

const App = () => {
    return (
        <div className="flex flex-wrap justify-center items-center h-screen bg-[#D6AD60]">
            <h1 className='font-mono font-bold text-center justify-center items-center text-5xl'>My Projects</h1>
            {Projects.map((project, index) => (
                <Card
                    key={index}
                    title={project.title}
                    desc={project.desc}
                    link={project.link}
                    tech_stack={project.tech_stack}
                />
            ))}
        </div>
    );
};

export default App;
