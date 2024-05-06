import { useRef, useState } from "react"
import { DrawerLayoutAndroid } from "react-native"
import { Slot } from "expo-router"
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter"

import { Loading } from "@/components/Loading"
import { DrawerContent } from "@/components/DrawerContent"
import { Header } from "@/components/Header"

export default function Layout() {
  const drawer = useRef<DrawerLayoutAndroid>(null)

  const [title, setTitle] = useState("Canastra")

  function updateTitle(newTitle: string) {
    setTitle(newTitle)
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
      <Header title={title} openDrawer={() => drawer.current?.openDrawer()} />
      <Slot />
    </DrawerLayoutAndroid>
  )
}
