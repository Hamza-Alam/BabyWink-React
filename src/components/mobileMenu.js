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
                    <a href="#timmerSection">How it works</a>
                    <a href="#babyWinkPro">Pricing</a>
                    <a href="/blog">Blog</a>
                </div>
            </div>
        </div>
    )
}
export default MobileMenu;