import '../styles/Footer.css';
import logo2 from "../images/sfbd-logo.png";

const Footer = () => {
    return (
      <footer id="footer">
        <img id="logo2" src={logo2} alt="South Fort Blue Danes Logo" width="100" />
        <p id="footer-copy">
          &copy; South Fort Blue Danes LLC
        </p>
      </footer>
    );
  };
  
  export default Footer;