import { View, Text, StyleSheet } from "react-native"

import { colors } from "@/styles/Colors"
import { font } from "@/styles/fontFamily"

type StatsProps = {
  stats: string[]
}

export function StatsByPlayer({ stats }: StatsProps) {
  const typeStats = stats

  const alignTypes = typeStats.includes("pontos:", 0) ? "flex-start" : "center"
  // console.log(alignTypes)

  return (
    <View style={[styles.container, { alignItems: alignTypes }]}>
      {typeStats.map((type, index) => (
        <Text key={index} style={styles.stats}>
          {type}
        </Text>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    justifyContent: "space-between",
    width: 90,
    height: 225,
    paddingTop: 8,
    // paddingLeft: 10,
  },
  stats: {
    fontFamily: font.medium,
    fontSize: 16,
    color: colors.spanishGray,
  },
})
