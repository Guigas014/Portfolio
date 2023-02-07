import React from 'react'; 
import { X } from 'phosphor-react';

import './styles.css'; 
 

type ItemModalProps = {
  //id: string;
  //toggleStatus: boolean;
  closeModal: () => void; 
}

export function ItemModal({ closeModal }: ItemModalProps) { 

  return ( 
    <div className="modal-container">
      <button onClick={closeModal} className="modal-close-button">
        <X size={20} color="white" weight="bold" />
      </button>

      <div className="modal-card">

		    <img 
            src="https://images.unsplash.com/photo-1609167921178-e295a98f808f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" 
            alt="Hamburguer" 
            className="modal-card-image"
        />
        <div className="modal-card-title">X-Eggs</div>
        <div className="modal-card-description">
          Pão, hamburguer de carne, ovo, molho e salada. <br/><br/>
          Opcionais: <br/>
          Não sei!!
        </div>
        <ul className="modal-card-footer">
          <li className="modal-card-footer-option">
            <p style={{fontSize: "12px", fontWeight: "600"}}>Simples</p>
            R$ 16,00
          </li>
          <li className="modal-card-footer-option">
            <p style={{fontSize: "12px", fontWeight: "600"}}>Combo</p>
            R$ 33,00
          </li>
          <li className="modal-card-footer-option">
            <p style={{fontSize: "12px", fontWeight: "600"}}>Adiconais</p>
            R$ 2,00
          </li>
        </ul>
      </div>

    </div>
  
	); 

}
