import { useState, useEffect } from 'react'; 

import './styles.css'; 
 

type footerModalType =  {
  preco: string,
  section: string,
  title: string,
}

export function FooterModalOption({ preco, section, title }: footerModalType) { 
  const [description1, setDescription1] = useState<string>("Simples");
  const [description2, setDescription2] = useState<string>("Combo");
  

  function setDescriptionValues() {
    if (title === "Sucos") {
      setDescription1("Copo")
      setDescription2("Jarra")
    } 
    else if (title === "Refrigerantes") {
      setDescription1("Lata")
      setDescription2("600ml")
    } 
    else if (title === "Água") {
      setDescription1("Copo")
      setDescription2("Garrafa")
    } 
  }

  useEffect(() => {
    setDescriptionValues()
  }, []);
  


	 return ( 
      <>
        <li className="modal-card-footer-option">
          <p style={{fontSize: "12px", fontWeight: "600"}}>
            {
              section === "sobremesas" ? "Unidade" : description1 }
          </p>
          R$ {preco}
        </li>

        { 
          section != "sobremesas" ?
            <li className="modal-card-footer-option">
              <p style={{fontSize: "12px", fontWeight: "600"}}>
                {description2} 
              </p>
              {
                title === "Água" ?
                  `R$ ${ parseFloat(preco) * 1.5 },00`
                :
                  `R$ ${ parseFloat(preco) * 2 },00`
              }
            </li>
          :
            null
        }

        { 
          section != "sobremesas" && section != "bebidas" ?
            <li className="modal-card-footer-option">
              <p style={{fontSize: "12px", fontWeight: "600"}}>
                Adicionais
              </p>
              R$ 2,00
            </li>
          :
            null
        }
      </>
	 ); 

}
