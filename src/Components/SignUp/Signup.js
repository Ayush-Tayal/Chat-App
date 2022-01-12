import React, { useState } from 'react'
import { Redirect, useHistory } from 'react-router';
import { signUp } from '../../Helpers/auth';
import './Signup.css'
import { registerUserForChat } from '../../Helpers/db';

const Signup = () => {
    const history = useHistory();
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState(null)
    // console.log("Input is", name, email, password);
    // console.log("Name is: ", name)

    const handleSignUp = async()=>{
        try{
            await signUp(email, password);
            registerUserForChat(name, email);
            console.log("sign up");
            history.push("/signin");
        }
        catch(err){
            setErr(err);
            console.log("Error", err);
        }
    }

    if(localStorage.getItem("userInfo")) {
        return <Redirect to='/chat'/>
    }

    return (
        <>
            <h1 className="error-message">{err?.message}</h1>
            <div className="sign-up">
            <h1> SIGN UP </h1>

                <div className="su-input-fields">
                    <label>Name</label>
                    <input onChange={(e)=>{setName(e.target.value)}} />
                </div>

                <div className="su-input-fields">
                    <label>Email</label>
                    <input onChange={(e)=>{setEmail(e.target.value)}} />
                </div>

                <div className="su-input-fields">
                    <label>Password</label>
                    <input onChange={(e)=>{setPassword(e.target.value)}} />
                </div>

                <div className="sign-up-button">
                    <button onClick={handleSignUp}>Sign Up</button>
                </div>
            </div>
    
        </>
    )
}

export default Signup
