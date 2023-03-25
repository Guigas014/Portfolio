import React from 'react'; 
import { View, Text, TouchableOpacity } from 'react-native';
 
import { styles } from './styles';  


type cardProps = {
  name: string;
  player: number;
}

export function PlayerCard({ name, player }: cardProps) { 

  return ( 
    <View 
      style={[
        styles.card,
        player === 1 ? {borderColor: "#31A9DE"} : {borderColor: "#E53A40"}
      ]}
    >
      <Text style={styles.playerName}>{name}</Text>
        
      <TouchableOpacity 
        style={styles.parcialScoreButton}
        activeOpacity={0.7}
        onPress={() => {}}
      >
          <Text style={styles.playerParcialScore}>{player}</Text>
      </TouchableOpacity>
    </View>
  ); 
}
