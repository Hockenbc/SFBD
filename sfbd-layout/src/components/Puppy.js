import React, { useState, useEffect } from 'react';
import axios from "axios";
import AddDialog from "../components/add-dialog";
import '../styles/Puppy.css';
import EditDialog from './edit-dialog';
import DeleteDialog from './delete-dialog';


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

    const Puppy = (props) => {
            const [showAddDialog, setShowAddDialog] = useState(false);
            const [puppies, setPuppies] = useState([]);
            const [showEditDialog, setShowEditDialog] = useState(false);
            const [puppy, setPuppyPlan] = useState(props);

            const [showDeleteDialog, setShowDeleteDialog] = useState(false);
            const [showPuppyPlan, setShowPuppyPlan] = useState(true);
        
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

            const openEditDialog = () => {
                console.log("edit dialog");
                setShowEditDialog(true);
            };
            const closeEditDialog = () => {
                setShowEditDialog(false);
            };

            const openDeleteDialog = () => {
                console.log("edit dialog");
                setShowDeleteDialog(true);
            };
            const closeDeleteDialog = () => {
                setShowDeleteDialog(false);
            };

            const editPuppyPlan = (puppy) => {
                setPuppyPlan(puppy);
            };

            const hidePuppyPlan = (puppy) => {
                setShowPuppyPlan(false);
            };
 
        
            return (
                <div>
                    {showPuppyPlan ? (
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
                                    <div>
                                        {showDeleteDialog ? (
                                            <DeleteDialog 
                                            closeDialog={closeDeleteDialog} 
                                            name={puppy.name} 
                                            _id={puppy._id} 
                                            hidePuppyPlan = {hidePuppyPlan}
                                            />
                                            ) : ( "" )}

                                        {showEditDialog ? (
                                            <EditDialog 
                                                closeEditDialog={closeEditDialog}
                                                editPuppyPlan={editPuppyPlan}
                                                _id={puppy._id}
                                                name={puppy.name}
                                                size={puppy.gender}
                                                description={puppy.description}
                                                />
                                            ) : (
                                            ""
                                            )}
                                    </div>
                                    {console.log(puppy.img_name)}

                                    <header className="columns">
                                        <section id="change-buttons">
                                            <a href="#" onClick={openEditDialog}>
                                                &#9998;
                                            </a>
                                            <a href="#" onClick={openDeleteDialog}>
                                                &#x2715;
                                            </a>
                                        </section>
                                    </header>

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
                    ) : (
                        ""
                    )}
                </div>
                
            );
        };
  
  export default Puppy;