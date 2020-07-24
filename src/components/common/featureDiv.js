import React from 'react';
import featureImage1 from '../assets/img/f1.png';
import featureImage2 from '../assets/img/f2.png';
import featureImage3 from '../assets/img/f3.png';


const featuresDiv = () =>{
    return(
    <section id="featureDiv">
    <div className="container">
        <div className="row">
            <div className="col-lg-4 col-md-4">
                <img className="img-responsive" src={featureImage1}/>
                <h4 className="imageTitle">Free for the unemployed</h4>
                <p className="imagePara">If you're currently unemployed, get a free year of Babywink Pro</p>
                <div className="text-center">
                <a href="https://apps.apple.com/us/app/baby-wink/id1239819394" target="_blank"><button className="imageButton">Learn more</button></a>
                </div>
            </div>
            <div className="col-lg-4 col-md-4">
                <img className="img-responsive" src={featureImage2}/>
                <h4 className="imageTitle">Take a moment to sleep</h4>
                <p className="imagePara">Find the scientifically-proven sleep training program for your baby</p>
                <div className="text-center">
                <a href="https://apps.apple.com/us/app/baby-wink/id1239819394" target="_blank"><button className="imageButton">Learn more</button></a>
                </div>
            </div>
            <div className="col-lg-4 col-md-4">
                <img className="img-responsive" src={featureImage3}/>
                <h4 className="imageTitle">Personalised sleep coaching</h4>
                <p className="imagePara">Track and analyze your baby’s unique sleep patterns, and provide personal guidance on how to help them sleep better.</p>
                <div className="text-center">
                <a href="https://apps.apple.com/us/app/baby-wink/id1239819394" target="_blank"><button className="imageButton marginTop42">Learn more</button></a>
                </div>
            </div>
        </div>
    </div>
</section>
    )
}
export default featuresDiv;