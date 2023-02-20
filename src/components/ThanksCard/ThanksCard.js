import React from "react";
import "./ThanksCard.scss";
import "../../components/mediaQueries.scss";
import { Typewriter } from "react-simple-typewriter";

export const ThanksCard = () => {
  return (
    <div className='thanks-container'>
      <Typewriter
        className="type-write"
        words={["Hope to see you again", "Thank you for visiting Jevelin!"]}
        loop={1000}
        cursor
        typeSpeed={90}
        deleteSpeed={50}
        delaySpeed={1000}
        
      />

      {/* <button className='demo-button'>MORE DEMOS</button> */}
    </div>
  );
};
