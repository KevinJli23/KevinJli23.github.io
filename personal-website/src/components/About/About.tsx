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
              <strong>Master's of Computer Science</strong> (Expected Graduation Fall 2026).
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
              I have a great passion in learning and developing full stack applications. With a wide range of
              experiences from <strong>network operations</strong> and <strong>satellite interfaces</strong> to designing <strong>marketing tools</strong>, I have
              experience designing software tools from scratch to meet business needs and improve workflow and
              data visibility across teams.
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
              I enjoy learning new skills and studying a wide range of technology-based concepts such as <strong>cloud
                computing</strong>,  <strong>full stack web development</strong>, and <strong>data analytics</strong>. My current course work is centered around
              AI, ML, and Deep Learning. I am currently studying for the{" "}
              <strong>AWS Certified Solutions Architect</strong> exam!
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