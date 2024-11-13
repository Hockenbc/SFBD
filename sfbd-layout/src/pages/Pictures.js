import "../styles/Pictures.css";
import slideshow2 from "../images/apollo.png";
import Year from "../components/Year";

const Slideshow = () => {
    return (
        <div className="slideshow-container">
            <div className="mySlides fade">
                <img id="slide-1" src={slideshow2} alt="Slideshow" />
            </div>
        </div>
    );
};

const Pictures = () => {
    return (
        <div id="content">
            <Slideshow />
            <Year />
            
        </div>
    );
};
export default Pictures;