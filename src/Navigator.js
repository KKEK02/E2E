import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import { Home } from "./Home";
import { isLoggedin } from './Firebase';
import Resource from './Resource.js';
import Logout from './Logout';
export default class Navigator extends React.Component {
    constructor(parameters) {
        super();
       this.state = {
           ActivePage : isLoggedin ? Home : Login
       }

    }
    setActivepage = (page) => {
        this.setState({ActivePage : page});
    }
    navigate = (page) => {
        alert(isLoggedin);
        if (page === Login || page === Register) {
            isLoggedin ? this.setActivepage(Home) : this.setActivepage(page);            
            return;
        }
        isLoggedin ? this.setActivepage(page) : this.setActivepage(Login);
    }

    render() {
        return (
          <div>
            
            {isLoggedin 
                ?   <div>
                        <button onClick={()=>this.navigate(Home)}>Home</button>
                        <button onClick={()=>this.navigate(Resource)}>Resource</button>
                        <button onClick={()=>this.navigate(Logout)}>Logout</button>

                    </div>
                : 
                <div>
                    <button onClick={()=>this.navigate(Login)}>Login</button>
                    <button onClick={()=>this.navigate(Register)}>Register</button>
                </div>
                    
            }
            <this.state.ActivePage navigate={(page)=>this.navigate(page)}/>
          
          </div>  // <this.ActivePage/>
        );
    }
}