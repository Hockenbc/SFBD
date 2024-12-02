import React, { useState, useEffect } from 'react';
import axios from "axios";
import AddDialog from "../components/add-dialog";
import '../styles/Puppy.css';


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

    const Puppy = () => {
            const [showAddDialog, setShowAddDialog] = useState(false);
            const [puppies, setPuppies] = useState([]);
        
            useEffect(() => {
                (async () => {
                     const response = await axios.get(
                         "https://sfbd-backside.onrender.com/api/puppies/"
                     );
                     setPuppies(response.data);
                })();
             }, []);

             const addPuppy = (Puppy) => {
                setPuppies((puppies) => [...puppies, Puppy]);
            };
            
            const openAddDialog = () => {
                setShowAddDialog(true);
            };
            const closeAddDialog = () => {
                setShowAddDialog(false);
            };
 
        
            return (

                <div id="content">
                        <div id="puppy-header">
                            <h1>Our Puppies</h1>
                        </div>

                        <PuppyInfo />

                        <div id="add-button" onClick={openAddDialog}>
                            <button id="add-puppy">Add Puppy</button>
                        </div>

                        {showAddDialog ? <AddDialog closeDialog={closeAddDialog} addPuppy={addPuppy} /> : ""}
                        

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
                </div>
            );
        };
  
  export default Puppy;