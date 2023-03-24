import React from 'react'; 
import { View, Text, TouchableOpacity } from 'react-native';
 
import { styles } from './styles';  


export function MainScore() { 

  return ( 
    <View style={styles.container}>
      <Text style={styles.totalScore}>0</Text>

      <TouchableOpacity
        activeOpacity={0.4}
        onPress={() => {}}
      >
        <Text style={styles.clearScore}>x</Text>
      </TouchableOpacity>

      <Text style={styles.totalScore}>0</Text>
    </View>
  ); 
}
