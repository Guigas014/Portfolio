import React from 'react'; 
import { X } from 'phosphor-react';

import './styles.css'; 
 

interface pratoDados {
  id: string;
  title: string,
  description: string,
  preco: string,
  section: string,
  imageURL: string,
} 

type ItemModalProps = {
  id: string;
  dados: pratoDados[];
  closeModal: (id: string) => void; 
}


export function ItemModal({ closeModal, id, dados }: ItemModalProps) { 

  return ( 
    <div className="modal-container">
    {
      dados.map(item => 
        item.id === id ?

        <div key={item.id} className="modal-container">
          <button onClick={() => closeModal(item.id)} className="modal-close-button">
            <X size={20} color="white" weight="bold" />
          </button>

          <div className="modal-card">
		        <img 
              src={item.imageURL} 
              alt="Hamburguer" 
              className="modal-card-image"
            />
            <div className="modal-card-title">{item.title}</div>
            <div className="modal-card-description">
              {item.description}
            </div>
            <ul className="modal-card-footer">
              <li className="modal-card-footer-option">
                <p style={{fontSize: "12px", fontWeight: "600"}}>Simples</p>
                R$ {item.preco}
              </li>
              <li className="modal-card-footer-option">
                <p style={{fontSize: "12px", fontWeight: "600"}}>Combo</p>
                R$ { parseFloat(item.preco) * 2 },00
              </li>
              <li className="modal-card-footer-option">
                <p style={{fontSize: "12px", fontWeight: "600"}}>Adiconais</p>
                R$ 2,00
              </li>
            </ul>
          </div>
        </div>

        : null 

      ) 
    }

    </div>
  
	); 

}
