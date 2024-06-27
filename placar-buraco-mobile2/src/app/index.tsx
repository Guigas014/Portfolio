import React, { useEffect, useState } from "react"
import { Alert, StyleSheet, View } from "react-native"

import { colors } from "@/styles/Colors"
import { font } from "@/styles/fontFamily"
import { useGameData } from "@/Data/gameData"

import { SectionScores } from "@/components/SectionScores"
import { ParcialScores } from "@/components/ParcialScores"

// type DrawerProps = {
//   closeDrawer: () => void
// }

export default function Home() {
  let qtdWinnerP1 = 0
  let qtdWinnerP2 = 0

  const dataGame = useGameData()

  const pointsP1 = dataGame.parcialPointsP1
  const pointsP2 = dataGame.parcialPointsP2

  //calcula o total dos pontos
  function handleTotalPoint(pontosByPlayer: string[]) {
    const total = pontosByPlayer.map((ponto) => {
      let arrayPontos = parseInt(ponto.replace(/p|cl|cs|b|m/g, "").trimEnd())

      return arrayPontos
    })
    const totalByPlayer = total.reduce(getSoma, 0)

    // console.log(total)
    return totalByPlayer
  }

  function getSoma(total: number, num: number) {
    return total + num
  }

  const totalP1 = handleTotalPoint(pointsP1)
  const totalP2 = handleTotalPoint(pointsP2)

  // console.log(totalP2)

  //Teste para descobrir o ganhador
  function Winner(scoreP1: number, scoreP2: number) {
    if (scoreP1 >= 3000 && scoreP1 > scoreP2) {
      const winMessage = `${dataGame.namePlayer1} ganhou a partida!!!\n ${totalP1} pontos`
      let loseMessage = ""

      scoreP2 <= 1500
        ? (loseMessage = `${dataGame.namePlayer2} tomou um capote!!!\n ${totalP2} pontos`)
        : (loseMessage = `${dataGame.namePlayer2} jogou bem!!!\n ${totalP2} pontos`)

      // Conta a quantidade de vitórias
      qtdWinnerP1 = dataGame.qtdVitoriaP1
      dataGame.qtdVitoriaP1 = qtdWinnerP1 + 1

      //Zerar o placar da partida (parcial)
      dataGame.clearMatchPoints()

      return Alert.alert("Fim da partida!!", `${winMessage}\n\n${loseMessage}`)
    }
    if (scoreP2 >= 3000 && scoreP2 > scoreP1) {
      const winMessage = `${dataGame.namePlayer2} ganhou a partida!!!\n ${totalP2} pontos`
      let loseMessage = ""

      scoreP2 <= 1500
        ? (loseMessage = `${dataGame.namePlayer1} tomou um capote!!!\n ${totalP1} pontos`)
        : (loseMessage = `${dataGame.namePlayer1} jogou bem!!!\n ${totalP1} pontos`)

      // Conta a quantidade de vitórias
      qtdWinnerP2 = dataGame.qtdVitoriaP2
      dataGame.qtdVitoriaP2 = qtdWinnerP2 + 1

      //Zerar o placar da partida (parcial)
      dataGame.clearMatchPoints()

      return Alert.alert("Fim da partida!!", `${winMessage}\n\n${loseMessage}`)
    }
  }

  useEffect(() => {
    Winner(totalP1, totalP2)
  })

  return (
    <View style={styles.container}>
      <SectionScores
        playerNum={1}
        name={dataGame.namePlayer1}
        score={totalP1.toString()}
      />
      <SectionScores
        playerNum={2}
        name={dataGame.namePlayer2}
        score={totalP2.toString()}
      />

      <ParcialScores
        nameP1={dataGame.namePlayer1}
        nameP2={dataGame.namePlayer2}
        pointsP1={pointsP1}
        pointsP2={pointsP2}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 55,
    paddingTop: 30,
  },
  text: {
    color: colors.brown,
    fontSize: 20,
    fontFamily: font.bold,
  },
})
