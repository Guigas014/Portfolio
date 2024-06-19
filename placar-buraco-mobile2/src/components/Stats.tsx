import { View, Text, StyleSheet } from "react-native"

import { StatsByPlayer } from "./StatsByPlayer"

import { font } from "@/styles/fontFamily"
import { colors } from "@/styles/Colors"

export function Stats() {
  const typeStats = [
    "pontos:",
    "c. limpa:",
    "c. suja:",
    "bate:",
    "morto:",
    "Vitórias:",
  ]
  const statsP1 = ["15400", "4", "2", "3", "2", "4"]
  const statsP2 = ["11500", "2", "1", "1", "4", "3"]

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Estatísticas</Text>
      <View style={styles.table}>
        <View style={styles.header}>
          <Text style={styles.titleHeader}>Rodada</Text>
          <Text style={styles.titleHeader}>Player 1</Text>
          <Text style={styles.titleHeader}>Player 2</Text>
        </View>
        <View style={styles.content}>
          <StatsByPlayer stats={typeStats} />
          <StatsByPlayer stats={statsP1} />
          <StatsByPlayer stats={statsP2} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: 300,
    gap: 12,
  },
  label: {
    fontFamily: font.bold,
    fontSize: 24,
    color: colors.spanishGray,
  },
  table: {
    alignItems: "center",
    justifyContent: "flex-start",
    width: 300,
    height: 290,

    borderWidth: 3,
    borderRadius: 6,
    borderColor: colors.lavenderGray,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 270,
    height: 40,

    borderBottomColor: colors.lavenderGray,
    borderBottomWidth: 2,
  },
  titleHeader: {
    fontFamily: font.medium,
    fontSize: 18,
    color: colors.spanishGray,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 275,
    height: 240,
  },
})
