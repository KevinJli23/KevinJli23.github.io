import React, { useState } from "react";
import "./projects.css";

type Project = {
  title: string;
  description: string;
  link?: string;
  linkLabel?: string;
  subtitle: string;
  image?: string;
  tags: string[];
};

const projects: Project[] = [
  {
    title: "BLANT-Predict: Link Prediction as a Service",
    subtitle: "Cytoscape plugin over a containerized graph algorithm",
    description:
      "Led front-end development on a 4-person capstone team, shipping a Cytoscape plugin in Java that exports the active network, submits jobs to a containerized BLANT-Predict service, streams progress back to the UI, and imports scored edges. Built the results workflow: predicted-edge table, confidence-based edge coloring, a filtering threshold slider, and checksum-keyed caching that returns prior results instead of recomputing. Replaced a command-line research tool with something a biologist can actually run.",
    link: "",
    linkLabel: "View Repo →",
    tags: ["Java", "Python", "Flask", "Docker", "REST APIs"],
  },
  {
    title: "Multi-Modal Skin Cancer Diagnostic System",
    subtitle: "Image and clinical metadata fusion for lesion classification",
    description:
      "Built a dual-branch fusion network pairing a ResNet-50 vision encoder with a clinical MLP on the ISIC BCN20000 dataset, reaching 93.34% accuracy and 0.9334 F1 on benign/malignant classification against an 89.35% vision-only baseline. Tuned each branch with Ray Tune and measured modality contribution by zeroing branch embeddings at inference, which attributed a 39.3% drop in false-positive probability to the clinical metadata.",
    link: "",
    linkLabel: "View Repo →",
    tags: ["PyTorch", "ResNet-50", "Ray Tune", "Deep Learning"],
  },
  {
    title: "Chest Radiograph Multi-Label Classification",
    subtitle: "14 thoracic conditions across 112,120 NIH chest X-rays",
    description:
      "Fine-tuned DenseNet-121 end to end for multi-label detection of 14 thoracic conditions, reaching 0.808 test AUROC and beating the published ChestX-ray14 baseline. Prevented patient leakage with patient-level 80/10/10 splits, countered heavy class imbalance with per-class weighted BCEWithLogitsLoss, and benchmarked a stratified group K-fold ensemble (0.813 AUROC) against the single model.",
    link: "https://github.com/TheAlex7/pulmo-vision",
    linkLabel: "View Repo →",
    tags: ["PyTorch", "DenseNet-121", "Medical Imaging"],
  },
  {
    title: "Gesture Study App",
    subtitle: "Control music and timers with hand gestures",
    description:
      "Built a study web app using Angular and Handtracker.js for gesture-based controls, including music playback, timers, and real-time interaction.",
    link: "https://drive.google.com/file/d/1FX-dEx41MvxKseMRdR7lMx-m8DjiLM8G/view",
    linkLabel: "View Demo →",
    image: "/project-icons/gesture-study-app.png",
    tags: ["Angular", "JavaScript", "Handtracking"],
  },
  {
    title: "Sleep Tracker App",
    subtitle: "Cross-platform sleep tracking",
    description:
      "Developed a cross-platform sleep tracker using Ionic and Angular, with sleep logging, persistent storage, and interactive visualization.",
    link: "https://drive.google.com/file/d/1mnPqpEiNOv2-51b8kmSYY14NTcKGodiF/view",
    linkLabel: "View Demo →",
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

                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-photo"
                  />
                )}

                <div className="project-content">
                  <div className="project-content-inner">
                    <p className="project-body">{project.description}</p>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {project.linkLabel ?? "View Demo →"}
                      </a>
                    )}
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
