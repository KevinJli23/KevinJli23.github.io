import React, { useState } from "react";
import "./projects.css";

type Project = {
  title: string;
  description: string;
  link: string;
  subtitle: string;
  image: string;
  tags: string[];
};

const projects: Project[] = [
  {
    title: "PokeScan (In Progress)",
    subtitle: "Computer vision for Pokemon detection",
    description: "",
    link: "",
    image: "/project-icons/pokescan_icon.png",
    tags: ["Angular", "JavaScript", "Handtracking"],
  },
  {
    title: "Gesture Study App",
    subtitle: "Control music with hand gestures",
    description:
      "Built a study web app using Angular and Handtracker.js for gesture-based controls. Includes music playback, timers, and real-time interaction.",
    link: "https://drive.google.com/file/d/1FX-dEx41MvxKseMRdR7lMx-m8DjiLM8G/view",
    image: "/project-icons/gesture-study-app.png",
    tags: ["Angular", "JavaScript", "Handtracking"],
  },
  {
    title: "Sleep Tracker App",
    subtitle: "Cross-platform sleep tracking",
    description:
      "Developed a cross-platform Sleep Tracker application using Ionic and Angular. Features include sleep logging, persistent storage, and interactive visualization.",
    link: "https://drive.google.com/file/d/1mnPqpEiNOv2-51b8kmSYY14NTcKGodiF/view",
    image: "/project-icons/sleep_tracker_icon.png",
    tags: ["Ionic", "Angular", "TypeScript"],
  },
];

const Projects: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <div className="project-resume">
      <div className="project-hero">
        <h1 className="project-heading">Projects</h1>
      </div>

      <div className="project-track">
        {projects.map((project, i) => {
          const isOpen = openIndex === i;

          return (
            <div key={i}>
              <div
                className={`project-card ${isOpen ? "open" : ""}`}
                onClick={() => toggle(i)}
              >
                <div className="project-meta">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-badge">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="project-title">{project.title}</p>
                <p className="project-subtitle">{project.subtitle}</p>

                <img
                  src={project.image}
                  alt={project.title}
                  className="project-photo"
                />

                <div className="project-content">
                  <div className="project-content-inner">
                    <p className="project-body">{project.description}</p>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Demo →
                    </a>
                  </div>
                </div>

                <div className="card-chevron-row">
                  <span className={`card-chevron ${isOpen ? "open" : ""}`}>
                    &#8964;
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
