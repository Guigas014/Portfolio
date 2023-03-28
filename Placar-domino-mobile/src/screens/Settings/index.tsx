import { useState } from 'react'; 
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
 
import { Header } from '../../components/Header';

import { styles } from './styles';  


export let NAMEPLAYER1 = "Player 1"; 
export let NAMEPLAYER2 = "Player 2"; 


export function Settings() { 
  const [namePlayer1, setNamePlayer1] = useState<string>(NAMEPLAYER1);
  const [namePlayer2, setNamePlayer2] = useState<string>(NAMEPLAYER2);
  const [inputBorder1, setInputBorder1] = useState(false);
  const [inputBorder2, setInputBorder2] = useState(false);
    
  function handleChangeName() {
    if (namePlayer1 !== "" && namePlayer2 !== "") {
      NAMEPLAYER1 = namePlayer1;
      NAMEPLAYER2 = namePlayer2;

      Alert.alert("OK", "Os nomes foram alterados!");
    } 
    else {
      Alert.alert("Ops!", "Algum nome está em branco!");
    }
  }    


  return ( 
    <View style={styles.container}>
      <Header title="Configurações" />
    
      <Text style={styles.label}>Nome do player 1</Text>
      <TextInput 
        style={[ 
          styles.input,
          inputBorder1 === true ? {borderColor: "#31A9DE"} : null 
        ]}
        onFocus={() => setInputBorder1(true)}
        onBlur={() => setInputBorder1(false)}
        onChangeText={setNamePlayer1}
        value={namePlayer1}
      />

      <Text style={styles.label}>Nome do player 2</Text>
      <TextInput 
        style={[ 
          styles.input,
          inputBorder2 === true ? {borderColor: "#E53A40"} : null 
        ]}
        onFocus={() => setInputBorder2(true)}
        onBlur={() => setInputBorder2(false)}
        onChangeText={setNamePlayer2}
        value={namePlayer2}
      />

      <TouchableOpacity 
        style={styles.saveButton}
        activeOpacity={0.7}
        onPress={handleChangeName}
      >
        <Text style={styles.save}>Salvar</Text>
      </TouchableOpacity>


      <Text style={styles.label}>Manual</Text>

      <Text style={styles.manual}>
        Para marcar 1 ponto, de um toque simples no 
        campo do "Ponto" do Jogador desejado.
      </Text>
      
      <Text style={styles.manual}>
        Para zerar o ponto marcado, toque e seguro
        por um tempo o campo do "Ponto" do Jogador desejado.
      </Text>
      
      <Text style={styles.manual}>
        Para zerar os pontos "Totais", de um toque simples no 
        <Text style={{ color: "yellow", fontWeight: "bold" }}> X </Text> 
        no meio da tela.
      </Text>

      <Text style={styles.manual}>
        Os pontos "Totais" no centro da tela 
        aumentam sozinhos.
      </Text>
      
    </View>
  ); 
}
