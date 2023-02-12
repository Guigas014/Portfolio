import prismaClient from '../database/client'
import { apiCartola } from '../apiCartola'



interface Posicao {
  id: number;
  nome: string;
  abreviacao: string;
}

interface Status {
  id: number;
  nome: string;
}

interface Clube {
  id: number;
  nome: string;
  abreviacao: string;
}


export class InitDatabaseService {

  async execute() {  
    //const { data } = await axios('https://api.cartolafc.globo.com/atletas/mercado')
    const { data } = await apiCartola

    //Salva os dados de clube, status e posicoes
    const clubes = data.clubes
    const status = data.status
    const posicoes = data.posicoes


    //Transforma o objeto em array
    const posicoesList = Object.values<Posicao>(posicoes) 
    const statusList = Object.values<Status>(status)
    const clubesList = Object.values<Clube>(clubes)


    //BD  => status, posicoes e clube só serão carregados uma vez.
    //Testa se a tabela posicoes está vazia.
    const testTablePosicaoNull = await prismaClient.posicoes.count()
    const testTableStatusNull = await prismaClient.status.count()
    const testTableClubeNull = await prismaClient.clubes.count()
     

    let erroDB = ""

    if (testTablePosicaoNull === 0) {
      for (let item of posicoesList) {
        await prismaClient.posicoes.create({
          data: {
            id: item.id,
            nome: item.nome,
            abreviacao: item.abreviacao,
          },
        })
      }
    } else {
      const erroPosicoes = "Os dados da tabela posições já existem!"
      erroDB.concat(erroPosicoes)
    }
    if (testTableClubeNull === 0) {
      for (let item of clubesList) {
        await prismaClient.clubes.create({
          data: {
            id: item.id,
            nome: item.nome,
            abreviacao: item.abreviacao,
          },
        })
      }
    }
    else {
      const erroClubes = "Os dados da tabela clubes já existem!"
      erroDB.concat(erroDB)
    }
    if (testTableStatusNull === 0) {
      for (let item of statusList) {
        await prismaClient.status.create({
          data: {
            id: item.id,
            nome: item.nome,
          },
        })
      }
    }
    //else { 
      //return erroDB -> não vai para o frontend
      //return {"erro": erroDB}
   //}
    
    //return {"message": "Dados inseridos com sucesso!"}
    //console.log(data)
    return data
  }
}

