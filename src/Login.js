import React, { useState } from "react";
import {Home} from "./Home";
import { logInWithEmailAndPassword,auth } from "./Firebase";
import Register from "./Register";
import ResetPassword from "./ResetPassword";
import './Login.css';


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
         <div id="webcrumbs">
            <div className="w-full min-h-screen flex justify-center items-center bg-gradient-to-br from-primary-100 via-white to-primary-200 p-4">
                <div className="w-[400px] bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="p-8">
                        <div className="text-center mb-8">
                            <h1 className="text-2xl font-bold text-primary-600">Welcome Back</h1>
                            <p className="text-sm text-gray-500 mt-2">Please enter your credentials to sign in</p>
                        </div>

                        <form onSubmit={handleSubmit}> 
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2" htmlFor="email">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                                    placeholder="your@email.com"
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="mb-6">
                                <div className="flex items-center justify-between mb-2">
                                    <label className="block text-sm font-medium" htmlFor="password">
                                        Password
                                    </label>
                                    <a
                                        href="https://webcrumbs.cloud/placeholder"
                                        className="text-xs text-primary-600 hover:text-primary-800 hover:underline transition-all duration-200"
                                    >
                                        Forgot Password?
                                    </a>
                                </div>
                                <input
                                    type="password"
                                    id="password"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                                    placeholder="••••••••"
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="flex items-center mb-6">
                                <input
                                    type="checkbox"
                                    id="remember"
                                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded cursor-pointer"
                                />
                                <label htmlFor="remember" className="ml-2 block text-sm text-gray-700 cursor-pointer">
                                    Remember me
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-md transition-all duration-200 transform hover:scale-[1.02] hover:shadow-md"

                            >
                                Sign In
                            </button>
                        </form>

                        <div className="mt-6 flex items-center justify-center">
                            <span className="text-sm text-gray-600">Don't have an account?</span>
                            <a
                                href=""
                                className="ml-2 text-sm text-primary-600 hover:text-primary-800 hover:underline transition-all duration-200"
                                onClick={(e) => {
                                    e.preventDefault();
                                    navigate(Register);
                                }}
                            >
                                Sign up
                            </a>
                        </div>

                        <div className="mt-8">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                                </div>
                            </div>

                            <div className="mt-6 grid grid-cols-1 gap-3">
                                <button onClick={alert('underimplementation')} className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-50 transition-all duration-200">
                                    <i className="fa-brands fa-google text-lg"></i>
                                    
                                                                    
                                </button>
                                
                            </div>
                        </div>
                    </div>
                    <div className="px-8 py-4 bg-gray-50 border-t border-gray-200 bg-opacity-80">
                        <p className="text-xs text-gray-500 text-center">
                            By signing in, you agree to our{" "}
                            <a href="https://webcrumbs.cloud/placeholder" className="text-primary-600 hover:underline">
                                Terms of Service
                            </a>{" "}
                            and{" "}
                            <a href="https://webcrumbs.cloud/placeholder" className="text-primary-600 hover:underline">
                                Privacy Policy
                            </a>
                            {/* Next: "Add links to actual Terms of Service and Privacy Policy pages" */}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        // <div>
        //     <p>{ }</p>
        //     <h1>Login Page</h1>
        //     <form onSubmit={handleSubmit}>
        //         <div>
        //             <label>Username:</label>
        //             <input
        //                 type="text"
        //                 value={username}
        //                 onChange={(e) => setUsername(e.target.value)}
        //             />
        //         </div>
        //         <div>
        //             <label>Password:</label>
        //             <input
        //                 type="password"
        //                 value={password}
        //                 onChange={(e) => setPassword(e.target.value)}
        //             />
        //         </div>
        //         <button type="submit">Login</button>
        //     </form>

        //     <p>Don't have an account? <button onClick={()=>navigate(Register)}>login</button></p>
        //     <p>Forgot your password? <button onClick={() =>navigate(ResetPassword)}>resetPassword</button></p>
        // </div>
    );
}

export default Login;
