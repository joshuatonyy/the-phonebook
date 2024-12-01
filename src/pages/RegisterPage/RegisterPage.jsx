import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./RegisterPage.css";
import AppleTextfield from "../../components/AppleTextfield/AppleTextfield";

export const RegisterPage = () => {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  return (
    <div className="registerpage__parent-container">
      <div className="container">
        <div className="header">
          <div className="text">Register New Account</div>
        </div>

        <div className="entries">
          {/* NAME */}
          <AppleTextfield
            id="name"
            label="Name"
            value={nameValue}
            onChange={(e) => setNameValue(e.target.value)}
            required
          />

          {/* EMAIL */}
          <AppleTextfield
            id="email"
            label="Email"
            type="email"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
            required
          />

          {/* PASSWORD */}
          <AppleTextfield
            id="password"
            label="Password"
            type="password"
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
            required
          />
        </div>

        {/*Register and Login Button*/}
        <div className="submit-container">
          <div className="submit-register">Register</div>
        </div>

        {/*Register New Account Hyperlink*/}
        <div className="register-new-account">
          Already have an account?{" "}
          <span>
            <Link to="/login">Sign In</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
