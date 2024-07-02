import { useState } from "react"
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  ScrollView,
} from "react-native"
import { useNavigation, Link } from "expo-router"

import { colors } from "@/styles/Colors"
import { font } from "@/styles/fontFamily"

import { Button } from "./Button"
import { ParcialByPlayer } from "./ParcialByPlayer"
import { Help } from "./Help"
import { useGameData } from "@/Data/gameData"

type ParcialScoresProps = {
  nameP1: string
  nameP2: string
  pointsP1: string[]
  pointsP2: string[]
}

export function ParcialScores({
  nameP1,
  nameP2,
  pointsP1,
  pointsP2,
}: ParcialScoresProps) {
  const [modalVisible, setModalVisible] = useState(false)
  const dataGame = useGameData()

  function updatePage() {
    const routeID = dataGame.title

    if (routeID == "Canastra") {
      dataGame.changeTitle("Marcador")
      dataGame.changeOldTitle("Canastra")
    } else {
      dataGame.changeTitle("Canastra")
    }

    // console.log(routeID)
    // const id = navigation.getId()
    // navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Parciais</Text>
        <TouchableOpacity
          style={styles.helpButton}
          activeOpacity={0.7}
          onPressIn={() => setModalVisible(true)}
          onPressOut={() => setModalVisible(false)}
        >
          <Text style={styles.headerText}>?</Text>
        </TouchableOpacity>

        <Modal animationType="fade" visible={modalVisible} transparent={true}>
          <Help />
        </Modal>
      </View>

      <View style={styles.containerParcials}>
        <View style={styles.headerParcials}>
          <Text style={styles.namePlayer1}>{nameP1}</Text>
          <Text style={styles.namePlayer2}>{nameP2}</Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.parcials}>
            <ParcialByPlayer playerNum={1} points={pointsP1} />
            <ParcialByPlayer playerNum={2} points={pointsP2} />
          </View>
        </ScrollView>

        <Link style={styles.link} href="update" onPress={updatePage}>
          Pontos
        </Link>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  header: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: 270,
    height: 30,
  },
  headerText: {
    fontFamily: font.bold,
    fontSize: 22,
    color: colors.brown,
  },
  helpButton: {
    alignItems: "center",
    justifyContent: "center",

    width: 35,
    height: 35,
    backgroundColor: colors.gray,

    borderColor: colors.brown,
    borderWidth: 3,
    borderRadius: 50,
  },
  containerParcials: {
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 15,
    padding: 15,

    width: 300,
    height: 370,

    borderColor: colors.lavenderGray,
    borderWidth: 3,
    borderRadius: 6,
  },
  headerParcials: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    gap: 50,
  },
  namePlayer1: {
    fontFamily: font.bold,
    fontSize: 22,
    textDecorationLine: "underline",
    color: colors.ebony,
  },
  namePlayer2: {
    fontFamily: font.bold,
    textDecorationLine: "underline",
    fontSize: 22,
    color: colors.shadow,
  },
  parcials: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    minHeight: 235,
    paddingRight: 40,
  },
  link: {
    alignItems: "center",
    textAlign: "center",
    width: 160,
    height: 45,
    padding: 6,

    backgroundColor: colors.asparagus,
    borderRadius: 4,

    fontFamily: font.bold,
    fontSize: 22,
    color: colors.white,
    letterSpacing: 2,
    textTransform: "uppercase",
  },
})
