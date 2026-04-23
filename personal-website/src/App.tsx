import './App.css';
import Header from './components/Header/Header';
import Projects from './components/Projects/projects';
import About from './components/About/About';
import Home from './components/Home/Home';
import TimelineResume from './components/TimelineResume/Timelineresume';

function App() {
  return (
    <div className="App">
      <Header />
      <section id="Home">
        <Home />
      </section>
      <section id="About">
        <About />
      </section>
      <section id="Resume">
        <TimelineResume />
      </section>
      <section id="Projects">
        <Projects />
      </section>
      
      {/* <div className="footer">
        <a href="https://www.linkedin.com/in/kevinjianhli23">LinkedIn</a> |{' '}
        <a href="https://github.com/KevinJli23">GitHub</a>
      </div> */}
    </div>
  );
}
export default App;
