import { View, Text, StyleSheet } from "react-native"

import { useGameData } from "@/Data/gameData"

import { font } from "@/styles/fontFamily"
import { colors } from "@/styles/Colors"

import { StatsByPlayer } from "./StatsByPlayer"

export function Stats() {
  const dataGame = useGameData()

  const typeStats = [
    "pontos:",
    "c. limpa:",
    "c. suja:",
    "bate:",
    "morto:",
    "Vitórias:",
  ]

  function handleTotals(pontosByPlayer: string[], valueTest: string) {
    const totalPontos = pontosByPlayer.filter((ponto) =>
      ponto.includes(valueTest)
    )

    const arrayTotal = totalPontos.map((ponto) => {
      return parseInt(ponto.replace(valueTest, "").trimEnd())
    })

    const total = arrayTotal.reduce(getSoma, 0)

    // console.log(total)
    return total.toString()
  }

  function getSoma(total: number, num: number) {
    return total + num
  }

  const statsP1 = [
    handleTotals(dataGame.parcialPointsP1, "p"),
    handleTotals(dataGame.parcialPointsP1, "cl"),
    handleTotals(dataGame.parcialPointsP1, "cs"),
    handleTotals(dataGame.parcialPointsP1, "b"),
    handleTotals(dataGame.parcialPointsP1, "m"),
    "?",
  ]

  const statsP2 = [
    handleTotals(dataGame.parcialPointsP2, "p"),
    handleTotals(dataGame.parcialPointsP2, "cl"),
    handleTotals(dataGame.parcialPointsP2, "cs"),
    handleTotals(dataGame.parcialPointsP2, "b"),
    handleTotals(dataGame.parcialPointsP2, "m"),
    "?",
  ]
  // const statsP2 = ["11500", "2", "1", "1", "4", "3"]

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Estatísticas</Text>
      <View style={styles.table}>
        <View style={styles.header}>
          <Text style={styles.titleHeader}>Rodada</Text>
          <Text style={styles.titleHeader}>{dataGame.namePlayer1}</Text>
          <Text style={styles.titleHeader}>{dataGame.namePlayer2}</Text>
        </View>
        <View style={styles.content}>
          <StatsByPlayer stats={typeStats} />
          <StatsByPlayer stats={statsP1} />
          <StatsByPlayer stats={statsP2} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: 300,
    gap: 12,
  },
  label: {
    fontFamily: font.bold,
    fontSize: 24,
    color: colors.spanishGray,
  },
  table: {
    alignItems: "center",
    justifyContent: "flex-start",
    width: 300,
    height: 290,

    borderWidth: 3,
    borderRadius: 6,
    borderColor: colors.lavenderGray,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    paddingLeft: 10,
    width: 270,
    height: 40,

    borderBottomColor: colors.lavenderGray,
    borderBottomWidth: 2,
  },
  titleHeader: {
    width: 80,
    fontFamily: font.medium,
    fontSize: 18,
    color: colors.spanishGray,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 275,
    height: 240,
  },
})
