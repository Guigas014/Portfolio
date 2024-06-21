import React from "react"
import { StyleSheet, View } from "react-native"

import { colors } from "@/styles/Colors"
import { font } from "@/styles/fontFamily"
import { useGameData } from "@/Data/gameData"

import { SectionScores } from "@/components/SectionScores"
import { ParcialScores } from "@/components/ParcialScores"

// type DrawerProps = {
//   closeDrawer: () => void
// }

export default function Home() {
  const dataGame = useGameData()

  // console.log(dataGame.parcialPointsP1, dataGame.parcialPointsP2)

  return (
    <View style={styles.container}>
      <SectionScores playerNum={1} name={dataGame.namePlayer1} score="2500" />
      <SectionScores playerNum={2} name={dataGame.namePlayer2} score="2100" />

      <ParcialScores
        nameP1={dataGame.namePlayer1}
        nameP2={dataGame.namePlayer2}
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
