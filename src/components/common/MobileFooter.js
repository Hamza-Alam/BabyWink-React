import React from 'react';
import footerImg from '../assets/img/footerImg.png';
import appleLogo from '../assets/img/cbimage.jpg';

const MobileFooter = () =>{
    return(
        <div>
            <div className="mobileFooterDiv">
                <div className="container">
                    <div className="footerList">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                <h4 className="footerTitle">About Us</h4>
                                <ul className="list1">
                                    <li>Our Mission</li>
                                    <li>We’re Hiring</li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                <h4 className="footerTitle">Information</h4>
                                <ul className="list2">
                                    <li>Help & Support</li>
                                    <li>For Investors</li>
                                </ul>
                            </div>
                            <div className="listNone">
                                <div className="col-lg-3 col-md-3 col-sm-12">
                                    <h4 className="footerTitle">Contact</h4>
                                    <ul className="list3">
                                        <li>E-mail</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="mobileFooter">
                                <div className="underLine"></div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <p className="babyWinkText">
                                            @ Babywink 2020
                                        </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="termConditionDiv">
                                            <span>Terms & Conditions</span>
                                            <span>Privacy Policy</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileFooter;