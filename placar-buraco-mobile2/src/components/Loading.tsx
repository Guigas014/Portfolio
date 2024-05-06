import { ActivityIndicator, StyleSheet } from "react-native"

import { colors } from "@/styles/Colors"

export function Loading() {
  return <ActivityIndicator style={styles.container} color={colors.asparagus} />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.gray,
  },
})
