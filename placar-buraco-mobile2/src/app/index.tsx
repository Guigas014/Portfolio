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
  const [winnerP1, setWinnerP1] = useState(0)
  const [winnerP2, setWinnerP2] = useState(0)

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

    console.log(total)
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
      const winMessage = "Player 1 ganhou a partida!!!"
      let loseMessage = ""

      scoreP2 <= 1500
        ? (loseMessage = "O Player 2 tomou um capote!!!")
        : (loseMessage = "O Player 2 jogou bem!!!")

      setWinnerP1(winnerP1 + 1)
      dataGame.qtdVitoriaP1 = winnerP1

      return Alert.alert(`${winMessage}\n\n${loseMessage}`)
    }

    if (scoreP2 >= 3000 && scoreP2 > scoreP1) {
      const winMessage = "Player 1 ganhou a partida!!!"
      let loseMessage = ""

      scoreP2 <= 1500
        ? (loseMessage = "O Player 1 tomou um capote!!!")
        : (loseMessage = "O Player 1 jogou bem!!!")

      setWinnerP2(winnerP2 + 1)
      dataGame.qtdVitoriaP2 = winnerP2

      return Alert.alert(`${winMessage}\n\n${loseMessage}`)
    }
  }

  useEffect(() => Winner(totalP1, totalP2))

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
