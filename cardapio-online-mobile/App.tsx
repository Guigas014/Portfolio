//import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View } from 'react-native';

//export default function App() {
  //return (
    //<View style={styles.container}>
      //<Text>Open up App.tsx to start working on your app!</Text>
      //<StatusBar style="auto" />
    //</View>
  //);
//}

//const styles = StyleSheet.create({
  //container: {
    //flex: 1,
    //backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  //},
//});

import React from "react";
import { NativeBaseProvider, Box, Text } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="black" alignItems="center" justifyContent="center">
        <Text color="#477788" fontSize={20} fontWeight="bold">Hello world</Text>
      </Box>
    </NativeBaseProvider>
  );
}

