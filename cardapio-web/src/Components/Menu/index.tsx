import { useState } from 'react';
import { ItemModal } from '../ItemModal';

import './styles.css'; 


export function Menu() { 
  const [toggleModal, setToggleModal] = useState(false);


  function handleOpenModal() {
    if (toggleModal === false) {
      setToggleModal(true);    
    } 
    else {
      setToggleModal(false);    
    }

    console.log("Modal")
  }


	 return ( 
    <>
    {
      toggleModal === true ?
        <ItemModal closeModal={handleOpenModal} />
     :
       null  
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

				<div onClick={handleOpenModal} className="menu-card">
				  <img 
            src="https://images.unsplash.com/photo-1609167921178-e295a98f808f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" 
            alt="Hamburguer" 
            className="card-image"
          />
          <div className="card-title">X-Eggs</div>
          <div className="card-description">
            Pão, hamburguer de carne, ovo, molho e salada.
          </div>
          <div className="card-footer">R$ 16,00</div>
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
