import React, { useState } from "react";
import '../styles/Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [resultMessage, setResultMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const showEmailResult = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setResultMessage("Please wait...");

        const response = await getEmailResult();
        if (response?.status === 200) {
            setResultMessage("Email successfully sent!");
        } else {
            setResultMessage("Sorry, your email was not sent.");
        }
        setIsSubmitting(false);
    };

    const getEmailResult = async () => {
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "35994871-99d8-4631-a4d2-003f5f3f2a87",
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    subject: "Contact from Courtney's Website",
                    from_name: "My Website",
                    redirect: "https://web3forms.com/success",
                }),
            });
            return response;
        } catch (error) {
            console.error("Error sending email:", error);
            setResultMessage("Sorry, your email couldn't be sent.");
        }
    };

    return (
        <section id="contact-us">
            <div id="contact-header">
                <h1>Contact Us</h1>
                <hr />
            </div>
            <div className="columns">
                <form id="contact-form" onSubmit={showEmailResult}>
                    <p>
                        <label htmlFor="name">Name:</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Full Name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </p>
                    <p>
                        <label htmlFor="email">Email:</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </p>
                    <p>
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                        ></textarea>
                    </p>
                    <p>
                        <button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Submitting..." : "Submit Form"}
                        </button>
                    </p>
                    <p id="result">{resultMessage}</p>
                </form>
                <iframe
                    id="youtube"
                    src="https://www.youtube.com/embed/w-tc6fFBAYg?si=ovb1jFoPiTk8Bjwq"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
        </section>
    );
  };
  
  export default Contact;