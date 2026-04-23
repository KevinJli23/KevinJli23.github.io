import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li><a href="#About">About</a></li>
          <li><a href="#Resume">Experience</a></li>
          <li><a href="#Projects">Projects</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;