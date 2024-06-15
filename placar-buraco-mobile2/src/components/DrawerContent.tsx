import { View, Text, StyleSheet } from "react-native"
import { Link } from "expo-router"

import { colors } from "@/styles/Colors"
import { font } from "@/styles/fontFamily"

type DrawerProps = {
  onSelectPage: () => void
  changeTitle: (title: string) => void
}

export function DrawerContent({ onSelectPage, changeTitle }: DrawerProps) {
  function changePage(newTitle: string) {
    changeTitle(newTitle)
    onSelectPage()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.menu}>Menu</Text>
      <View style={styles.links}>
        <Link
          style={styles.paragraph}
          href={"/"}
          onPress={() => changePage("Canastra")}
        >
          home
        </Link>
        <Link
          style={styles.paragraph}
          href={"/update"}
          onPress={() => changePage("Marcador")}
        >
          marcador
        </Link>
        <Link
          style={styles.paragraph}
          href={"/settings"}
          // onPress={onSelectPage}
          onPress={() => changePage("Configurações")}
        >
          configurações
        </Link>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 10,
    backgroundColor: colors.spanishGray,
  },
  links: {
    width: 240,

    borderTopWidth: 3,
    borderTopColor: colors.lavenderGray,
  },
  menu: {
    padding: 16,
    fontSize: 24,
    fontFamily: font.bold,
    textAlign: "center",
    color: colors.white,
  },
  paragraph: {
    padding: 20,
    paddingLeft: 4,
    fontSize: 18,
    fontFamily: font.bold,
    textAlign: "left",
    color: colors.white,
  },
})
