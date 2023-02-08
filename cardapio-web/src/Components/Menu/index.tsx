import { useState, useEffect } from 'react';
import { ItemModal } from '../ItemModal';

import './styles.css'; 


interface pratoDados {
  id: string;
  title: string,
  description: string,
  preco: string,
  section: string,
  imageURL: string,
} 


export function Menu() { 
  const [toggleModal, setToggleModal] = useState(false);
  const [pratos, setPratos] = useState<pratoDados[]>([]);
  const [idModal, setIdModal] = useState<string>("");
  
  
  async function getDataFromJSON() {
    const response = await fetch('./pratos.json', {
      headers: {
        Accept: "application/json",
      }
    }).then(res => res.json())

    setPratos(response.data)
  }

  function handleOpenModal(selectedId: string) {
    if (toggleModal === false) {
      setIdModal(selectedId) 
      setToggleModal(true)    
    } 
    else {
      setToggleModal(false)    
    }
  }


  useEffect(() => {
    getDataFromJSON() 
  }, []);
  


	 return ( 
    <>
    {
      toggleModal === true && 
        <ItemModal id={idModal} dados={pratos} closeModal={handleOpenModal} />
    }

		<div 
      className="menu-container" 
      //style={toggleModal === true ? {position: "fixed"} : {position: "unset"}}
    >
			
			<div 
        id="HAMBURGUER-CARNE"
        className="menu-title"
      >
        Hamburguers carne
      </div>
			<div className="menu-section">

        {
          pratos.map(item => {
            return (
              item.section === "hamburguer-carne" ?
				        <div 
                  key={item.id} 
                  className="menu-card"
                  onClick={event => handleOpenModal(item.id)}
                >
				          <img 
                    src={item.imageURL} 
                    alt="Hamburguer" 
                    className="card-image"
                  />
                  <div className="card-title">{item.title}</div>
                  <div className="card-description">
                    {item.description}
                  </div>
                  <div className="card-footer">R$ {item.preco}</div>
				        </div>
              : null
            ) 
          })
        }

			</div>

			
      <div 
        id="HAMBURGUER-FRANGO"
        className="menu-title"
      >
        Hamburguers frango
      </div>
      <div className="menu-section">

				<div className="menu-card">
					TESTE
				</div>

				<div className="menu-card">
					TESTE
				</div>

				<div className="menu-card">
					TESTE
				</div>

				<div className="menu-card">
					TESTE
				</div>

				<div className="menu-card">
					TESTE
				</div>

				<div className="menu-card">
					TESTE
				</div>

				<div className="menu-card">
					TESTE
				</div>

			</div>

		</div>
   </>
	 ); 

}
