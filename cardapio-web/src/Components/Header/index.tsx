import { FormEvent, useState } from 'react'
import { MagnifyingGlass, XCircle } from 'phosphor-react'

import './styles.css'; 
 

export function Header() { 
  const [search, setSearch] = useState<string>('');
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
 
  
  function handleOpenSearch() {
    setSearchOpen(!searchOpen) 
  }

  function handleKeyboard(event: FormEvent) {
    event.preventDefault() 
  
    console.log(search)
    setSearch('')
  }

	 return ( 
		<div className="header-container">
			<div className="header-title">X Burguer</div>

    <form action="" className="header-form" onSubmit={handleKeyboard}>
      <input 
        type="text" 
        className="header-input" 
        placeholder="Pesquisar produto"
        value={search}
        onChange={ event => setSearch(event.target.value) }
        style={ searchOpen === true ? {display: "flex"} : {display: "none"} }
      />

    </form>

    <button onClick={handleOpenSearch} className="header-searchButton">
      {searchOpen === true 
        ? <XCircle  size={26} color={"red"} /> 
        : <MagnifyingGlass  size={26} />
      }
    </button>

		</div> 
	 ); 

}
