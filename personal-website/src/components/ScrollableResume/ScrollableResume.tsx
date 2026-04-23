import React from "react";
import "./ScrollableResume.css";

// Job Component
const Job: React.FC<{ title: string, date: string, location: string, description: string[] }> = ({ title, date, location, description }) => {
    return (
        <div className="job">
            <h3>{title}</h3>
            <p>{date} · {location}</p>
            <ul>
                {description.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

// Section Component
const Section: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => {
    return (
        <div className="scrollable-section">
            <h2>{title}</h2>
            {children}
        </div>
    );
};

// Main ScrollableResume Component
const ScrollableResume: React.FC = () => {
    const experienceData = [
        {
            title: "AI Agentic Builder Intern - NeuralSeek",
            date: "Jul 2025 - Sept 2025 · 3 mos",
            location: "Irvine, California, United States · Remote",
            description: ["","",""
            ]
        },
        // {
        //     title: "AI/ AR Instructor - Integem",
        //     date: "Jul 2025 - Aug 2025 · 6 wks",
        //     location: "Anaheim, California, United States · In-person",
        //     description: [
        //         "Instructed AI and AR concepts to students through hands-on lessons and interactive demonstrations, making complex topics accessible and engaging.",
        //         "Guided students in project-based learning, providing feedback and support to help them successfully apply AI and AR techniques in practical exercises.",
        //         "Created and adapted lesson plans and teaching materials to meet diverse learning needs and enhance comprehension of AI and AR technologies."
        //     ]
        // },
        {
            title: "Network Operations Intern - Los Angeles department of Water and Power (LADWP)",
            date: "Aug 2025 - Jun 2025 · 1 yr",
            location: "Anaheim, California, United States · In-person",
            description: [
                "Built an internal tool using Python for Network Operations, enabling mass network traversal and automated device data documentation and streamline infrastructure analysis.",
                "Automate network documentation across 1,300+ nodes through Python scripts and concurrent multi-threading to capture hardware configurations and subnet data, ensuring accurate documentation and efficient reporting.",
                "Implement network monitoring with Python scripts, providing real-time SMTP alerts to enhance system reliability.",
                "Configure CIP Servers using vSphere, utilizing Remote Desktop Connection for network setup, security hardening, and IP/firewall configuration to enhance infrastructure scalability and efficiency."
            ]
        },
         {
            title: "Software Engineer Intern - Turion Space Systems",
            date: "Jan 2025 - Mar 2025 · 3 mos",
            location: "Irvine, California, United States · In-person",
            description: [
               "Established a standardized development structure for UI design, creating a streamlined framework to optimize future interface development using React.", 
               "Designed and implemented an interactive user interface that improved satellite task efficiency by 25%, enhancing operational workflow and responsiveness with Rete.js.",
               "Designed and developed React web pages for scheduling and managing automated tasks, enhancing usability and interaction for 5+ operations engineers.",
               "Created 5+ interactive ground control dashboards, streamlining satellite operations with real-time telemetry visualization for 500+ satellite telemetry data points, custom command execution, and user interface components."
            ]
        },
        {
            title: "House System Research Assistant - UC Irvine Donald Bren School of Information and Computer Sciences",
            date: "Aug 2023 - Feb 2025 · 1 yr 7 mos",
            location: "Irvine, California, United States · Hybrid",
            description: [
                "Orchestrated the precise entry of research data using REDCap to fuel sociological and medical research within the UC database.",
                "Extracted data from diverse sources, including the UCI Health Clinical Data Warehouse, to support multiple UC Research projects.",
                "Collaborated with researchers across various academic departments to assist in the development of SQL queries for the UCI Health database."
            ]
        },
        {
            title: "Web Administrator - Community Table UCI",
            date: "Aug 2023 - Sep 2024 · 1 yr 2 mos",
            location: "Irvine, California, United States · Hybrid",
            description: [
                "Led website development and maintenance, ensuring a user-friendly and up-to-date online platform.",
                "Managed content updates and blog posts for effective communication with over 40 club members and sponsoring audiences.",
                "Proactively acquired HTML and CSS proficiency to enhance the Community Table website."
            ]
        },
        {
            title: "Market Data Analysis Intern - Econolite",
            date: "Jan 2024 - May 2024 · 5 mos",
            location: "Anaheim, California, United States · Remote",
            description: [
                "Developed responsive web-based maps utilizing Python’s Folium library and JavaScript DOM manipulation.",
                "Programmed a Python GUI application using Kivy to automate invoice data processing and integrated geocoding capabilities.",
                "Analyzed 30,000+ customer invoice data points, identifying optimal software marketing regions through geographic clusters."
            ]
        },
        {
            title: "Data Analyst Intern - OCHIN, Inc.",
            date: "Jun 2023 - Sep 2023 · 4 mos",
            location: "Portland, Oregon, United States · Remote",
            description: [
                "Analyzed healthcare dataset of 20,000+ patients to identify those needing risk score reevaluation for resource prediction.",
                "Utilized the Matplotlib library to communicate findings on populations needing focused screening initiatives."
            ]
        },
        // {
        //     title: "Instructor and Competitive Coach - LEXT Robo Academy",
        //     date: "Feb 2022 - Jun 2023 · 1 yr 5 mos",
        //     location: "Irvine, CA",
        //     description: [
        //         "Coordinated LEGO curriculum for ages 4 - 13 and coached competition classes in block coding using Spike and EV3 (Lego Robotics).",
        //         "Organized lesson plans for the Soccer Robot Tournament and maintained high enrollment rates in trial classes.",
        //         "Trained new instructors and coached students on problem-solving and mechanical concepts."
        //     ]
        // },
        // {
        //     title: "ICS 45C Tutor (Introduction to C++) - UC Irvine Donald Bren School of Information and Computer Sciences",
        //     date: "Jan 2023 - Mar 2023 · 3 mos",
        //     location: "Irvine, CA · On-site",
        //     description: [
        //         "Provided personalized tutoring for college students in C/C++ programming, fostering hands-on learning.",
        //         "Collaborated with students to analyze and debug code, promoting effective problem-solving practices.",
        //         "Designed engaging learning experiences to encourage critical thinking and understanding of programming concepts."
        //     ]
        // }
    ];
    return (
        <div className="resume-section"> 
        <div className="scrollable-header">
            <h1>Resume</h1>
            <div className="loader">
                <div className="words">
                    <div className="word-list">
                        <span className="word">Software Engineer Intern</span>
                        <span className="word">Network Operations Intern</span>
                        <span className="word">Market Data Analysis Intern</span>
                        <span className="word">Data Analysis Intern</span>
                        <span className="word">Instructor and Competitive Coach</span>
                        <span className="word">House System Research Assistant</span>
                        <span className="word">Software Engineer Intern</span>
                    </div>
                </div>
            </div>
            <Section title="Experience">
                <div className="resume-container">
                    {experienceData.map((job, index) => (
                        <Job
                            key={index}
                            title={job.title}
                            date={job.date}
                            location={job.location}
                            description={job.description}
                        />
                    ))}
                </div>
            </Section>
        </div >
        </div>
    );
};

export default ScrollableResume;
