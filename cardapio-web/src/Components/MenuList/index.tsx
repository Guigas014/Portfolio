import { MouseEvent } from 'react'; 

import './styles.css'; 
 


export function MenuList() { 

  //document.addEventListener("scroll", () => {
    //document.scrollingElement!.scroll()
  //});

  //Pega o movimento de scroll, usando o cursor.
  function handleScrollList(event: MouseEvent) {

    event.currentTarget.scroll(event.pageX, 0)
    //console.log(event.pageX)
  }


	 return ( 
    <nav onMouseOver={handleScrollList} className="menu-list-container">
			<a href="#HAMBURGUER-CARNE" className="menu-list-item">
				Hamburguers de carne
			</a>

			<a href="#HAMBURGUER-FRANGO"className="menu-list-item">
				Hamburguers de frango
			</a>

			<a href="" className="menu-list-item">
				Hamburguers artesanais 
			</a>

			<a href="" className="menu-list-item">
				Hot Dog
			</a>

			<a href="" className="menu-list-item">
				Sanduiches Naturais
			</a>

			<a href="" className="menu-list-item">
				Crepes
			</a>

			<a href="" className="menu-list-item">
				Bebidas
			</a>

			<a href="" className="menu-list-item">
				Sobremesas
			</a>

			<a href="" className="menu-list-item">
				Sugestões
			</a>
		</nav>

	 ); 

}
