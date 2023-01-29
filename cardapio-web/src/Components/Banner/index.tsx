import dayjs from 'dayjs';
import { WhatsappLogo, FacebookLogo, InstagramLogo, Phone } from 'phosphor-react'

import './styles.css'; 
 

export function Banner() { 

	const hour = dayjs(new Date()).hour();
  

	 return ( 
	 	<div className="banner-container">
			<img 
        		src="https://cdn.pixabay.com/photo/2013/07/12/16/53/burger-151421_960_720.png" 
        		alt="X Burguer"
        		className="banner-logo"
      		/>

      		<div 
      			className="banner-status"
      			style={ hour >= 18 && hour <= 23 ? {color: "darkgreen"} : {color: "red"} }
      		>
      			{ hour >= 18 && hour <= 23 ? "Aberto" : "Fechado" }
      		</div>
      		
      		<span>QS 7 rua 620 casa 9</span>

			    <div className="banner-phone">
				    <Phone size={25} />(61) 3333 3333
			    </div>

      		<div className="banner-links">	
      			<a href="">
      				<WhatsappLogo size={25} style={{ color: "green" }} />
      			</a>
      			<a href="">
      				<InstagramLogo size={25} style={{ color: "red" }} />
      			</a>
      			<a href="">
      				<FacebookLogo size={25} style={{ color: "blue" }} />
      			</a>
      			
      		</div>

      
      	</div>

	 ); 

}
