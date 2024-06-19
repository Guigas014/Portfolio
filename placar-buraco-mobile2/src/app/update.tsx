import React, { useState } from "react"
import { StyleSheet, Text, View, Switch, ScrollView } from "react-native"

import { colors } from "@/styles/Colors"
import { font } from "@/styles/fontFamily"
import { useGameData } from "@/Data/gameData"

import { Input } from "@/components/Input"
import { PlayerLabel } from "@/components/PlayerLabel"
import { Button } from "@/components/Button"
import { Line } from "@/components/Line"

export default function Update() {
  // const [toggleRotationP2, setToggleRotationP2] = useState("0deg")
  const [viewPontosP1, setViewPontosP1] = useState(false)
  const [viewPontosP2, setViewPontosP2] = useState(false)
  const [bateIsEnabledP1, setBateIsEnabledP1] = useState(false)
  const [mortoIsEnabledP1, setMortoIsEnabledP1] = useState(false)
  const [bateIsEnabledP2, setBateIsEnabledP2] = useState(false)
  const [mortoIsEnabledP2, setMortoIsEnabledP2] = useState(false)

  const dataGame = useGameData()

  function togglePontosP1() {
    viewPontosP1 == true ? setViewPontosP1(false) : setViewPontosP1(true)
  }

  function togglePontosP2() {
    viewPontosP2 == true ? setViewPontosP2(false) : setViewPontosP2(true)
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <PlayerLabel
          playerName={dataGame.namePlayer1}
          playerNum={1}
          textColor={colors.ebony}
          setViewPontos={togglePontosP1}
        />

        <View
          style={[
            styles.points,
            { display: viewPontosP1 == true ? "flex" : "none" },
          ]}
        >
          <View style={styles.point}>
            <Text style={styles.label}>pontos:</Text>
            <Input>
              <Input.Field
                placeholder="pontos"
                cursorColor={colors.ebony}
                textAlign="right"
                keyboardType="numeric"
                onChangeText={() => {}}
              />
            </Input>
          </View>

          <View style={styles.point}>
            <Text style={styles.label}>canastra limpa:</Text>
            <Input>
              <Input.Field
                placeholder="pontos"
                cursorColor={colors.ebony}
                textAlign="right"
                keyboardType="numeric"
                onChangeText={() => {}}
              />
            </Input>
          </View>

          <View style={styles.point}>
            <Text style={styles.label}>canastra suja:</Text>
            <Input>
              <Input.Field
                placeholder="pontos"
                cursorColor={colors.ebony}
                textAlign="right"
                keyboardType="numeric"
                onChangeText={() => {}}
              />
            </Input>
          </View>

          <View style={styles.point}>
            <Text style={styles.label}>bate:</Text>
            <Switch
              trackColor={{ false: "#767577", true: colors.spanishGray }}
              thumbColor={bateIsEnabledP1 ? colors.asparagus : "#f4f3f4"}
              onValueChange={() => setBateIsEnabledP1(!bateIsEnabledP1)}
              value={bateIsEnabledP1}
            />
          </View>

          <View style={styles.point}>
            <Text style={styles.label}>morto:</Text>
            <Switch
              trackColor={{ false: "#767577", true: colors.spanishGray }}
              thumbColor={mortoIsEnabledP1 ? colors.asparagus : "#f4f3f4"}
              onValueChange={() => setMortoIsEnabledP1(!mortoIsEnabledP1)}
              value={mortoIsEnabledP1}
            />
          </View>
        </View>

        <PlayerLabel
          playerName={dataGame.namePlayer2}
          playerNum={2}
          textColor={colors.shadow}
          setViewPontos={togglePontosP2}
        />

        <View
          style={[
            styles.points,
            { display: viewPontosP2 == true ? "flex" : "none" },
          ]}
        >
          <View style={styles.point}>
            <Text style={styles.label}>pontos:</Text>
            <Input>
              <Input.Field
                placeholder="pontos"
                cursorColor={colors.ebony}
                textAlign="right"
                keyboardType="numeric"
                onChangeText={() => {}}
              />
            </Input>
          </View>

          <View style={styles.point}>
            <Text style={styles.label}>canastra limpa:</Text>
            <Input>
              <Input.Field
                placeholder="pontos"
                cursorColor={colors.ebony}
                textAlign="right"
                keyboardType="numeric"
                onChangeText={() => {}}
              />
            </Input>
          </View>

          <View style={styles.point}>
            <Text style={styles.label}>canastra suja:</Text>
            <Input>
              <Input.Field
                placeholder="pontos"
                cursorColor={colors.ebony}
                textAlign="right"
                keyboardType="numeric"
                onChangeText={() => {}}
              />
            </Input>
          </View>

          <View style={styles.point}>
            <Text style={styles.label}>bate:</Text>
            <Switch
              trackColor={{ false: "#767577", true: colors.spanishGray }}
              thumbColor={bateIsEnabledP2 ? colors.asparagus : "#f4f3f4"}
              onValueChange={() => setBateIsEnabledP2(!bateIsEnabledP2)}
              value={bateIsEnabledP2}
            />
          </View>

          <View style={styles.point}>
            <Text style={styles.label}>morto:</Text>
            <Switch
              trackColor={{ false: "#767577", true: colors.spanishGray }}
              thumbColor={mortoIsEnabledP2 ? colors.asparagus : "#f4f3f4"}
              onValueChange={() => setMortoIsEnabledP2(!mortoIsEnabledP2)}
              value={mortoIsEnabledP2}
            />
          </View>
        </View>

        <View style={styles.buttonsContainer}>
          <Button
            value="Salvar"
            bgColor={colors.asparagus}
            onClick={() => {}}
          />

          <Line />

          <Button
            value="zerar pontos"
            bgColor={colors.spanishGray}
            onClick={() => {}}
          />
          <Button
            value="zerar estatísticas"
            bgColor={colors.spanishGray}
            onClick={() => {}}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 30,
    padding: 30,
  },
  points: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 13,
    height: 260,
    marginBottom: 40,

    // borderColor: "green",
    // borderWidth: 2,
  },
  point: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 280,
    // height: 35,
  },
  label: {
    fontSize: 20,
    fontFamily: font.medium,
    color: colors.asparagus,
    letterSpacing: 2,
  },
  buttonsContainer: {
    alignItems: "center",
    gap: 40,
    paddingTop: 30,
  },
})
