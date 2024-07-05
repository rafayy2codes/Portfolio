import React from 'react';
import Card from './Card'; // Adjust the path if necessary
import { Projects } from './Projects'; // Adjust the path if necessary

const App = () => {
    return (
        <div className="flex flex-wrap justify-center items-center h-screen bg-gray-900">
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
