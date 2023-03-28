import { useState, useEffect } from 'react'; 
import { View, Text, TouchableOpacity } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
 
import { styles } from './styles';  


type cardProps = {
  name: string;
  player: number;
  parcialScore1?: number;
  parcialScore2?: number;
  changeScores: (name: string) => void;
  clearParcialScore: () => void;
}


export function PlayerCard({ 
  name, 
  player, 
  parcialScore1, 
  parcialScore2,
  changeScores,
  clearParcialScore 
}: cardProps) { 

  //Gesto de toque simples que chama a função que incrementa o placar parcial.
  const onTop = Gesture  
    .Tap()
    .onStart(event => changeScores(name));

  //Gesto de toque longo que chama a função que zera o placar parcial.
  const onLongPress = Gesture
    .LongPress()
    .minDuration(200)
    .onStart(clearParcialScore);  


  return ( 
    <View 
      style={[
        styles.card,
        player === 1 ? {borderColor: "#31A9DE"} : {borderColor: "#E53A40"}
      ]}
    >
      <Text style={styles.playerName}>{name}</Text>
        
      <GestureDetector gesture={Gesture.Simultaneous(onTop, onLongPress)}>
        <TouchableOpacity 
          style={styles.parcialScoreButton}
          activeOpacity={0.7}
          //onPress={event => changeScores(name)}
        >
          <Text style={styles.playerParcialScore}>
            {
              player === 1 ? parcialScore1 : parcialScore2
            }
          </Text>
        </TouchableOpacity>
      </GestureDetector>
    </View>
  ); 
}
