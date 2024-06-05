import { View, TouchableOpacity, Text, StyleSheet } from "react-native"

import { colors } from "@/styles/Colors"
import { font } from "@/styles/fontFamily"

type ButtonProps = {
  value: string
}

export function Button({ value }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7}>
      <Text style={styles.button}>{value}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: 160,
    height: 45,

    backgroundColor: colors.asparagus,
    borderRadius: 4,
  },
  button: {
    fontFamily: font.bold,
    fontSize: 22,
    color: colors.white,
    letterSpacing: 2,
    textTransform: "uppercase",
  },
})
