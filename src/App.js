import './App.css';
import Navbar from './components/Navbar';
import Profile from "./components/Profile";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <br />
      <br />
      <br />
      <hr />
      <About />
      <br />
      <br />
      <br />
      <hr />
      <Skills />
      <br />
      <br />
      <br /><br /><br /><br /><br />
      <hr />
      <Projects />
      <br /><br /><br />
      <hr />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
