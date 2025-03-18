import React, { useState } from "react";
import { resetPassword } from "./Firebase";
import Login from "./Login";
function ResetPassword({navigate}) {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        resetPassword(email);
        // Add reset logic here
    };

    return (
        <div>
            <h2>Reset Password</h2>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                />
                <button type="submit">Reset Password</button>
            </form>
            <button onClick={() => navigate(Login)}>Login</button>
        </div>
    );
}

export default ResetPassword;