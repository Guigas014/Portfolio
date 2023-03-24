import React from 'react'; 
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { PlayerCard } from '../../components/PlayerCard';
import { MainScore } from '../../components/MainScore';
import { Header } from '../../components/Header';
 
import { styles } from './styles';  


export function Home() { 
  
  const { navigate } = useNavigation();

  return ( 
    <View style={styles.container}>
      <Header title="Dominó" />

      <PlayerCard name={"João"} player={1} />

      <MainScore />

      <PlayerCard name={"Maria"} player={2} />
    </View>
  ); 
}
