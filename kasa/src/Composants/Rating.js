import React from "react";
import Star from "./../images/Star.png";
import EmptyStar from "./../images/Empty-star.png";


export default function Rating(rate) {
   const range = [1, 2, 3, 4, 5];

   return range.map((rangeElem, star) =>
      rangeElem <= rate.rate ? (
         <img src={Star} alt="étoile pleine" key={star}  className="stars"/>
      ) : (
         <img
            src={EmptyStar}
            alt="étoile vide"
            key={star}
            className="empty__star"
         />
      )
   );
}