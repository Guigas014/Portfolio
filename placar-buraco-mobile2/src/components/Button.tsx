import { View, TouchableOpacity, Text, StyleSheet } from "react-native"

import { colors } from "@/styles/Colors"
import { font } from "@/styles/fontFamily"

type ButtonProps = {
  value: string
  bgColor: string
  onClick: () => void
}

export function Button({ value, bgColor, onClick }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: bgColor }]}
      activeOpacity={0.7}
      onPress={onClick}
    >
      <Text style={styles.button}>{value}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    minWidth: 160,
    minHeight: 45,
    padding: 6,

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
