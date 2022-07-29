import React, { useState } from "react";
import { Redirect, useHistory } from "react-router";
import { signIn } from "../../Helpers/auth";
import "./Signin.css";

const Signin = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(null);

  const handleSignIn = async () => {
    try {
      const user = await signIn(email, password);

      localStorage.setItem("userInfo", user.user.email);
      history.push("/chat");
    } catch (err) {
      console.log(err)
      setErr(err);
    }
  };

  const userEmail = localStorage.getItem("userInfo");

  if (userEmail) {
    return <Redirect to="/chat" />;
  }

  return (
    <>
      <h1 className="error-message">{err?.message}</h1>
      <div className="sign-in">
        <h1> SIGN IN </h1>

        <div className="input-fields">
          <label>Email</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="input-fields">
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <div className="sign-in-button">
          <button onClick={handleSignIn}>Sign In</button>
        </div>
      </div>
    </>
  );
};

export default Signin;
