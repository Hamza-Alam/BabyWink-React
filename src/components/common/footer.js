import React from 'react';
import footerImg from '../assets/img/footerImg.png';
import appleLogo from '../assets/img/itunes-app-store-logo.png';
import { Link } from "react-router-dom";

const footer = () =>{
    return(
        <div>
            <div className="footerDiv">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="footerImage">
                                <img src={footerImg}/>
                                <p className="footerPara">Babywink</p>
                            </div>
                        </div>
                    </div>
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
                                        <li><Link to="/PrivacyPolicy">Privacy Policy</Link></li>
                                        <li><Link to="/TermConditions">Term & Condition</Link></li>
                                    </ul>
                                </div>
                            
                            
                                <div className="col-lg-3 col-md-3">
                                <a href="https://apps.apple.com/us/app/baby-wink/id1239819394" target="_blank"><img src={appleLogo}/></a>
                                </div>
                            </div>
                        </div>
                        <div className="mobileFooter">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <h4 className="footerTitle">Contact</h4>
                                        <ul className="list3">
                                            <li>E-mail</li>
                                        </ul>
                                    </div>
                                </div>
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
                                            <span><Link to="/TermConditions">Terms & Conditions</Link></span>
                                            <span><Link to="/PrivacyPolicy">Privacy Policy</Link></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="footerSocialDiv">
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/BabyWinkApp/"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                            </li>
                            <li>
                                <a href="https://twitter.com/BabyWinkApp"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/babywinkapp/"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                            </li>
                            <li className="linkImage">
                                
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default footer;