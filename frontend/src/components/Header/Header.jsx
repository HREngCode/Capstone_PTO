import React from 'react';
import "./Header.css";
import logo from "../../assets/template.jpg"


const Header = () => {
    return (
        <div className="header">
            <header>                
                    <img src={logo} alt=""/>
                    <h2>Time Off Request</h2>
            </header>
        </div>
    );
  };
  
 
export default Header;