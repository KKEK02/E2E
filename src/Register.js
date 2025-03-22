import React, { useState } from 'react';
import { signUpWithEmailAndPassword,isUserNameUnique,assignUserName } from './Firebase';
import { Home } from "./Home";
import Login from './Login';
import './Register.css';

function Register({navigate}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setconfirmPassword] = useState('');
    const [userName,setuserName] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle registration logic here
        if (password !== confirmpassword) {
            alert('Passwords do not match!');
            return;
        }
        if (!isUserNameUnique(userName)) {
            alert("userName already taken");
            return;
        }
        signUpWithEmailAndPassword(email, password).then(() => {
            assignUserName(userName);
            alert('User registered successfully!');
            navigate(Home)
        }
        ).catch((error) => {
            alert(error.message);
        });
        console.log('Registering with:', email, password);
    };

    return (
        <div id="webcrumbs" overflow="hidden">  
            <div className="w-full min-h-screen flex justify-center items-center bg-gradient-to-br from-primary-100 via-white to-primary-200 p-4">
                <div className="w-[400px] bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="p-8">
                        <div className="grid place-items-center">
                            
                            <div className="text-center mb-8">
                                <h1 className="text-2xl font-bold text-primary-600">Campus Companion</h1>
                                <p className="text-sm text-gray-500 mt-2">Join our online learning community</p>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit}> 
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2" htmlFor="email">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="Full Name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                                    placeholder="FristName LastName"
                                    onChange={(e) => setuserName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2" htmlFor="email">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                                    placeholder="your@email.com"
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="mb-6">
                                <div className="flex items-center justify-between mb-2">
                                    <label className="block text-sm font-medium" htmlFor="password">
                                        Password
                                    </label>
                                    
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
                            <div className="mb-6">
                                <div className="flex items-center justify-between mb-2">
                                    <label className="block text-sm font-medium" htmlFor="password">
                                        Confrim Password
                                    </label>
                                </div>
                                <input
                                    type="password"
                                    id="password"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                                    placeholder="••••••••"
                                    onChange={(e) => setconfirmPassword(e.target.value)}
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


                        <div className="flex space-x-4">
                            <button
                                type="submit"
                                className="flex-1 py-2.5 px-4 rounded-lg border border-gray-300 bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-md transition-all duration-200 transform hover:scale-[1.02] hover:shadow-md"
                            >
                                
                                <span>Submit</span>
                            </button>
                            <button
                                type="button"
                                className="flex-1 py-2.5 px-4 rounded-lg border border-gray-300 bg-white shadow-sm flex items-center justify-center space-x-2 hover:bg-gray-50 focus:ring-2 focus:ring-primary-500 focus:outline-none transition-all duration-200"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                        fill="#4285F4"
                                    />
                                    <path
                                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                        fill="#34A853"
                                    />
                                    <path
                                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                        fill="#FBBC05"
                                    />
                                    <path
                                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                        fill="#EA4335"
                                    />
                                </svg>
                                <span>Google</span>
                            </button>
                            
                        </div>

                            
                            
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
        //     <form onSubmit={handleSubmit}>
        //     <h2>Register</h2>
        //     <div>
        //         <label>User Name</label>
        //         <input
        //             type="text"
        //             value={userName}
        //             onChange={(e) => setuserName(e.target.value)}
        //             required
        //         />
        //     </div>
        //     <div>
        //         <label>Email</label>
        //         <input
        //             type="email"
        //             value={email}
        //             onChange={(e) => setEmail(e.target.value)}
        //             required
        //         />
        //     </div>
        //     <div>
        //         <label>Password</label>
        //         <input
        //             type="password"
        //             value={password}
        //             onChange={(e) => setPassword(e.target.value)}
        //             required
        //         />
        //     </div>
        //     <div>
        //         <label>Confrim Password</label>
        //         <input
        //             type="password"
        //             value={confirmpassword}
        //             onChange={(e) => setconfirmPassword(e.target.value)}
        //             required
        //         />
        //     </div>
        //     <button type="submit">Register</button>
        // </form>
        // <p>Already have an account? <button onClick={()=>navigate(Login)}>Login</button></p>
        // </div>
    );
}

export default Register;