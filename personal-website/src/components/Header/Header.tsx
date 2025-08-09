import "./Header.css"; // Import the CSS file

const Header: React.FC = () => {
    return (
        <div className="head-section">
            <header className="header">
                <nav>
                    <ul className="nav-list">
                        <li><a href="#About">About</a></li>
                        <li><a href="#Resume">Resume</a></li>
                        <li><a href="#Projects">Projects</a></li>
                        {/* <li><a href="#Skills">Skills</a></li> */}
                    </ul>
                </nav>
            </header>
        </div>
    );
};
export default Header;
