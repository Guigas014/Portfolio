  const { acceptsEncoding } = require('express/lib/request')
  const puppeteer = require('puppeteer')


  module.exports = {

    // função que pesquisa o filme
    async searchMovie(movieLink) {
      try {
        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        await page.goto(`${movieLink}`)

    
      
        // Validar a página buscando o valor 'Title'
        const data = await page.evaluate((movieLink) => {
        
          //busca o titulo
          const titulo = document.querySelector('.sc-94726ce4-2').childNodes[0].innerText

          //busca ano, classificação, tempo
          //const datas = document.querySelector('.sc-94726ce4-2').childNodes[1]
                        //.innerText.split("\n")

          //busca a nota
          const rate = document.querySelector('.sc-7ab21ed2-1').innerText

          //busca o ano, classificação, tempo e os tipos do filme
          const datas = document.getElementsByClassName('ipc-inline-list__item')

          let title = ""
          let launch = ""
          let certificate = ""
          let time = ""
          let genres = []

          if (datas[3].innerText === "Série de TV") {
            title = titulo + " (" + datas[3].innerText + ")"
            launch = datas[4].innerText
            certificate = datas[5].innerText
            time = datas[6].innerText

            genres.push(datas[7].innerText)
            genres.push(datas[8].innerText)
            genres.push(datas[9].innerText)

          } 
          else {
            title = titulo
            launch = datas[3].innerText
            certificate = datas[4].innerText
            time = datas[5].innerText

            genres.push(datas[6].innerText)
            genres.push(datas[7].innerText)
            genres.push(datas[8].innerText)
          }

          //busca a imagem
          const image = document.querySelector('.ipc-image').src


          //const datasList = datasArray.map(({ innerText }) => innerText)
          

        // Criando array com todo o conteúdo.
          const dataMovie = {
            title,
            launch,
            time,
            genres,
            certificate,
            rate,
            image,
            uri: movieLink,
          } 


          return dataMovie    //Esse retorno é obrigatório!!!!
        });
      
      
        console.log('Fechou02')
        //console.log(data)
      await browser.close()
    
      return data
    } catch (e) {
      console.log(e)
    }  
  }
}


