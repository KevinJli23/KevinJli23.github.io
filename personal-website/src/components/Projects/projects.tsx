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
    title: "Sleep Tracker App",
    subtitle: "Cross-platform sleep tracking",
    description:
      "Developed a cross-platform Sleep Tracker application using Ionic and Angular. Features include sleep logging, persistent storage, and interactive visualization.",
    link: "https://drive.google.com/file/d/1mnPqpEiNOv2-51b8kmSYY14NTcKGodiF/view",
    image:
      "https://media.licdn.com/dms/image/v2/D562DAQFsFwgs8K0wxQ/profile-treasury-document-cover-images_480/profile-treasury-document-cover-images_480/0/1701383270617",
    tags: ["Ionic", "Angular", "TypeScript"],
  },
  {
    title: "Gesture Study App",
    subtitle: "Control music with hand gestures",
    description:
      "Built a study web app using Angular and Handtracker.js for gesture-based controls. Includes music playback, timers, and real-time interaction.",
    link: "https://drive.google.com/file/d/1FX-dEx41MvxKseMRdR7lMx-m8DjiLM8G/view",
    image:
      "https://media.licdn.com/dms/image/v2/D562DAQHDGYN3pZcIIQ/profile-treasury-image-shrink_800_800/0/1702280810236",
    tags: ["Angular", "JavaScript", "Handtracking"],
  },
];

const Projects: React.FC = () => {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const toggle = (i: number) =>
    setExpanded((prev) => ({ ...prev, [i]: !prev[i] }));

  return (
    <div className="project-resume">
      <div className="project-hero">
        <h1 className="project-heading">Projects</h1>
        <p className="project-subheading">Click to expand</p>
      </div>

      <div className="project-track">
        {projects.map((project, i) => {
          const isOpen = !!expanded[i];

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

                <div className="project-content">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-photo"
                  />

                  <p className="project-body">{project.description}</p>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Project →
                  </a>
                </div>

                {!isOpen && (
                  <p className="project-hint">click to expand</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
