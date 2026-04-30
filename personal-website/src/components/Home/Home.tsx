import "./Home.css";

const Home: React.FC = () => {
  return (
    <div className="home-background">
      <div className="home-content">
        <img src="/Pic green shirt.jpeg" className="home-avatar" alt="Kevin Li" />
        <h1 className="home-name">Kevin Li</h1>
        <h2 className="home-role">Software Engineer</h2>
        <p className="home-sub">
          B.S. Software Engineering · UC Irvine<br />
          Master of Computer Science · UC Irvine
        </p>
        <div className="home-buttons">
          <a
            className="home-btn"
            href="https://www.linkedin.com/in/kevinjianhli23"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="home-btn"
            href="https://github.com/KevinJli23"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;