import React from "react"
import { StyleSheet, Text, View } from "react-native"

import { colors } from "@/styles/Colors"
import { font } from "@/styles/fontFamily"

import { SectionScores } from "@/components/SectionScores"
import { ParcialSocres } from "@/components/ParcialScores"

type DrawerProps = {
  closeDrawer: () => void
}

export default function Home() {
  return (
    <View style={styles.container}>
      <SectionScores playerNum={1} name="Guilherme" score="2500" />
      <SectionScores playerNum={2} name="Luisa" score="2100" />

      <ParcialSocres />
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
