import "../styles/dialog.css";
import React, { useState } from "react";

const DeleteDialog = (props) => {
    const [result, setResult] = useState("");
    const deletePuppyPlan = async() => {
        const response = await fetch(
            `https://sfbd-backside.onrender.com/api/puppies/${props._id}`,
            {
                method: "DELETE",
            }
        );
    

        if (response.status === 200) {
            setResult("Puppy Successfully deleted");
            props.hidePuppyPlan();
            props.closeDialog();
        } else {
            console.log("Error deleting puppy", response);
            setResult(response.message);
        }
    };

    return (
    <div id="delete-dialog" className="w3-modal-content">
        <div className="w3-modal-content">
            <div className="w3-container">
                <span
                id="dialog-close"
                className="w3-button w3-display-topright"
                onClick={props.closeDialog}
                >
                    &times;
                </span>
                <div id="delete-content">
                    <h3>Are you sure you want to delete the {props.name}</h3>
                    <section>
                        <button onClick={deletePuppyPlan}>Yes</button>
                        <button onClick={props.closeDialog}>No</button>
                    </section>
                    <span>{result}</span>
                </div>
            </div>
        </div>
    </div>

    );
};

export default DeleteDialog;