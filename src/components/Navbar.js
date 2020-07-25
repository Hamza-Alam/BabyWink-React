import React from 'react';
import { Link } from "react-router-dom";
import './style/style.css';
import logoImage from './assets/img/logo.png';
const NavBar = () =>{
    const handleClick = () => {
        document.getElementById("myNav").style.width = "100%";
      }
    return(
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                <button type="button" className="navbar-toggle hideNavButton" data-toggle="collapse" data-target="#myNavbar">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>                        
                </button>
                <button type="button" className="navbar-toggle openMenu" onClick={handleClick}>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>                        
                </button>
                <div className="logoDiv">
                 <Link className="navbar-brand" to="/"><img className="navImg" src={logoImage}/> <p>Babywink</p></Link>
                </div>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                
                <ul className="nav navbar-nav navbar-right">
                <ul className="nav navbar-nav">
                    <li className="active"><a href="#babySleepingDiv">How it works</a></li>
                    <li><a href="#babyWinkPro">Pricing</a></li>
                    <li><a href="/blog">Blog</a></li>
                    {/* <li className="signButton"><a>Sign up</a></li>
                    <li className="loginButton"><a>Log in</a></li> */}
                </ul>
                </ul>
                </div>
            </div>
        </nav>
    )
}
export default NavBar;