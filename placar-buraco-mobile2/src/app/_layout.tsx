import { useRef, useState } from "react"
import { DrawerLayoutAndroid } from "react-native"
import { Slot } from "expo-router"
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter"
import { useGameData } from "@/Data/gameData"

import { Loading } from "@/components/Loading"
import { DrawerContent } from "@/components/DrawerContent"
import { Header } from "@/components/Header"

export default function Layout() {
  const [title, setTitle] = useState("Canastra")

  const drawer = useRef<DrawerLayoutAndroid>(null)
  const dataGame = useGameData()

  function updateTitle(newTitle: string) {
    // setTitle(newTitle)
    dataGame.changeOldTitle(dataGame.title)
    dataGame.changeTitle(newTitle)
  }

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
  })

  if (!fontsLoaded) {
    return <Loading />
  }

  //Conteúdo de dentro do drawer.
  const navigationView = () => (
    <DrawerContent
      onSelectPage={() => drawer.current?.closeDrawer()}
      changeTitle={updateTitle}
    />
  )

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition="right"
      renderNavigationView={navigationView}
    >
      <Header
        title={dataGame.title}
        openDrawer={() => drawer.current?.openDrawer()}
      />
      <Slot />
    </DrawerLayoutAndroid>
  )
}
