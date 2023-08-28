import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";


function Cards(){
    return (
   <div className="cards">
       <h1>Check out our NEW Candle collection!</h1>
       <div className="cards__container">
         <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
            src="../images/img-1.jpg"
            text="Immersive experience with our new Candle scents!"
            lable="CandleAroma"
            path="/services"
            />
          </ul>
         </div>
       </div>
    </div>
    )
}
export default Cards;
