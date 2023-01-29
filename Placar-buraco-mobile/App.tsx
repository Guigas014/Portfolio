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

import React, { useEffect } from "react";
import { NativeBaseProvider, Box } from "native-base";

import {   } from './src/Teste';


export default function App() {
 

  return (
    <NativeBaseProvider>
      <Box>Hello world</Box> 
    </NativeBaseProvider>
  );
}
