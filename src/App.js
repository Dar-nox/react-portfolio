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
      <header className="App-header">
      <h1>React Porfolio</h1>
      </header>
      <div className="AboutMe">
        <AboutMe></AboutMe>
      </div>
      <div className="Projects">
        <h1>Projects</h1>
        <div className="projectCards">
          <Card1></Card1>
          <Card2></Card2>
          <Card3></Card3>
        </div>
      </div>
      <div className="ContactForm">
        <h1>Contact Me</h1>
        <ContactForm></ContactForm>
      </div>
    </div>
  );
}

export default App;
