import "./About.css";

const badgeStyles: Record<string, { background: string; color: string }> = {
  Education: { background: "#E6F1FB", color: "#0C447C" },  // blue
  Experience: { background: "#E1F5EE", color: "#085041" },  // teal (matches dot/border accent)
  Interests: { background: "#EEEDFE", color: "#3C3489" },  // purple
  Hobbies: { background: "#FAEEDA", color: "#633806" },  // amber
};

const About: React.FC = () => {
  return (
    <div className="about-resume">
      <div className="about-hero">
        <h1 className="about-heading">About Me</h1>
        <p className="about-subheading">
          Software Engineer · CS Grad Student · AWS Certification (in progress)
        </p>
      </div>

      <div className="about-track">

        <div className="about-item">
          <div className="about-card">
            <div className="about-meta">
              <span className="about-badge" style={badgeStyles.Education}>
                Education
              </span>
            </div>
            <p className="about-body">
              I graduated with a <strong>Bachelor's Degree in Software Engineering</strong> with a{" "}
              <strong>Minor in Health Informatics</strong>. I am in pursuit of a{" "}
              <strong>Master's of Computer Science</strong> at UC Irvine with an AI/ML focus (expected December 2026).
            </p>
          </div>
        </div>

        <div className="about-item">
          <div className="about-card">
            <div className="about-meta">
              <span className="about-badge" style={badgeStyles.Experience}>
                Experience
              </span>
            </div>
            <p className="about-body">
              I build full-stack tools that replace manual work at organizations where the infrastructure matters. I am
              currently a <strong>Software Engineer</strong> at the <strong>California Independent System Operator</strong>, where I built a
              company-wide data lineage platform in <strong>Java, Spring Boot, Oracle, and React</strong>. Before that I worked on
              <strong> network automation</strong> at <strong>LADWP</strong>, <strong>satellite telemetry interfaces</strong> at <strong>Turion Space</strong>, and
              <strong> AI agents</strong> at <strong>NeuralSeek</strong>. The energy and utility sector is where I plan to stay.
            </p>
          </div>
        </div>

        <div className="about-item">
          <div className="about-card">
            <div className="about-meta">
              <span className="about-badge" style={badgeStyles.Interests}>
                Interests
              </span>
            </div>
            <p className="about-body">
              I like <strong>cloud computing</strong>, <strong>full-stack web development</strong>, and <strong>applied machine learning</strong>.
              My graduate coursework covers <strong>deep learning</strong>, <strong>parallel and distributed computing</strong>, and
              <strong> network security</strong>, and my recent projects include a multi-modal skin cancer classifier and a
              multi-label chest X-ray model trained on 112,120 images. I am currently studying for the{" "}
              <strong>AWS Certified Solutions Architect</strong> exam.
            </p>
          </div>
        </div>

        <div className="about-item">
          <div className="about-card">
            <div className="about-meta">
              <span className="about-badge" style={badgeStyles.Hobbies}>
                Hobbies
              </span>
            </div>
            <p className="about-body">
              In my free time, I love <strong>exploring the city</strong>, <strong>playing basketball</strong>, or <strong>going bouldering</strong>. I also enjoy
              diving into video games, especially ones that offer a good challenge. Whether you're interested in
              collaborating on a project or just want to connect, feel free to reach out!
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default About;