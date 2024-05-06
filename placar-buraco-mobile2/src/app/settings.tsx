import React from "react"
import { StyleSheet, Text, View } from "react-native"

import { colors } from "@/styles/Colors"
import { font } from "@/styles/fontFamily"

export default function Settings() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings page!!!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.brown,
    fontSize: 20,
    fontFamily: font.bold,
  },
})
