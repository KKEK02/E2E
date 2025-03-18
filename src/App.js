import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Login  from "./Login";
import Register from "./Register";
import ResetPassword from "./ResetPassword.js"
import { ProtectedRoute } from "./Firebase";
import { useState } from "react";
import Navigator from "./Navigator.js";
function About() {
  
  return <h1>About</h1>;
} 
function Contact() { 
  return <h1>Contact</h1>;
}

export function ProtecteRoute(){

}



function App() {
  
  const [ActivePage,setActivepage] = useState("Home");

  return (
    <Navigator/>
  );
}

export default App;
