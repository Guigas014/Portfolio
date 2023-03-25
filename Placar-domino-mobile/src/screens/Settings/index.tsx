import { useState } from 'react'; 
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
 
import { Header } from '../../components/Header';

import { styles } from './styles';  


export function Settings() { 
  const [namePlayer1, setNamePlayer1] = useState<string>("");
  const [namePlayer2, setNamePlayer2] = useState<string>("");
  const [inputBorder1, setInputBorder1] = useState(false);
  const [inputBorder2, setInputBorder2] = useState(false);
    
    

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
        onPress={() => {}}
      >
        <Text style={styles.save}>Salvar</Text>
      </TouchableOpacity>
    </View>
  ); 
}
