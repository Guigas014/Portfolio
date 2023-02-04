import { useState, useEffect, WheelEvent } from 'react'
import { CaretDoubleUp } from 'phosphor-react'

import './styles.css';  



export function TopButton() { 
  const [screenMove, setScreenMove] = useState(0)


  document.addEventListener("scroll", () => {
    setScreenMove(document.scrollingElement!.scrollTop)
  });


  //useEffect(() => {
    //setScreenMove(document.scrollingElement!.scrollTop)
  //}, []);
    


  return ( 
        <a 
          href="#TOP"
          className="top-button"
          style={screenMove > 60 ? {display: "flex"} : {display: "none"}}
        >
          <CaretDoubleUp size={32} /> 
        </a>
  ); 

}
