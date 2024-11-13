import React, { useState, useEffect } from 'react';
import '../styles/Puppy.css';

    const Puppy = () => {
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
        
                            <img src={`${puppy.img_name}`} alt={puppy.name} id="puppy-img" />
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
  
  export default Puppy;