import { KeyboardEvent, useState } from 'react'
import { MagnifyingGlass, XCircle } from 'phosphor-react'

import './styles.css'; 
 

export function Header() { 
  const [search, setSearch] = useState<string>('');
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
 
  
  function handleOpenSearch() {
    setSearchOpen(!searchOpen) 
  }

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
        value={search}
        onChange={ event => setSearch(event.target.value) }
        style={ searchOpen === true ? {display: "flex"} : {display: "none"} }
      />
      <button onClick={handleOpenSearch} className="header-searchButton">
        {searchOpen === true 
          ? <XCircle  size={26} /> 
          : <MagnifyingGlass  size={26} />
        }
				
      </button>
    </form>

		</div> 
	 ); 

}
