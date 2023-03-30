import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Home } from './src/components/Home';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text>OK! O deploy está funcionando muito bem obrigado!</Text>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
