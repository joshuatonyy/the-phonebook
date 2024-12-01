import React, { useState } from "react";
import "./ContactForm.css";
import AppleTextfield from "../../../components/AppleTextfield/AppleTextfield";

export const ContactForm = ({ isEdit, onClose, onSubmit }) => {
  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");

  return (
    <div className="contactform__overlay">
      <div className="contactform__container">
        <div className="contactform__header">
          <p className="contactform__header-title">Contact Form</p>
          <button
            className="contactform__header-close-button"
            onClick={onClose}
          >
            &times;
          </button>
        </div>

        <div className="contactform__entries">
          {/* NAME */}
          <AppleTextfield
            id="contact-name"
            label="Name"
            value={nameValue}
            onChange={(e) => setNameValue(e.target.value)}
            required
          />
          {/* PHONE NUMBER */}
          <AppleTextfield
            id="contact-phone-number"
            label="Phone Number"
            type="tel"
            value={phoneValue}
            onChange={(e) => setPhoneValue(e.target.value)}
            required
          />
        </div>

        <div className="contactform__submit-container">
          <div className="contactform__submit-button" onClick={onSubmit}>
            Submit
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
