import React, { useState } from "react";
import '../styles/dialog.css';

const AddDialog = (props) => {
    const [inputs, setInputs] = useState({});
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("sending...");

        const formData = new FormData(event.target);

        const response = await fetch("https://sfbd-backside.onrender.com/api/puppies/", {
            method: "POST",
            body: formData,
        });

        if (response.status === 200) {
            event.target.reset();
            props.addPuppy(await response.json());
            props.closeDialog();
        } else {
            console.log("Error Adding Puppy", response);
            setResult(response.message);
        }
    };

    const handleChange = (event) => {
        const name= event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    }
    const handleImageChange = (event) => {
        const name= event.target.name;
        const value = event.target.files[0];
        setInputs((values) => ({ ...values, [name]: value }));
    }

    return (
        <div id="add-dialog" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                    <span id="dialog-close" className="w3-button-display-topright" onClick={props.closeDialog}>
                        &times;
                    </span>
                    <form id="add-propety-form" onSubmit={onSubmit}>
                        <p>
                            <label htmlFor="name ">Puppy Name:</label>
                            <input type="text" 
                            id="name" 
                            name="name" 
                            value={inputs.name || ""}
                            onChange={handleChange}
                            required />
                        </p>
                        <p>
                            <label htmlFor="gender ">Gender:</label>
                            <input type="text" 
                            id="gender" 
                            name="gender" 
                            value={inputs.gender || ""}
                            onChange={handleChange}
                            required />
                        </p>
                        <p>
                            <label htmlFor="description ">Description:</label>
                            <input type="text" 
                            id="description" 
                            name="description" 
                            value={inputs.description || ""}
                            onChange={handleChange}
                            required />
                        </p>

                        <section className="columns">
                            <p id="img-prev-section">
                                <img
                                id="img-prev"
                                src={inputs.img != null ? URL.createObjectURL(inputs.img) : "" }
                                    alt=""
                                />
                            </p>
                            <p id="img-upload">
                                <label htmlFor="img">Upload Image:</label>
                                <input
                                type="file"
                                id="img"
                                name="img"
                                onChange={handleImageChange}
                                accept="image/*"
                                />
                            </p>
                        </section>
                        <p>
                            <button type="submit">Submit</button>
                        </p>
                    </form>
                    <p>{result}</p>
                </div>
            </div>
        </div>
    );
};

export default AddDialog;