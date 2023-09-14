import '../App.css';
import { useState } from 'react';
import NavLinks from './NavLinks';
function Navbar() {
  const [isShown, setIsShown] = useState(false);

  const toggleMenu = (event) => {
    setIsShown(isShown => !isShown);
  }
  return (
    <div id="home" >
      <nav id="desktop-nav">
        <div className="logo">Tushar Mahat</div>
        <div>
          <NavLinks />
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">Tushar Mahat</div>
        <div className="hamburger-menu">
          {!isShown && (
            <div className="hamburger-icon" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>)
          }
          {isShown && (
            <div>
              <div className="hamburger-menu-close" onClick={toggleMenu}>
                X
              </div>
              <div className="menu-links">
                <li><a href="#about" onClick={toggleMenu}>About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
                <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
                <li><a href="#home" onClick={toggleMenu}>Home</a></li>
              </div>
            </div>)
          }
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
