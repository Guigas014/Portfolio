import { useState } from 'react'; 
import { View, Text, TouchableOpacity } from 'react-native';
 
import { styles } from './styles';  


type MainScoreProps = {
  totalScore1: number;
  totalScore2: number;
  clearTotalScore: () => void;
}

export function MainScore({ 
  totalScore1, 
  totalScore2,
  clearTotalScore 
}: MainScoreProps) { 
    


  return ( 
    <View style={styles.container}>
      <Text style={styles.totalScore}>{totalScore1}</Text>

      <TouchableOpacity
        activeOpacity={0.4}
        onPress={clearTotalScore}
      >
        <Text style={styles.clearScore}>x</Text>
      </TouchableOpacity>

      <Text style={styles.totalScore}>{totalScore2}</Text>
    </View>
  ); 
}
