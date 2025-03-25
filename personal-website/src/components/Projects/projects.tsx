import "./projects.css"
import React from 'react';

type Project = {
    title: string;
    description: string;
    link: string;
};

const projects: Project[] = [
    {
        title: 'Project One',
        description: 'This is the first project description.',
        link: 'https://github.com/yourusername/project-one',
    },
    {
        title: 'Project Two',
        description: 'This is the second project description.',
        link: 'https://github.com/yourusername/project-two',
    },
    {
        title: 'Project Three',
        description: 'This is the third project description.',
        link: 'https://github.com/yourusername/project-three',
    },
    // Add more projects here
];

const Projects: React.FC = () => {
    return (
        <div className="projects-container">
            <h2 className="text-2xl font-semibold mb-4">Projects</h2>
            <div className="projects-list">
                {projects.map((project, index) => (
                    <div key={index} className="project-item mb-6">
                        <h3 className="text-xl font-medium text-blue-600">{project.title}</h3>
                        <p className="text-gray-700">{project.description}</p>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-700"
                        >
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
