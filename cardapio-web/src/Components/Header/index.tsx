import React from 'react'; 
import { MagnifyingGlass } from 'phosphor-react'

import './styles.css'; 
 

export function Header() { 

	 return ( 
		<div className="header-container">
			<div className="header-title">X Burguer</div>

			<MagnifyingGlass  size={28}  className="header-searchButton" />
		</div> 
	 ); 

}
