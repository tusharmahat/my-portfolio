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
      <hr />
      <About />
      <hr />
      <Skills />
      <hr />
      <Projects />
      <hr />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
