import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./LoginPage.css";
import AppleTextfield from "../../components/AppleTextfield/AppleTextfield";

export const LoginPage = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  return (
    <div className="loginpage__parent-container">
      <div className="container">
        <div className="header">
          <div className="text">Login</div>
        </div>

        <div className="entries">
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
          <div className="submit-login">Login</div>
        </div>

        {/*Register New Account Hyperlink*/}
        <div className="register-new-account">
          Don't have an account?{" "}
          <span>
            <Link to="/register">Create a new account.</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
