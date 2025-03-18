import React, { useState } from "react";
import {Home} from "./Home";
import { logInWithEmailAndPassword,auth } from "./Firebase";
import Register from "./Register";
import ResetPassword from "./ResetPassword";


export function Login({ navigate }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Handle login logic here
        console.log("Username:", username);
        console.log("Password:", password);
        localStorage.setItem("authToken", false);
        logInWithEmailAndPassword(username, password).then(() => {
            console.log("Logged in successfully");
            navigate(Home);
        }, (error) => {
            console.log("Error logging in:", error);
        });
    };

    return (
        <div>
            <p>{ }</p>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>

            <p>Don't have an account? <button onClick={()=>navigate(Register)}>login</button></p>
            <p>Forgot your password? <button onClick={() =>navigate(ResetPassword)}>resetPassword</button></p>
        </div>
    );
}

export default Login;
