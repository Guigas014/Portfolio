  import uri from './api.js'


  const atletasList = document.getElementsByClassName('table-body')
  const buttonClearFilter = document.getElementById('clear-filter')  
  const buttonRate = document.getElementsByClassName('rate-button')  
  const spanError = document.getElementsByClassName('erro-table-null')[0]

  //Pega o span que testa a classificação
  const testValue = document.getElementsByClassName('rate-test-value')


  async function getContent() {
    try {
      const clubesList = document.getElementsByClassName('lista-clubes')
      const posicoesList = document.getElementsByClassName('lista-posicoes')
      const posicoesStatus = document.getElementsByClassName('lista-status')
      

      const api = await fetch(uri)
      const data = await api.json()

      buttonClearFilter.onclick = () => {
        const playerFiltered = document.getElementsByClassName('player')
        const playerFilteredArray = [ ...playerFiltered ]
        playerFilteredArray.map((item) => item.remove())

        const buttonRateArray = [ ...buttonRate ]
        buttonRateArray.map((item) => item.innerHTML = "&#9672;")
        const testValueArray = [ ...testValue ]
        testValueArray.map((item) => item.innerText = "&nbsp;")

        spanError.style.display = 'none'

        renderPlayers(data, data.atletas)
      }

      //Classifica a tabela conforme o botão clicado
      buttonRate[0].onclick = () => rateTable(data, 0)
      buttonRate[1].onclick = () => rateTable(data, 1)
      buttonRate[2].onclick = () => rateTable(data, 2)
      buttonRate[3].onclick = () => rateTable(data, 3)


      renderList(data.clubes, clubesList)
      renderList(data.posicoes, posicoesList)
      renderList(data.status, posicoesStatus)

      renderPlayers(data, data.atletas)


      return  data
    } catch (e) {
      console.log(e)
    } 
  }


  function renderList(dataList, list) {

    const clubesArray = Object.values(dataList)

    clubesArray.map((item) => {

      let link = document.createElement('a')
      link.setAttribute('class', 'select')
      link.addEventListener('click', filterTable)
      link.appendChild(document.createTextNode(item.nome))

      let itemList = document.createElement('li')
      itemList.appendChild(link)

      list[0].appendChild(itemList)
    })

  }


  function renderPlayers(response, atletas) {
    
    //console.log(response.clubes[response.atletas[0].clube_id].nome)
    //console.log(response.status[response.atletas[0].status_id].nome)
    //console.log(response.posicoes[response.atletas[0].posicao_id].nome)

    const atletasArray = atletas

    atletasArray.map((item) => {
      
      let colNome = document.createElement('td')
      colNome.appendChild(document.createTextNode(item.apelido))

      let colClube = document.createElement('td')
      colClube.appendChild(document.createTextNode(response.clubes[item.clube_id].nome))

      let colPosicao = document.createElement('td')
      colPosicao.appendChild(document.createTextNode(response.posicoes[item.posicao_id].nome))

      let colPreco = document.createElement('td')
      colPreco.appendChild(document.createTextNode(item.preco_num))
      
      let colPontos = document.createElement('td')
      colPontos.appendChild(document.createTextNode(item.pontos_num))
      
      let colMedia = document.createElement('td')
      colMedia.appendChild(document.createTextNode(item.media_num))
      
      let colStatus = document.createElement('td')
      colStatus.appendChild(document.createTextNode(response.status[item.status_id].nome))


      let lineTable = document.createElement('tr')
      lineTable.setAttribute('class', 'player')  
      lineTable.appendChild(colNome)
      lineTable.appendChild(colClube)
      lineTable.appendChild(colPosicao)
      lineTable.appendChild(colPreco)
      lineTable.appendChild(colPontos)
      lineTable.appendChild(colMedia)
      lineTable.appendChild(colStatus)

      atletasList[0].appendChild(lineTable)
    
    })
  }


  //Filtra a tabela de acordo com a opção dos dropdowns.
  function filterTable() {
    const testName = event.target.innerHTML

    const tagClube = document.getElementsByClassName('lista-clubes')[0].parentElement.innerText
    const tagPosicao = document.getElementsByClassName('lista-posicoes')[0].parentElement.innerText
    const tagStatus = document.getElementsByClassName('lista-status')[0].parentElement.innerText

    const player = document.getElementsByClassName('player')
    const playerArray = [ ...player ]
    

    if (tagStatus !== 'Status') {
      let arrayTeste = playerArray.filter((item) => item.childNodes[7].innerHTML !== testName)
      arrayTeste.map((item) => item.setAttribute('class', 'shadow'))
    }
    else if (tagPosicao === 'Posição') {
      let arrayTeste = playerArray.filter((item) => item.childNodes[1].innerHTML !== testName)
      arrayTeste.map((item) => item.setAttribute('class', 'shadow'))
    }
    else if (tagClube === 'Clubes') {
      let arrayTeste = playerArray.filter((item) => item.childNodes[2].innerHTML !== testName)
      arrayTeste.map((item) => item.setAttribute('class', 'shadow'))
    }


    const testTable = playerArray.map((item) => item.className)
    //console.log(testTable)

    if (testTable.every((item) => item === 'shadow')) {
      spanError.style.display = 'block'
    }


    //playerArray.map((item) => {
      //if (item.childNodes[1].innerHTML !== clubName) {
       //item.setAttribute('class', 'shadow')      
      //}
    //})
    
  }

 
  //Lista a coluna da Média
  function rateTable(data, key) {

    //Pega o eleemento table e cria o elemento tbody
    const table = document.getElementsByClassName('tabela')
    //<tbody class="table-body">
    let tableBody = document.createElement('tbody')
    tableBody.setAttribute('class', 'table-body')


    //const playerFiltered = document.getElementsByClassName('player')
    //const playerFilteredArray = [ ...playerFiltered ]
    //console.log(playerFilteredArray[0])
    

    //Limpa a tabela
    const atletasArray = [ ...atletasList ]
    atletasArray.map((item) => item.remove())


    //Classifica os atletas
    const dataArray = [ ...data.atletas ]
    let dataListOrdered = null

    switch (key) {
      case 0:
        dataListOrdered = dataArray.sort((a, b) => {
          if (a.preco_num > b.preco_num) { return 1 }
          if (a.preco_num < b.preco_num) {return -1 }
          return 0
        })
        break;
      case 1: {
        dataListOrdered = dataArray.sort((a, b) => {
          if (a.pontos_num > b.pontos_num) { return 1 }
          if (a.pontos_num < b.pontos_num) {return -1 }
          return 0
        })
        break;
      }
      case 2: {
        dataListOrdered = dataArray.sort((a, b) => {
          if (a.media_num > b.media_num) { return 1 }
          if (a.media_num < b.media_num) {return -1 }
          return 0
        })
        break;
      }
      case 3: {
        dataListOrdered = dataArray.sort((a, b) => {
          if (a.minimo_para_valorizar > b.minimo_para_valorizar) { return 1 }
          if (a.minimo_para_valorizar < b.minimo_para_valorizar) {return -1 }
          return 0
        })
        break;
      }
      default:
        
    }

    //let mediaListOrdered = mediaArray.sort((a, b) => {
      //if (a.media_num > b.media_num) { return 1 }
      //if (a.media_num < b.media_num) {return -1 }
      //return 0
    //})


    //Descobri se a classificação será crescente, decrescente ou normal.
    if (testValue[key].innerText === "menor") {
      buttonRate[key].innerHTML = "&#9660;"
      testValue[key].innerText = "maior"
      const dataListOrderedReverse = dataListOrdered.reverse()
       
      table[0].appendChild(tableBody)
      renderPlayers(data, dataListOrderedReverse)
    }
    else if (testValue[key].innerText === "maior") {
      buttonRate[key].innerHTML = "&#9672;"
      testValue[key].innerText = "&nbsp;"

      table[0].appendChild(tableBody)
      renderPlayers(data, data.atletas)
    }
    else {
      buttonRate[key].innerHTML = "&#9650;"
      testValue[key].innerText = "menor"
      const dataListOrderedReverse = dataListOrdered.reverse().reverse()
      
      table[0].appendChild(tableBody)
      renderPlayers(data, dataListOrderedReverse)
    }

  }  



getContent()
