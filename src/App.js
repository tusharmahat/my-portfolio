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
      <hr />
      <About />
      <br />
      <hr />
      <Skills />
      <br />
      <hr />
      <Projects />
      <br />
      <hr />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
