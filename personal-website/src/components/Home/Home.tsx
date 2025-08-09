import "./Home.css"; // Import the CSS file


const Home: React.FC = () => {
    return (
        <div className="background">
            <h1>Kevin Li</h1>
            <div className="image-container">
                <img src="Pic green shirt.jpeg" className="round-image" />
            </div>
            <h2>Software Engineer </h2>
            <h3> B.S. Software Engineering at UC Irvine | Incoming Master's student in Computer Science at UC Irvine </h3>
            <div className="button-group">
                <button className="btn">
                    <a href="https://www.linkedin.com/in/kevinjianhli23">LinkedIn</a>
                </button>
                <button className="btn">
                    <a href="https://github.com/KevinJli23">GitHub</a>
                </button>
            </div>
        </div>
    );
};
export default Home;