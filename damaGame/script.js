let peca
let casaAtual
let novaCasa
let oldCasa

//Função de movimento
function move(event) {
  event.preventDefault()

  //selecionar a casa atual clicada e a peça se existir
  const object = event.target

  // console.log("objeto: ", object.id)

  //verificar se existe uma peça na casa nova
  if (object.id != "casa") {
    peca = object //Salva a peça
    casaAtual = object.parentNode //Salva a casa selecionada
    casaAtual.setAttribute("style", "border-color: red") //Seleciona a casa
  } else {
    //SE não existir peça na casa nova executar o movimento
    casaAtual.setAttribute("style", "border-color: black") //Tira a seleção da casa antiga(borda)
    casaAtual = object //salva a nova casa selecionada
    casaAtual.appendChild(peca) //move a peça
  }

  // console.log(peca.id)
  // console.log(casaAtual.id)
}

//Função que preenche o tabuleiro
function makeTable() {}
