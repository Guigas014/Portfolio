import { KeyboardEvent, useState } from 'react'
import { MagnifyingGlass, XCircle } from 'phosphor-react'

import './styles.css'; 
 

export function Header() { 
  const [search, setSearch] = useState<string>('');
  
  //console.log(search) 


  function handleKeyboard(event: KeyboardEvent) {
    if (event.key === "Enter") {
      console.log(`O texto digitado é: ${search}`)
      setSearch('')
    }

    //console.log(event.key)
  }

	 return ( 
		<div className="header-container" id="TOP">
			<div className="header-title">X Burguer</div>

    <form action="" className="header-form" onKeyPress={handleKeyboard}>
      <input 
        type="text" 
        className="header-input" 
        placeholder="Pesquisar produto"
        onChange={event => setSearch(event.target.value)}
        value={search}
      />
      <button className="header-searchButton">
				<MagnifyingGlass  size={26} />
      </button>
    </form>

		</div> 
	 ); 

}
