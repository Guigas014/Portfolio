import { StatusBar, StyleSheet, View } from 'react-native';

import { 
  useFonts, 
  DMSans_400Regular, 
  DMSans_500Medium, 
  DMSans_700Bold 
} from '@expo-google-fonts/dm-sans';

import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';


export default function App() {

const [fontsLoaded] = useFonts({
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold
});

 if (!fontsLoaded) {      
   return ( <Loading /> );
 }

 return (
   <>
     <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

     <Routes />
   </>
 );
}



