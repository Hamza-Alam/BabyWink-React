import React from 'react';
import featureImage1 from '../assets/img/f1.png';
import featureImage2 from '../assets/img/f2.png';
import featureImage3 from '../assets/img/f3.png';
import sleepLogImage from '../assets/img/sleepBg.png';


const mobileFeaturesDiv = () =>{
    return(
    <section id="featureDiv">
    <div className="sleepLogBg">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h4 className="imageTitle">Sleep Log</h4>
                    <p className="imagePara">Track your baby's sleep data for 3 days, so we can analyze it together.</p>
                    <button className="imageButton">Learn more</button>
                </div>
            </div>
        </div>
    </div>
    <div className="analyzeLogBg">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h4 className="imageTitle">Sleep Analyze</h4>
                    <p className="imagePara">Get an overview of your baby’s unique sleep cycle, and insights into how to improve it.</p>
                    <button className="imageButton">Learn more</button>
                </div>
            </div>
        </div>
    </div>
    <div className="sleepLogTraining">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h4 className="imageTitle">Sleep Log</h4>
                    <p className="imagePara">Track your baby's sleep data for 3 days, so we can analyze it together.</p>
                    <button className="imageButton">Learn more</button>
                </div>
            </div>
        </div>
    </div>
</section>
    )
}
export default mobileFeaturesDiv;