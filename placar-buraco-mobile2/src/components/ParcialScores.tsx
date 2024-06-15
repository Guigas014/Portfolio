import { useState } from "react"
import { StyleSheet, Text, View, TouchableOpacity, Modal } from "react-native"

import { colors } from "@/styles/Colors"
import { font } from "@/styles/fontFamily"

import { Button } from "./Button"
import { ParcialByPlayer } from "./ParcialByPlayer"
import { Help } from "./Help"

export function ParcialSocres() {
  const [modalVisible, setModalVisible] = useState(false)

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
          <Text style={styles.namePlayer1}>Guilherme</Text>
          <Text style={styles.namePlayer2}>Isabel</Text>
        </View>

        <View style={styles.parcials}>
          <ParcialByPlayer playerNum={1} />
          <ParcialByPlayer playerNum={2} />
        </View>
        <Button value="Pontos" bgColor={colors.asparagus} />
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
    width: 280,
    paddingLeft: 40,
  },
  namePlayer1: {
    width: 140,
    textAlign: "left",

    fontFamily: font.medium,
    fontSize: 22,
    textDecorationLine: "underline",
    color: colors.ebony,
  },
  namePlayer2: {
    width: 140,
    textAlign: "left",

    fontFamily: font.medium,
    textDecorationLine: "underline",
    fontSize: 22,
    color: colors.shadow,
  },
  parcials: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 70,
    width: 280,
    minHeight: 235,
    paddingLeft: 30,
  },
})
