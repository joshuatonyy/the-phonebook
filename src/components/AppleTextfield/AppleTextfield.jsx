import React from "react";
import "./AppleTextfield.css";

function AppleTextfield({ 
  id, 
  label, 
  type = "text", 
  value, 
  onChange, 
  required = false, 
  className = "" 
}) {
  return (
    <div className={`entry ${className}`}>
      <input
        id={id}
        type={type}
        required={required}
        className="input"
        value={value}
        onChange={onChange}
      />
      <label
        htmlFor={id}
        className={`entry-label ${value ? "active" : ""}`}
      >
        {label}
      </label>
    </div>
  );
}


export default AppleTextfield;