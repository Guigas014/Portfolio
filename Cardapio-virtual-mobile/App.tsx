import { NativeBaseProvider, Box, StatusBar } from "native-base";
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
 
import { Home } from './src/screens/Home';
import { Loading } from './src/components/Loading';

import { THEME } from './styles/theme';



export default function App() {
  const [fontsLoad] = useFonts({ Roboto_400Regular, Roboto_500Medium, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>

      {
        fontsLoad ? <Home /> : <Loading />
      }

    </NativeBaseProvider>
  );
}

