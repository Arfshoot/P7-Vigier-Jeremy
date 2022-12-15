import React, { useState } from "react";
import ArrowTop from "./../../images/Arrow-Top.png";
import ArrowBot from "./../../images/Arrow-Bot.png";

export default function Liste({ txt, title, txtArray }) {
   /* par défault fermé */
   const [isOpen, setIsOpen] = useState(false);
         /*   quand le clic fait que le bandeau est fermé 'fleche en haut' alors cela n'affiche que le titre et "derriere" se trouve le cadre de texte  */
   return isOpen ? (
      <div>

         <button
            className="dropdown__button"
            type="button"
            onClick={() => setIsOpen(false)}
         >
            <span>{title}</span>
            <img src={ArrowTop} alt="flèche vers le haut" />
         </button>
         {txtArray ? (
            <div className="dropdown__p__array">
               {txtArray.map((txte, e) => (
                  <p className="dropdown__p-array" key={e}>
                     {txte}
                  </p>
               ))}
            </div>
         ) : (
            <p className="dropdown__p">{txt}</p>
         )}
      </div>
   ) : (
      /* quand le clic déroule le bandeau alors cela fait apparaitre le cadre du text et modifie le sens de la fleche*/
      <button
         className="dropdown__button"
         type="button"
         onClick={() => setIsOpen(true)}
      >
         <span>{title}</span>
         <img src={ArrowBot} alt="flèche vers le bas" />
      </button>
   );
}
