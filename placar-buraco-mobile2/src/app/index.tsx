import React from "react"
import { StyleSheet, Text, View } from "react-native"

import colors from "../../constants/Colors"

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
  },
  text: {
    color: colors.light.tabIconSelected,
    fontSize: 20,
    fontWeight: "bold",
  },
})
