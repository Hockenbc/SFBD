import "../styles/FindAPuppy.css";
import Puppy from "../components/Puppy";

const PuppyInfo = () => {
    return (
        <div id="puppy-info">
            <p>
                Our puppies are raised in our home. We put a lot of care into socializing our puppies so they can transition 
                easily into their new lives with their forever families. We utilize the following enrichment methods: 
                Introduced to people of different ages and appearances, Daily handling, Scent introduction, Socialized with children, 
                Surface & tactile stimulation, Car rides, Various sounds, House Training, Household Desensitization, Sound Stimulation, 
                Various People, Various Surfaces, Socialized with Adult Dogs, Basic Manners, Crate Training.
            </p>
            <hr />
        </div>
    );
};


const FindAPuppy = () => {

    return (
        <div id="content">
            <div id="puppy-header">
                <h1>Our Puppies</h1>
            </div>
            <PuppyInfo />
            <Puppy />
        </div>
    );
};
export default FindAPuppy;