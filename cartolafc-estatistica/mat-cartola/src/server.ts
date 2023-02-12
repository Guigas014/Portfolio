import express from 'express' 
import cors from 'cors'

import { router } from './routes'


const app = express() 

app.use(cors())

app.use(express.json())
app.use(router)




/*async function getPosicoes() {
  try {    
    const { data } = await axios('https://api.cartolafc.globo.com/atletas/mercado')
    console.log(data.posicoes)


  } catch (error) {
    console.log(error)
  }
} 

getPosicoes()*/



app.listen(4000, () => console.log('Server is running'))

