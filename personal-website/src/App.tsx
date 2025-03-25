import './App.css'
import Header from './components/Header/Header';
import ScrollableResume from './components/ScrollableResume/ScrollableResume';
import Projects from './components/Projects/projects';


function App() {
  return (
    <div>
      <Header></Header>
      <Projects></Projects>
      <ScrollableResume></ScrollableResume>
      <p><a href="https://www.linkedin.com/in/kevinjianhli23">Linkedin</a></p>
    </div >
  );
}
export default App;

