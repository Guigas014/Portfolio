import React from 'react'; 
import { X } from 'phosphor-react';

import './styles.css'; 
 

type ItemModalProps = {
  closeModal: () => void; 
}

export function ItemModal({ closeModal }: ItemModalProps) { 

  return ( 
    <div className="modal-container">
      <div className="modal-card">
        X-Eggs
        <button onClick={closeModal} className="modal-close-button">
          <X size={20} color="red" weight="bold" />
        </button>
      </div>
    </div>
  
	); 

}
