import React, { useState } from "react"
import { ScrollView, StyleSheet, Text, View } from "react-native"

import { colors } from "@/styles/Colors"
import { font } from "@/styles/fontFamily"

import { Line } from "@/components/Line"
import { Button } from "@/components/Button"
import { PlayerLabel } from "@/components/PlayerLabel"
import { Input } from "@/components/Input"

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

        <View style={styles.counts}>
          <Text style={styles.labelCount}>Estatísticas</Text>
          <View style={styles.contentCount}>
            <Text>Content</Text>
          </View>
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
  counts: {
    alignItems: "center",
    width: 300,
    gap: 12,
  },
  labelCount: {
    fontFamily: font.bold,
    fontSize: 24,
    color: colors.spanishGray,
  },
  contentCount: {
    alignItems: "center",
    justifyContent: "flex-start",
    width: 300,
    height: 280,

    borderWidth: 3,
    borderRadius: 6,
    borderColor: colors.lavenderGray,
  },
})
