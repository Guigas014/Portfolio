import { MagnifyingGlass } from 'phosphor-react'

import './styles.css'; 
 

export function Header() { 

	 return ( 
		<div className="header-container" id="TOP">
			<div className="header-title">X Burguer</div>

    <form action="" className="header-form">
      <input 
        type="text" 
        className="header-input" 
        placeholder="Pesquisar produto"
      />
      <button type="submit" className="header-searchButton">
			  <MagnifyingGlass  size={26} />
      </button>
    </form>

		</div> 
	 ); 

}
