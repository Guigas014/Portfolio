import { useEffect, useState } from "react"
import { Image, StyleSheet, Text, View } from "react-native"

import { colors } from "@/styles/Colors"
import { font } from "@/styles/fontFamily"

type SectionScoresProps = {
  playerNum: number
  name: string
  score: string
}

export function SectionScores({ playerNum, name, score }: SectionScoresProps) {
  //   function changeImage() {
  //     if (playerNum == 1) {
  //       imageURL = "arrow-p1.png"
  //     } else {
  //       imageURL = "arrow-p2.png"
  //     }
  //     console.log("OK")
  //   }

  //   useEffect(() => {
  //     changeImage()
  //   })

  return (
    <View style={styles.container}>
      {playerNum == 1 ? (
        <Image
          source={require("@/assets/arrow-p1.png")}
          width={40}
          height={40}
        />
      ) : (
        <Image
          source={require("@/assets/arrow-p2.png")}
          width={40}
          height={40}
        />
      )}

      <View style={styles.playerInfo}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.score}>{score}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
  },
  playerInfo: {
    gap: 4,
  },
  name: {
    fontFamily: font.medium,
    fontSize: 20,
    color: colors.brown,
  },
  score: {
    fontFamily: font.bold,
    fontSize: 24,
    color: colors.brown,
  },
})
