import React, { useState } from "react"
import { ScrollView, StyleSheet, View } from "react-native"

import { colors } from "@/styles/Colors"

import { Line } from "@/components/Line"
import { Button } from "@/components/Button"
import { PlayerLabel } from "@/components/PlayerLabel"
import { Input } from "@/components/Input"
import { Stats } from "@/components/Stats"

export default function Settings() {
  const [viewPontosP1, setViewPontosP1] = useState(false)
  const [viewPontosP2, setViewPontosP2] = useState(false)

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
          playerName="Player 1"
          textColor={colors.ebony}
          setViewPontos={togglePontosP1}
          playerNum={1}
        />
        <View
          style={[
            styles.contentPlayer,
            { display: viewPontosP1 == true ? "flex" : "none" },
          ]}
        >
          <Input>
            <Input.Field
              placeholder="Nome do jogador"
              cursorColor={colors.ebony}
              textAlign="left"
              onChangeText={() => {}}
            />
          </Input>
        </View>

        <PlayerLabel
          playerName="Player 2"
          textColor={colors.shadow}
          setViewPontos={togglePontosP2}
          playerNum={2}
        />
        <View
          style={[
            styles.contentPlayer,
            { display: viewPontosP2 == true ? "flex" : "none" },
          ]}
        >
          <Input>
            <Input.Field
              placeholder="Nome do jogador"
              cursorColor={colors.ebony}
              textAlign="left"
              onChangeText={() => {}}
            />
          </Input>
        </View>

        <View style={styles.button}>
          <Button value="ok" bgColor={colors.asparagus} />
        </View>

        <Line />

        <Stats />
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
  contentPlayer: {
    paddingBottom: 20,
    width: 300,
  },
  button: {
    alignItems: "center",
    width: 300,
    marginTop: 30,
    marginBottom: 40,
  },
})
