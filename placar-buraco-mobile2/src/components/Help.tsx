import { Modal, View, StyleSheet, Text } from "react-native"

import { colors } from "@/styles/Colors"
import { font } from "@/styles/fontFamily"

export function Help() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>p - Pontos</Text>
      <Text style={styles.text}>cl - Canastra limpa</Text>
      <Text style={styles.text}>cs - Canastra suja</Text>
      <Text style={styles.text}>b - Bate</Text>
      <Text style={styles.text}>m - Morto</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 30,
    marginTop: 575,
    backgroundColor: colors.brown,
    borderRadius: 6,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  text: {
    fontFamily: font.medium,
    fontSize: 18,
    color: colors.white,
  },
})
