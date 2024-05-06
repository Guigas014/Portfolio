import React from "react"
import { StyleSheet, Text, View } from "react-native"

import { colors } from "@/styles/Colors"
import { font } from "@/styles/fontFamily"

type DrawerProps = {
  closeDrawer: () => void
}

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Testando o APP!!!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "orange",
    borderWidth: 4,
  },
  text: {
    color: colors.brown,
    fontSize: 20,
    fontFamily: font.bold,
  },
})
