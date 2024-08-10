<h1 align="center">Placar de Buraco ou Canastra</h1>

<br>

<p align="center">
    Placar desenvolvido em React Native, com funcionalidades para marcação dos pontos dos jogos de buraco ou canastra e estátistica geral das pontuações.
</p>

<br>

<p align="center">
  <a href="#layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#funcionalidades">Funcionalidades</a>&nbsp;&nbsp;&nbsp;
</p>

<br>

## Layout

<p align="center">
  <img alt="Placar Buraco" src="assets/telas/placar buraco 1.jpg" width="20%" height="40%">&nbsp;&nbsp;&nbsp;
  <img alt="Placar Buraco" src="assets/telas/placar buraco 3.jpg" width="20%" height="40%">&nbsp;&nbsp;&nbsp;
  <img alt="Placar Buraco" src="assets/telas/placar buraco 4.jpg" width="20%" height="40%">&nbsp;&nbsp;&nbsp;
  <img alt="Placar Buraco" src="assets/telas/placar buraco 2.jpg" width="20%" height="40%">
</p>

<br>

## Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- React Native
- Expo
- Github

<br>

## Funcionalidades

Na primeira tela é apresentado o placar geral e as parciais dos dois jogadores.<br>
Tocando e segurando a "interrogação" a direita do texto "Parciais", uma legenda com a descrição das letras que acompanha cada ponto é apresentada.<br>
Para marcar os pontos existem duas opções: o botão "PONTOS" na parte inferior da tela, que leva direto à página de marcação, ou os "três traços" na parte superior esquerda da tela, o qual abre um drawer lateral com um menu de navegação com a opção "marcador".
<br><br>
Na tela "Marcador" podemos abrir o formulário de marcação de cada jogador clicando na seta a esquerda dos nomes dos jogadores. Nele podemos anotar os pontos contados de todas as cartas, pontos das canastras limpas e sujas, o bate caso tenha ganhado a partida e o morto caso tenha que pagar o morto. Após anotar toda a pontuação dos dois jogadores basta clicar em "SALVAR". O usuário será redirecionado automaticamente para a primeira tela, com todas as parciais e os totais atualizados.<br>
Ainda na tela de "Marcador" podemos zerar todos os pontos através do botão "ZERAR PONTOS" e zerar toda a estatística através do botão "ZERAR ESTATÍSTICAS".
<br><br>
Utilizando o drawer lateral (três traços na parte superior esquerda da tela), podemos chegar na tela de "Configurações", nessa tela podemos mudar o nome padrão dos jogadores (Player 1 e Player 2). Basta clicar na seta a esquerda de cada nome para abrir um formulário simples, então é só digitar o nome desejado. Observe a mudança automática do nome na tabela de estatística.<br>
Ainda na tela de "Configurações" existe uma tabela de "Estatísticas", na qual é apresentado a soma dos pontos de cada tipo de pontuação. Seguindo os mesmos tipos de pontuação da página "Marcador". Essa estatística seguirá somando, até que seja zerada pelo usuário através da página de marcação como visto acima.

<br>

***
