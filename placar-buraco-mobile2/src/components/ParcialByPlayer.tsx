import { View, Text, StyleSheet } from "react-native"

import { colors } from "@/styles/Colors"
import { font } from "@/styles/fontFamily"

type ParcialByPlayerProps = {
  playerNum: number
}

export function ParcialByPlayer({ playerNum }: ParcialByPlayerProps) {
  let textColor = ""
  playerNum == 1 ? (textColor = colors.ebony) : (textColor = colors.shadow)

  return (
    <View style={styles.parcial}>
      <Text style={[styles.points, { color: textColor }]}>900 p</Text>
      <Text style={[styles.points, { color: textColor }]}>800 c</Text>
      <Text style={[styles.points, { color: textColor }]}>100 b</Text>
      <Text style={[styles.points, { color: textColor }]}>-100 m</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  parcial: {
    alignItems: "flex-start",
    justifyContent: "center",
    //  paddingLeft: 30,
  },
  points: {
    textAlign: "center",
    fontFamily: font.medium,
    fontSize: 20,
  },
})
