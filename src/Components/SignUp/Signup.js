import React, { useState } from "react";
import { Redirect, useHistory } from "react-router";
import { signUp } from "../../Helpers/auth";
import "./Signup.css";
import { registerUserForChat } from "../../Helpers/db";

const Signup = () => {
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [err, setErr] = useState(null);

  const handleSignUp = async () => {
    if (password === confirmPassword) {
      try {
        await signUp(email, password);
        registerUserForChat(name, email);
        history.push("/signin");
      } catch (err) {
        console.log(err);
        setErr(err);
      }
    } else {
      alert("Password and Confirm Password are not same...")
    }
  };

  if (localStorage.getItem("userInfo")) {
    return <Redirect to="/chat" />;
  }

  return (
    <>
      <h1 className="error-message">{err?.message}</h1>
      <div className="sign-up">
        <h1> SIGN UP </h1>

        <div className="su-input-fields">
          <label>Name</label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="su-input-fields">
          <label>Email</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="su-input-fields">
          <label>Password</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
          />
        </div>

        <div className="su-input-fields">
          <label> Confirm Password</label>
          <input
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            type="password"
          />
        </div>

        <div className="sign-up-button">
          <button onClick={handleSignUp}>Sign Up</button>
        </div>
      </div>
    </>
  );
};

export default Signup;
