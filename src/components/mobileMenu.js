import React from 'react';


const MobileMenu = () =>{
    const closeMenu = () =>{
        document.getElementById("myNav").style.width = "0%";
    }
    return(
        <div className="mobileMenu">
            <div id="myNav" className="overlay">
                <h4 className="title">BabyWink</h4>
                <a href="javascript:void(0)" className="closebtn" onClick={closeMenu}>&times;</a>
                <div className="overlay-content">
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Clients</a>
                    <a href="#">Contact</a>
                </div>
            </div>
        </div>
    )
}
export default MobileMenu;