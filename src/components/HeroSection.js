import React from "react";
import {Button} from "./Button";
import "./HeroSection.css";
import "../App.css";


function HeroSection(){
    return (
        <div className="hero-container">
         <video src="../videos/Download.mp4" autoPlay loop muted/>
         <h1>Relax and Enjoy</h1>
         <p>Candles to boost up your mood</p>
         <div className="hero-btns">
          <Button
            className="btns" 
            buttonStyle="btn--outline"
            buttonSize="btn--large">
                ORDER NOW
            </Button>
            <Button
            className="btns" 
            buttonStyle="btn--primary"
            buttonSize="btn--large">
                HOW OUR CANDLES ARE MADE <i className="far
                fa-play-circle"/>
            </Button>
         </div>
        </div>
    );
}

export default HeroSection;