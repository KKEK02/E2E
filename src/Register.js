import React, { useState } from 'react';
import { signUpWithEmailAndPassword,logInWithEmailAndPassword } from './Firebase';
import { Home } from "./Home";
import Login from './Login';
function Register({navigate}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setconfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle registration logic here
        if (password !== confirmpassword) {
            alert('Passwords do not match!');
            return;
        }
        signUpWithEmailAndPassword(email, password).then(() => {
            alert('User registered successfully!');
            navigate(Home)
        }
        ).catch((error) => {
            alert(error.message);
        });
        console.log('Registering with:', email, password);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <div>
                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Confrim Password</label>
                <input
                    type="password"
                    value={confirmpassword}
                    onChange={(e) => setconfirmPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Register</button>
        </form>
        <p>Already have an account? <button onClick={()=>navigate(Login)}>Login</button></p>
        </div>
    );
}

export default Register;