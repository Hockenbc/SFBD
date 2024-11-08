import React, { useState, useEffect } from 'react';
import "../styles/FindAPuppy.css";

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

const PuppySection = () => {
    const [puppies, setPuppies] = useState([]);

    useEffect(() => {
        const fetchPuppies = async () => {
            try {
                const response = await fetch('https://Hockenbc.github.io/json/puppies.json');
                const data = await response.json();
                setPuppies(data);
            } catch (error) {
                console.error('Error fetching puppies:', error);
            }
        };
        fetchPuppies();
    }, []);

    return (
        <div id="puppy-section">
            {puppies.map((puppy, index) => (
                <div key={index} className="puppy">
                    {console.log(puppy.img_name)}

                    <img src={`/${puppy.img_name}`} alt={puppy.name} id="puppy-img" />
                    <div id="names">
                        <h1><i>{puppy.name}</i></h1>
                    </div>
                    <div id="gender">
                        <p>Gender: {puppy.gender}</p>
                    </div>
                    <div id="descriptions">
                        <p>{puppy.description}</p>
                    </div>
                </div>
            ))}
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
            <PuppySection />
        </div>
    );
};
export default FindAPuppy;