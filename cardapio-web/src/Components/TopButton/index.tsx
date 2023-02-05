import { useState, useEffect, WheelEvent } from 'react'
import { CaretDoubleUp } from 'phosphor-react'

import './styles.css';  



export function TopButton() { 
  const [screenMove, setScreenMove] = useState(0)


  document.addEventListener("scroll", () => {
    setScreenMove(document.scrollingElement!.scrollTop)
  });

  function handleTop() {
    document.scrollingElement!.scroll(0, 0);
  }
    


  return ( 
        <button 
          className="top-button"
          style={screenMove > 60 ? {display: "flex"} : {display: "none"}}
          onClick={handleTop}
        >
          <CaretDoubleUp size={32} /> 
        </button>
  ); 

}
