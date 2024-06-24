import { View, Text, StyleSheet } from "react-native"

import { colors } from "@/styles/Colors"
import { font } from "@/styles/fontFamily"

type ParcialByPlayerProps = {
  playerNum: number
  points: string[]
}

export function ParcialByPlayer({ playerNum, points }: ParcialByPlayerProps) {
  let textColor = ""
  playerNum == 1 ? (textColor = colors.ebony) : (textColor = colors.shadow)

  return (
    <View style={styles.parcial}>
      {points.map((point, index) => (
        <Text key={index} style={[styles.points, { color: textColor }]}>
          {point}
        </Text>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  parcial: {
    alignItems: "center",
    justifyContent: "center",
    width: 150,
  },
  points: {
    textAlign: "center",
    fontFamily: font.medium,
    fontSize: 20,
  },
})
