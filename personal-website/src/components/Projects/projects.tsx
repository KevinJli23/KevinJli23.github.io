import React from "react";
import "./projects.css";

type Project = {
    title: string;
    description: string;
    link: string;
    subtitle: string; // Added subtitle field
    image: string;    // Added image field
};

const projects: Project[] = [
    {
        title: 'Sleep Tracker App',
        description: 'Developed a cross-platform Sleep Tracker application using Ionic SDK and Angular framework that helps users manage and visualize their sleep patterns. The application features intuitive data entry through modal interfaces, persistent local storage, and interactive sleep data visualization. Key functionalities include sleep duration tracking, sleepiness level monitoring, and comprehensive sleep log management with create, edit, and delete capabilities.',
        link: 'https://drive.google.com/file/d/1mnPqpEiNOv2-51b8kmSYY14NTcKGodiF/view?usp=sharing',
        subtitle: 'A cross-platform app for tracking sleep patterns and improving sleep quality', // Added subtitle
        image: '' // Added image placeholder URL (replace with actual image URL)
    },
    {
        title: 'Hand Gesture Controlled Study Web Application',
        description: 'Designed and implemented a unique study web application utilizing Angular, JavaScript, TypeScript, HTML, and CSS. Integrated Handtracker.js for responsive hand gesture controls and Howler.js for enhanced audio playback functionality. The application includes features for music playback control, stopwatch capabilities, and real-time song progress updates, creating an immersive study environment.',
        link: 'https://drive.google.com/file/d/1FX-dEx41MvxKseMRdR7lMx-m8DjiLM8G/view?usp=drive_link',
        subtitle: 'A study application that uses hand gestures to control music and timers', // Added subtitle
        image: 'https://via.placeholder.com/150' // Added image placeholder URL (replace with actual image URL)
    },
    // Add more projects here
];

const Projects: React.FC = () => {
    return (
        <div className="projects-container">
            <h1>Projects</h1>
            <div className="projects-list">
                {projects.map((project, index) => (
                    <div key={index} className="project-item">
                        <h3>{project.title}</h3>
                        <h4>{project.subtitle}</h4> {/* Display the subtitle */}
                        <img src={project.image} alt={project.title} className="project-image" /> {/* Display the image */}
                        <p>{project.description}</p>
                        <button className="btn">
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Project
                            </a>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
