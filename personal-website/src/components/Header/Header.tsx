import "./Header.css"; // Import the CSS file

const Header: React.FC = () => {
    return (
        <div className="head-section">
            <header className="header">
                <nav>
                    <ul className="nav-list">
                        <li><a href="#Resume">Resume</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>

        </div>
    );
};
export default Header;
