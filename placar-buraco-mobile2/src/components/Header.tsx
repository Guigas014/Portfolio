import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Feather } from "@expo/vector-icons"

import { colors } from "@/styles/Colors"
import { font } from "@/styles/fontFamily"

type HeaderProps = {
  title: string
  openDrawer: () => void
}

export function Header({ title, openDrawer }: HeaderProps) {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/card-icon.png")}
        style={styles.cardImage}
      />

      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity style={styles.drawer} onPress={openDrawer}>
        <Feather name="menu" size={35} color={colors.white} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",

    height: 130,
    padding: 25,

    backgroundColor: colors.asparagus,
  },
  cardImage: {
    width: 40,
    height: 40,
  },
  title: {
    fontSize: 24,
    fontFamily: font.bold,
    textAlign: "center",
    color: colors.white,
  },
  drawer: {
    padding: 0,
    fontSize: 20,
    fontFamily: font.bold,
    textAlign: "center",
    color: colors.white,
  },
})
