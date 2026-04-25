import React, { useState } from "react";
import "./TimelineResume.css";

type JobType = "ai" | "space" | "network" | "data" | "research" | "web";

interface JobEntry {
  id: string;
  title: string;
  company: string;
  date: string;
  location: string;
  type: JobType;
  label: string;
  bullets: string[];
}

const experienceData: JobEntry[] = [
  {
    id: "1",
    title: "AI Agentic Builder Intern",
    company: "NeuralSeek",
    date: "Jul 2025–Sept 2025",
    location: "Irvine, CA",
    type: "ai",
    label: "AI",
    bullets: [
      "Completed NeuralSeek AI Agent Certifications (L1–L3), gaining expertise in agent design, business applications, and multi-agent systems",
      "Designed an AI workout planner that generates structured, queryable fitness plans with a focus on personalization and usability",
      "Integrated external datasets using NLP, embeddings, RAG, and prompt engineering to improve search capability and response accuracy",
    ],
  },
  {
    id: "2",
    title: "Software Engineer Intern",
    company: "Turion Space Systems",
    date: "Jan–Mar 2025",
    location: "Irvine, CA",
    type: "space",
    label: "Space Tech",
    bullets: [
      "Integrated real-time data visualization for 500+ satellite telemetry points across 6 dashboards to monitor health and detect anomalies",
      "Built a reusable component framework with React and Rete.js to standardize API handling and UI patterns",
      "Designed an interactive UI with Rete.js to improve task efficiency and operational responsiveness",
      "Developed React pages for scheduling and managing automated tasks, enhancing usability for operations engineers",
    ],
  },
  {
    id: "3",
    title: "Network Operations Intern",
    company: "LADWP",
    date: "Aug 2024–Jun 2025",
    location: "Anaheim, CA",
    type: "network",
    label: "Networks",
    bullets: [
      "Developed a Python-based network monitoring tool to automate node traversal and document device configurations across enterprise infrastructure",
      "Engineered a multithreaded service to collect data from 1,300+ devices, aggregating hardware configurations into structured reports",
      "Improved network reliability with event-driven error detection and SMTP alerts to proactively notify engineers of failures",
      "Configured CIP servers using vSphere and Remote Desktop, handling network setup, security hardening, and firewall configuration to enhance scalability and efficiency",
    ],
  },
  {
    id: "4",
    title: "Market Data Analysis Intern",
    company: "Econolite",
    date: "Jan–May 2024",
    location: "Anaheim, CA",
    type: "data",
    label: "Data",
    bullets: [
      "Built a geospatial data pipeline using Python and geocoding APIs to process 30,000+ invoice records and standardize location data",
      "Engineered a GUI to automate geocoding with under 1s per record throughput and implemented anomaly detection for 95% accuracy",
      "Designed an interactive mapping dashboard with Folium and JavaScript to visualize geographic clusters and uncover regional sales opportunities",
    ],
  },
  {
    id: "5",
    title: "House System Research Assistant",
    company: "UC Irvine",
    date: "Aug 2023–Feb 2025",
    location: "Irvine, CA",
    type: "research",
    label: "Research",
    bullets: [
      "Entered and managed research data using REDCap to support large-scale sociological and medical studies within the UC system",
      "Extracted and consolidated data from sources including the UCI Health Clinical Data Warehouse for multiple research projects",
      "Collaborated with researchers across departments to develop SQL queries and support critical data extraction for research initiatives",
    ],
  },
  {
    id: "6",
    title: "Web Administrator",
    company: "Community Table",
    date: "Aug 2023–Sep 2024",
    location: "Irvine, CA",
    type: "web",
    label: "Web",
    bullets: [
      "Led development for 40+ members.",
      "Managed content and site performance.",
    ],
  },
  {
    id: "7",
    title: "Data Analyst Intern",
    company: "OCHIN, Inc.",
    date: "Jun 2023–Sep 2023",
    location: "Portland, OR",
    type: "data",
    label: "Data",
    bullets: [
      "Analyzed a healthcare dataset of 20,000+ patients across 82 conditions to identify candidates for risk score reevaluation",
      "Identified outdated risk scores across 44,000+ cases, highlighting gaps in accurately reflecting current patient health status",
      "Used Matplotlib to visualize insights and communicate populations that could benefit from targeted screening initiatives",
    ],
  },
];

const palette = {
  ai: { bg: "#E1F5EE", text: "#085041", dot: "#1D9E75" },
  space: { bg: "#E1F5EE", text: "#085041", dot: "#1D9E75" },
  network: { bg: "#E6F1FB", text: "#0C447C", dot: "#378ADD" },
  data: { bg: "#FAEEDA", text: "#633806", dot: "#BA7517" },
  research: { bg: "#EEEDFE", text: "#3C3489", dot: "#7F77DD" },
  web: { bg: "#FBEAF0", text: "#72243E", dot: "#D4537E" },
};

const TimelineResume: React.FC = () => {
  const [filter, setFilter] = useState<JobType | "all">("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = experienceData.filter(
    (j) => filter === "all" || j.type === filter,
  );
  const categories = ["all", ...new Set(experienceData.map((j) => j.type))];

  return (
    <div className="resume-container">
      <header className="resume-header">
        <h1>Experience</h1>
        <div className="filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? "active" : ""}`}
              onClick={() => {
                setFilter(cat as JobType | "all");
                setExpandedId(null);
              }}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
      </header>

      <div className="timeline-grid">
        {/* The Vertical Center Line */}
        <div className="center-line" />

        {filtered.map((job) => {
          const isOpen = expandedId === job.id;
          const colors = palette[job.type];

          return (
            <div
              key={job.id}
              className={`timeline-item ${isOpen ? "is-open" : ""}`}
            >
              <div
                className="timeline-dot"
                style={{ backgroundColor: colors.dot, top: "12px" }}
              />

              <div
                className="timeline-card"
                onClick={() => setExpandedId(isOpen ? null : job.id)}
                style={{ borderTop: `4px solid ${colors.dot}` }}
              >
                <div className="card-header">
                  <span
                    className="job-badge"
                    style={{ background: colors.bg, color: colors.text }}
                  >
                    {job.label}
                  </span>
                  <span className="job-date">{job.date}</span>
                </div>

                <h3 className="job-title">{job.title}</h3>
                <p className="job-company">{job.company}</p>

                <div className="job-content">
                  <ul className="job-bullets">
                    {job.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                  <p className="job-location">📍 {job.location}</p>
                </div>

                <div className="card-chevron-row">
                  <span className={`card-chevron ${isOpen ? "open" : ""}`}>&#8964;</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TimelineResume;
