import "../styles/dialog.css";
import React, { useState } from "react";

const EditDialog = (props) => {
    const [inputs, setInputs] = useState({
        _id: props._id,
        name: props.name,
        gender: props.gender,
        description: props.description,
    });

    const [result, setResult] = useState("");

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    const handleImageChange = (event) => {
        const name = event.target.name;
        const value = event.target.files[0];
        setInputs((values) => ({ ...values, [name]: value }));
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");
        const formData = new FormData(event.target);

        const response = await fetch(
            `https://sfbd-backside.onrender.com/api/puppies/${props._id}`,
            {
                method: "PUT",
                body: formData,
            }
        );
    

    if (response.status === 200) {
        setResult("Puppy Successfully updates");
        event.target.reset();
        props.editPuppyPlan(await response.json());
        props.closeDialog();
    } else {
        console.log("Error Editing Puppy", response);
        setResult(response.message);
    }

};

    return (

        <div id="edit-dialog" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                    <span 
                        id="dialog-close"
                        className="w3-button w3-display-topright"
                        onClick={props.closeDialog}
                    >
                        &times;
                    </span>
                    <form id="edit-puppy-form" onSubmit={onSubmit}>
                        <p>
                            <label htmlFor="name ">Property Name:</label>
                            <input
                                type="text"
                                id="name"
                                value={inputs.name || ""}
                                onChange={handleChange}
                                required
                            />
                        </p>
                        <p>
                            <label htmlFor="gender">Gender:</label>
                            <input
                                type="text"
                                id="gender"
                                value={inputs.gender || ""}
                                onChange={handleChange}
                                required
                            />
                        </p>
                        <p>
                            <label htmlFor="description">Description:</label>
                            <input
                                type="text"
                                id="description"
                                value={inputs.description || ""}
                                onChange={handleChange}
                                required
                            />
                        </p>

                        <section className="columns">
                            <p id="img-prev-section">
                                <img
                                    id="img-prev"
                                    src={
                                        inputs.img != null
                                        ? URL.createObjectURL(inputs.img)
                                        : inputs.prev_img != null
                                        ? `https://sfbd-backside.onrender.com/api/puppies/${inputs.prev_img}`
                                        : ""
                                    }
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
                        <p>{result}</p>
                    </form>
                </div> 
            </div>
        </div>
    );
};

export default EditDialog;