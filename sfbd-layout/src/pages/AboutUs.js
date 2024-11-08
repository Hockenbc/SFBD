import "../styles/AboutUs.css";
import puppyImage from "../images/puppypic-cam.jpg";


const AboutUs = () => {

    return (
        <div id="content">
          <div id="about-us">
            <h1>About Us</h1>
            <hr />
          </div>
    
          <div id="img">
            <img src={puppyImage} alt="Puppy" width="400" />
            <hr />
          </div>
    
          <div id="about-us-info">
            <h2>Meet the Breeder</h2>
            <p>
              Our dogs are a huge part of our lives, and we enjoy spending time with them; whether that be through completing our 
              various day-to-day activities together or just cuddling up at night. We are a selective program that focuses on temperament 
              and the overall well-being of our dogs. We breed to produce happy and healthy puppies that can continue to excel in their 
              forever homes. We are very proud to be breeding these incredible dogs.
            </p>
    
            <h3>How did we get into breeding?</h3>
            <p>
              We have had and loved Great Danes for about 18 years and decided to put that love into producing beautiful, well-rounded 
              puppies. We have built admiration and respect for the breed into every aspect of our program. We want to do our part to 
              better the breed. Our breeding program strives to maintain the unique characteristics of the Great Dane while placing an 
              emphasis on producing puppies of superior health, temperament, and structure.
            </p>
    
            <h3>What makes our breeding program special?</h3>
            <p>
              At South Fort Blue Danes, we produce excellent companions. We understand the importance of dog health, temperament, 
              and structure, and every breeding decision is made accordingly. We are very dedicated to what we do and what we are 
              trying to achieve as breeders. We work with passion, heart, and integrity, and we truly want what's best for the 
              Great Dane line and their forever families!
            </p>
          </div>
        </div>
      );
    };
export default AboutUs;