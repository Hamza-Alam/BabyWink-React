import React from 'react';
import footerImg from '../assets/img/footerImg.png';
import appleLogo from '../assets/img/appleStore.jpg';

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
                                    </ul>
                                </div>
                            
                            
                                <div className="col-lg-3 col-md-3">
                                    <img width="500" height="600" alt="Girl in a jacket" scr="data:image/jpg;base64,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"/>
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
                                            <span>Terms & Conditions</span>
                                            <span>Privacy Policy</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="footerSocialDiv">
                        <ul>
                            <li>
                                <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
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