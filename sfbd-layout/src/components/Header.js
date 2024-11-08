import '../styles/Header.css';
import logo from "../images/sfbd-logo.png";

function Header() {
  return  ( 
    <header id="main-header">
        <div id="main-nav" className="grid-container">
            <img id="logo" src ={logo} alt="Logo" />
        </div>
    </header>
  );
};

export default Header;