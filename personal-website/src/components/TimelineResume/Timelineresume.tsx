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
  { id: "1", title: "AI Agentic Builder Intern", company: "NeuralSeek", date: "Jul–Sept 2025", location: "Irvine, CA", type: "ai", label: "AI", bullets: ["Building autonomous agents for enterprise workflows."] },
  { id: "2", title: "Software Engineer Intern", company: "Turion Space Systems", date: "Jan–Mar 2025", location: "Irvine, CA", type: "space", label: "Space Tech", bullets: ["Improved satellite task efficiency by 25%.", "Built 5+ ground control dashboards.", "Standardized UI development in React."] },
  { id: "3", title: "Network Operations Intern", company: "LADWP", date: "Aug 2024–Jun 2025", location: "Anaheim, CA", type: "network", label: "Networks", bullets: ["Automated 1,300+ network nodes via Python.", "Implemented real-time SMTP monitoring."] },
  { id: "4", title: "Market Data Analysis Intern", company: "Econolite", date: "Jan–May 2024", location: "Anaheim, CA", type: "data", label: "Data", bullets: ["Analyzed 30,000+ invoices for clustering.", "Built responsive maps with Folium."] },
  { id: "5", title: "Research Assistant", company: "UC Irvine", date: "Aug 2023–Feb 2025", location: "Irvine, CA", type: "research", label: "Research", bullets: ["Extracted clinical data for medical studies.", "Developed SQL queries for UCI Health."] },
  { id: "6", title: "Web Administrator", company: "Community Table", date: "Aug 2023–Sep 2024", location: "Irvine, CA", type: "web", label: "Web", bullets: ["Led development for 40+ members.", "Managed content and site performance."] },
  { 
  id: "7", 
  title: "House System Research Assistant", 
  company: "UC Irvine — Donald Bren School of ICS", 
  date: "Aug 2023–Feb 2025", 
  location: "Irvine, CA", 
  type: "research", 
  label: "Research", 
  bullets: [
    "Extracted data from the UCI Health Clinical Data Warehouse.",
    "Developed SQL queries for the UCI Health database.",
    "Managed research data in REDCap for medical studies."
  ] 
},
{ 
  id: "8", 
  title: "Data Analyst Intern", 
  company: "OCHIN, Inc.", 
  date: "Jun 2023–Sep 2023", 
  location: "Portland, OR", 
  type: "data", 
  label: "Data", 
  bullets: [
    "Analyzed healthcare datasets of 20,000+ patients.",
    "Used Matplotlib to visualize population screening needs."
  ] 
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

  const filtered = experienceData.filter(j => filter === "all" || j.type === filter);
  const categories = ["all", ...new Set(experienceData.map(j => j.type))];

  return (
    <div className="resume-container">
      <header className="resume-header">
        <h1>Experience</h1>
        <div className="filter-bar">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={`filter-btn ${filter === cat ? "active" : ""}`}
              onClick={() => { setFilter(cat as any); setExpandedId(null); }}
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
            <div key={job.id} className={`timeline-item ${isOpen ? "is-open" : ""}`}>
              <div 
                className="timeline-dot" 
                style={{ backgroundColor: colors.dot, top: "12px" }} // Dot is higher (12px vs 20px)
              />
              
              <div 
                className="timeline-card"
                onClick={() => setExpandedId(isOpen ? null : job.id)}
                style={{ borderTop: `4px solid ${colors.dot}` }}
              >
                <div className="card-header">
                  <span className="job-badge" style={{ background: colors.bg, color: colors.text }}>
                    {job.label}
                  </span>
                  <span className="job-date">{job.date}</span>
                </div>
                
                <h3 className="job-title">{job.title}</h3>
                <p className="job-company">{job.company}</p>

                <div className="job-content">
                  <ul className="job-bullets">
                    {job.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                  <p className="job-location">📍 {job.location}</p>
                </div>
                
                {!isOpen && <div className="expand-hint">View Details</div>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TimelineResume;