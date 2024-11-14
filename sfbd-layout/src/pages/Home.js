import "../styles/Home.css";
import slideshow1 from "../images/about-us-pic.jpg";
import facebook from "../images/facebook-logo.png";
import tiktok from "../images/tiktok-logo.png";
import insta from "../images/black-instagram-logo-04.png";

const Slideshow = () => {
    return (
        <div className="slideshow-container">
            <div className="mySlides fade">
                <img id="slide-1" src={slideshow1} alt="Slideshow" />
            </div>
        </div>
    );
};

const MainInfo = () => {
    return (
        <aside id="main-info-socials">
            <section id="info" className="left">
                <h1>South Fort Blue Danes</h1>
                <hr id="homehr" />
                <h2>Our Kennel</h2>
                <p>
                    As longtime lovers of Great Danes and retired Veterans, we devote our time, energy, 
                    and efforts to each litter to ensure our puppies are properly socialized from the moment 
                    they are born and prepared to excel in their forever homes. 
                    Here at South Fort Blue Danes, our dogs are more than just pets -- they are our family members.
                    We whelp and raise all of our puppies in the home. We have a huge amount of respect for the breed and 
                    we work hard to find forever homes with families that will love them just as much as we do!
                </p>
            </section>
            
            <section id="socials" className="right">
                <h4>Socials</h4>
                <ul>
                    <li>
                        <a href="https://www.facebook.com/southfortbluedanes">
                            <img src={facebook} width="80" alt="Facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.tiktok.com/@southfortbluedanes?lang=en">
                            <img src={tiktok} width="90" alt="TikTok" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/southfort_blue_danes/">
                            <img src={insta} width="90" alt="Instagram" />
                        </a>
                    </li>
                </ul>
            </section>
        </aside>
    );
};

function Home() {
  return  ( 
    <div id="content">
        <Slideshow />
        <MainInfo />

    </div>
  );
};

export default Home;