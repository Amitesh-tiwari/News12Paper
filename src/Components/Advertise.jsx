import React from "react";
import "../styles.css";
import sampleimg from "../assets/sampleimg.jpg"

function Advertise() {
    return (
        <div>
        
            <p>- Advertisement -</p>
            
            <div className="image-container">
                <img src={sampleimg} className="background-img" alt="image" />
                <div className="overlay">
                    <p className="headline">Best selling and magazine theme all the time</p>
                    <p className="subheadline">Experience the change!</p>
                    <div className="buynow-btn-container">
                        <button className="buy-now-button">Buy Now</button>
                    </div>
                    
                </div>
            </div>  

        </div>
    );
};

export default Advertise;