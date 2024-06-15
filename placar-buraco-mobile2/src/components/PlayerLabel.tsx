import { useState } from "react"
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native"

import { colors } from "@/styles/Colors"
import { font } from "@/styles/fontFamily"

type PlayerLabelProps = {
  playerName: string
  playerNum: number
  textColor: string
  setViewPontos: () => void
}

export function PlayerLabel({
  setViewPontos,
  playerName,
  textColor,
  playerNum,
}: PlayerLabelProps) {
  const [toggleRotation, setToggleRotation] = useState("0deg")

  function togglePontos() {
    toggleRotation == "0deg"
      ? setToggleRotation("270deg")
      : setToggleRotation("0deg")

    setViewPontos()
  }

  return (
    <View style={styles.title}>
      <Text style={[styles.labelTitle, { color: textColor }]}>
        {playerName}
      </Text>
      <TouchableOpacity onPress={togglePontos} activeOpacity={1}>
        {playerNum == 1 ? (
          <Image
            source={require("@/assets/toggleP1.png")}
            width={32}
            height={19}
            style={{
              transform: [{ rotate: toggleRotation }],
            }}
          />
        ) : (
          <Image
            source={require("@/assets/toggleP2.png")}
            width={32}
            height={19}
            style={{
              transform: [{ rotate: toggleRotation }],
            }}
          />
        )}
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 300,
    height: 35,
  },
  labelTitle: {
    fontSize: 22,
    fontFamily: font.medium,
    letterSpacing: 2,
  },
})
