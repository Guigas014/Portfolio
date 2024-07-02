import React, { useState } from "react"
import { StyleSheet, Text, View, Switch, ScrollView, Alert } from "react-native"
import { useNavigation } from "expo-router"

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

  const [pontosP1, setPontosP1] = useState("")
  const [canastraLimpaP1, setCanastraLimpaP1] = useState("")
  const [canastraSujaP1, setCanastraSujaP1] = useState("")
  const [mortoIsEnabledP1, setMortoIsEnabledP1] = useState(false)

  const [pontosP2, setPontosP2] = useState("")
  const [canastraLimpaP2, setCanastraLimpaP2] = useState("")
  const [canastraSujaP2, setCanastraSujaP2] = useState("")
  const [mortoIsEnabledP2, setMortoIsEnabledP2] = useState(false)

  const [bateIsTrue, setBateIsTrue] = useState(false)

  const dataGame = useGameData()
  const navigation = useNavigation()

  function togglePontosP1() {
    viewPontosP1 == true ? setViewPontosP1(false) : setViewPontosP1(true)
  }

  function togglePontosP2() {
    viewPontosP2 == true ? setViewPontosP2(false) : setViewPontosP2(true)
  }

  function handleAllPPoints() {
    //Testar o bate e o morto
    const bateP1 = bateIsTrue == true ? "100 b" : "0 b"
    const mortoP1 = mortoIsEnabledP1 == true ? "-100 m" : "0 m"
    const bateP2 = bateIsTrue == false ? "100 b" : "0 b"
    const mortoP2 = mortoIsEnabledP2 == true ? "-100 m" : "0 m"

    //Altera os pontos com as letras correspondentes
    const pointsP1 = pontosP1 ? pontosP1.concat(" p") : "0 p"
    const canaLimpaP1 = canastraLimpaP1 ? canastraLimpaP1.concat(" cl") : "0 cl"
    const canaSujaP1 = canastraSujaP1 ? canastraSujaP1.concat(" cs") : "0 cs"

    const pointsP2 = pontosP2 ? pontosP2.concat(" p") : "0 p"
    const canaLimpaP2 = canastraLimpaP2 ? canastraLimpaP2.concat(" cl") : "0 cl"
    const canaSujaP2 = canastraSujaP2 ? canastraSujaP2.concat(" cs") : "0 cs"

    //Cria o array de saída e atualiza o estado global
    let pontosParciaisP1 = dataGame.parcialPointsP1
    let pontosParciaisP2 = dataGame.parcialPointsP2
    pontosParciaisP1.push(pointsP1, canaLimpaP1, canaSujaP1, bateP1, mortoP1)
    pontosParciaisP2.push(pointsP2, canaLimpaP2, canaSujaP2, bateP2, mortoP2)

    //Cria o array da estatística e atualiza o estado global
    let pontosTotalP1 = dataGame.totalPointsP1
    let pontosTotalP2 = dataGame.totalPointsP2
    pontosTotalP1.push(pointsP1, canaLimpaP1, canaSujaP1, bateP1, mortoP1)
    pontosTotalP2.push(pointsP2, canaLimpaP2, canaSujaP2, bateP2, mortoP2)
    // pontosParciaisP1.map((ponto) => pontosTotalP1.push(ponto))
    // pontosParciaisP2.map((ponto) => pontosTotalP2.push(ponto))

    // console.log(dataGame.totalPointsP1, dataGame.totalPointsP2)

    //Atualiza o titulo do HEADER da página
    const routeID = dataGame.title
    const oldTitle = dataGame.oldTitle

    if (routeID == "Marcador") {
      if (oldTitle == "" || oldTitle == "Canastra") {
        dataGame.changeTitle("Canastra")
      } else {
        dataGame.changeTitle("Configurações")
      }
    }

    console.log(routeID)
    console.log(oldTitle)

    //Mostra uma mensagem de sucesso.
    Alert.alert("Sucesso", "pontos computados com sucesso!")

    //Voltar para a página principal
    navigation.goBack()
  }

  function handleClearParcialData() {
    Alert.alert(
      "Atenção",
      "você realmente deseja apagar os pontos da partida?",
      [
        {
          text: "Sim",
          onPress: () => {
            dataGame.clearMatchPoints(),
              Alert.alert("Sucesso", "Pontos apagados!")
          },
          style: "default",
        },
        {
          text: "Não",
          onPress: () => {
            console.log("Pontos não apagados"),
              Alert.alert("Atençao", "Pontos não apagados!")
          },
          style: "cancel",
        },
      ]
    )
  }

  function handleClearTotalData() {
    Alert.alert(
      "Atenção",
      "você realmente deseja apagar os pontos da estatística?",
      [
        {
          text: "Sim",
          onPress: () => {
            dataGame.clearAllPoints()
            dataGame.clearQtdVitorias()
            Alert.alert("Sucesso", "Pontos da estatística apagados!")
          },
          style: "default",
        },
        {
          text: "Não",
          onPress: () => {
            console.log("Pontos da estatística não apagados"),
              Alert.alert("Atençao", "Pontos da estatística não apagados!")
          },
          style: "cancel",
        },
      ]
    )
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
                onChangeText={setPontosP1}
                value={pontosP1}
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
                onChangeText={setCanastraLimpaP1}
                value={canastraLimpaP1}
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
                onChangeText={setCanastraSujaP1}
                value={canastraSujaP1}
              />
            </Input>
          </View>

          <View style={styles.point}>
            <Text style={styles.label}>bate:</Text>
            <Switch
              trackColor={{ false: "#767577", true: colors.spanishGray }}
              thumbColor={bateIsTrue ? colors.asparagus : "#f4f3f4"}
              onValueChange={() => setBateIsTrue(!bateIsTrue)}
              value={bateIsTrue}
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
                onChangeText={setPontosP2}
                value={pontosP2}
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
                onChangeText={setCanastraLimpaP2}
                value={canastraLimpaP2}
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
                onChangeText={setCanastraSujaP2}
                value={canastraSujaP2}
              />
            </Input>
          </View>

          <View style={styles.point}>
            <Text style={styles.label}>bate:</Text>
            <Switch
              trackColor={{ false: "#767577", true: colors.spanishGray }}
              thumbColor={!bateIsTrue ? colors.asparagus : "#f4f3f4"}
              onValueChange={() => setBateIsTrue(!bateIsTrue)}
              value={!bateIsTrue}
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
            onClick={handleAllPPoints}
          />

          <Line />

          <Button
            value="zerar pontos"
            bgColor={colors.spanishGray}
            onClick={handleClearParcialData}
          />
          <Button
            value="zerar estatísticas"
            bgColor={colors.spanishGray}
            onClick={handleClearTotalData}
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
