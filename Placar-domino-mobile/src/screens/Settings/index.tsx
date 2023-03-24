import React from 'react'; 
import { View, Text } from 'react-native';
 
import { Header } from '../../components/Header';

import { styles } from './styles';  


export function Settings() { 


  return ( 
    <View style={styles.container}>

      <Header title="Configurações" />

    </View>
  ); 
}
