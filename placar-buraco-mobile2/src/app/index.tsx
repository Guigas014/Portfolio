import React from "react"
import { StyleSheet, Text, View } from "react-native"

import { colors } from "@/styles/Colors"
import { font } from "@/styles/fontFamily"
import { SectionScores } from "@/components/SectionScores"

type DrawerProps = {
  closeDrawer: () => void
}

export default function Home() {
  return (
    <View style={styles.container}>
      <SectionScores playerNum={1} name="Guilherme" score="2500" />
      <SectionScores playerNum={2} name="Luisa" score="2100" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 60,
    padding: 40,
    paddingLeft: 60,

    borderColor: "orange",
    borderWidth: 4,
  },
  text: {
    color: colors.brown,
    fontSize: 20,
    fontFamily: font.bold,
  },
})
