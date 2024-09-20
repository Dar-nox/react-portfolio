import './App.css';
import Navbar from './Navbar';
import Card1 from './project1';
import Card2 from './projects2';
import Card3 from './projects3';
import AboutMe from './aboutme';
import ContactForm from './contacts';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="AboutMe">
        <AboutMe></AboutMe>
      </div>
      <div className="Projects">
        <h1><span className="projectsTitle">Projects</span></h1>
        <div className="projectCards">
          <Card1></Card1>
          <Card2></Card2>
          <Card3></Card3>
        </div>
      </div>
      <div className="ContactForm">
        <h1><span className="projectsTitle">Contact Me</span></h1>
        <ContactForm></ContactForm>
      </div>
    </div>
  );
}
export default App;