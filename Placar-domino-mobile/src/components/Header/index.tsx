import React from 'react'; 
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
 
import { styles } from './styles';  


type headerProps = {
  title: string;
}

export function Header({ title }: headerProps) { 

  const { goBack, navigate } = useNavigation();

  return ( 
    <View style={styles.header}>
      {
        title === "Configurações" ?
          <TouchableOpacity
            style={styles.backButton}
            activeOpacity={0.7}
            onPress={() => goBack()}
          >
            <Feather name="arrow-left" size={20} color="#FFF" />
          </TouchableOpacity>
        :
          null
      }

      <Text style={styles.title}>{title}</Text>

      {
        title === "Dominó" ?
          <TouchableOpacity
            style={styles.settingsButton}
            activeOpacity={0.7}
            onPress={() => navigate('settings')}
          >
            <Feather name="settings" size={20} color="#FFF" />
          </TouchableOpacity>
        :
          null
      }
    </View>
  ); 
}
