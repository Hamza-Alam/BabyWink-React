import React from 'react';
import NavBar from '../Navbar';
import FeatureDiv from '../common/featureDiv';
import MobileFeatureDiv from '../common/mobileFeature';
import sleepLog from '../assets/img/sleepLog.png';
import sleepAnalyze from '../assets/img/sleepAnalyze.png';
import sleepTrainings from '../assets/img/sleepTraining.png';
import bgSection from '../assets/img/bgImageSection.png';
import annualImage from '../assets/img/annual.png';
import Footer from '../common/footer';
import featureImage1 from '../assets/img/f1.png';
import featureImage2 from '../assets/img/f2.png';
import featureImage3 from '../assets/img/f3.png';
import MobileMenu from '../mobileMenu';
const Home = (props) =>{
    return(
        <div>
            <section id="header">
                <NavBar/>
            </section>
            <div>
                <MobileMenu/>
            </div>
            <section id="bannerSection">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3 className="bannerTitle">Peaceful nights. Peace of mind.</h3>
                            <p className="bannnerPara">More sleeping. Less crying. Better living.</p>
                        </div>
                    </div>
                    <div className="bannerButtonDiv">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="buttonDiv">
                                    <button className="usingWinkButton">Start using Babywink</button>
                                    <button className="expectingBaby">Expecting a baby?</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </section>
            <div id="mainWapper">
            <div className="desktopView">
                <FeatureDiv/>
            </div>
            <div className="mobileFeatureView">
                <MobileFeatureDiv/>
            </div>
            <section id="babySleepingDiv">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h4 className="sleepingTitle">1 week and 3 steps to get your baby sleeping quicker and deeper</h4>
                        </div>
                    </div>
                </div>
            </section>
            <section id="timmerSection">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="sleepLog">
                                <img className="img-responsive" src={sleepLog}/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="sleepLogContent">
                                <h4 className="title">Sleep Log</h4>
                                <p className="para">Track your baby's sleep data for 3 days, so we can analyze it together.</p>
                                <button className="getButton">Get it for free</button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="vectorBg">
                                <div className="sleepLogContent sleepAnalyize">
                                    <h4 className="title">Sleep Analyze</h4>
                                    <p className="para">Get an overview of your baby’s unique sleep cycle, and insights into how to improve it.</p>
                                    <button className="getButton">Get it for free</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <img className="img-responsive" src={sleepAnalyze}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <img className="img-responsive" src={sleepTrainings}/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="sleepLogContent nopaddingLeft">
                                <h4 className="title">Sleep Trainings</h4>
                                <p className="para">Build a training program based on your baby’s development, your own goals, and our methods.</p>
                                <button className="getButton">Get it for free</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="contentSection">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <p className="contentPara">
                            No one knows your baby better than you, or can take better decisions. But when you’re tired and overwhelmed, you’ll need a bit of help to maintain a neat schedule and healthy sleep for the baby and the whole family.
                            </p>
                            <button className="contentButton">Learn more</button>
                        </div>
                    </div>
                </div>
            </section>
            <section id="testimonialSliderDiv">
                <h4 className="title">What the parents says about Babywink</h4>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="sliderDiv">
                            <div class="your-class">
                                <div>
                                    <img className="img-responsive" src={featureImage1}/>
                                    <p className="testimonialPara">“ My wife was skeptical* the first time I told her about this. My then, 8-months old daughter had a terrible sleeping pattern, routinely waking up in the middle of the night. Within 4 days of using this training, she was sleeping better.”</p>
                                    <h4 className="authorName">Habib Blahhh</h4>
                                    <p className="authorDesignation">Chfisonsoen</p>
                                </div>
                                <div>
                                    <img className="img-responsive" src={featureImage2}/>
                                    <p className="testimonialPara">“ My wife was skeptical* the first time I told her about this. My then, 8-months old daughter had a terrible sleeping pattern, routinely waking up in the middle of the night. Within 4 days of using this training, she was sleeping better.”</p>
                                    <h4 className="authorName">Habib Blahhh</h4>
                                    <p className="authorDesignation">Chfisonsoen</p>
                                </div>
                                <div>
                                    <img className="img-responsive" src={featureImage3}/>
                                    <p className="testimonialPara">“ My wife was skeptical* the first time I told her about this. My then, 8-months old daughter had a terrible sleeping pattern, routinely waking up in the middle of the night. Within 4 days of using this training, she was sleeping better.”</p>
                                    <h4 className="authorName">Habib Blahhh</h4>
                                    <p className="authorDesignation">Chfisonsoen</p>
                                </div>
                                <div>
                                    <img className="img-responsive" src={featureImage1}/>
                                    <p className="testimonialPara">“ My wife was skeptical* the first time I told her about this. My then, 8-months old daughter had a terrible sleeping pattern, routinely waking up in the middle of the night. Within 4 days of using this training, she was sleeping better.”</p>
                                    <h4 className="authorName">Habib Blahhh</h4>
                                    <p className="authorDesignation">Chfisonsoen</p>
                                </div>
                                <div>
                                    <img className="img-responsive" src={featureImage2}/>
                                    <p className="testimonialPara">“ My wife was skeptical* the first time I told her about this. My then, 8-months old daughter had a terrible sleeping pattern, routinely waking up in the middle of the night. Within 4 days of using this training, she was sleeping better.”</p>
                                    <h4 className="authorName">Habib Blahhh</h4>
                                    <p className="authorDesignation">Chfisonsoen</p>
                                </div>
                                <div>
                                    <img className="img-responsive" src={featureImage3}/>
                                    <p className="testimonialPara">“ My wife was skeptical* the first time I told her about this. My then, 8-months old daughter had a terrible sleeping pattern, routinely waking up in the middle of the night. Within 4 days of using this training, she was sleeping better.”</p>
                                    <h4 className="authorName">Habib Blahhh</h4>
                                    <p className="authorDesignation">Chfisonsoen</p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>          
            <section id="babyWinkPro">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h4 className="title">Try Babywink Pro for free</h4>
                        </div>
                    </div>
                    <div className="babyWinkContent">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <ul className="babyWinkList">
                                    <li>Unlock the full Babywink experience</li>
                                    <li>Customized sleep sugesstions</li>
                                    <li>Sleep trainings and improve bedtime</li>
                                    <li>Exclusive 7-day baby sleep program</li>
                                </ul>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="annualDiv">
                                    <p className="annualPricePara">35.99 $ Annual (2,99 $/month)</p>
                                    <p className="freeText">First 3 days free</p>
                                </div>
                                <div className="monthDiv">
                                    <p className="monthPricePara">35.99 $ Annual (2,99 $/month)</p>
                                    <p className="freeText">First 3 days free</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <button className="subcribeButton">Subscribe and try for free</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="mobileView">
                <FeatureDiv/>
            </div>
            <section id="bgImageSection">
                <img className="img-responsive" src={bgSection}/>
            </section>
            <section id="footerSection">
                <Footer/>
            </section>
        </div>
        </div>
    )
}

export default Home;