import { useState } from 'react'

import { Header } from './Components/Header' 
import { MenuList } from './Components/MenuList' 
import { Banner } from './Components/Banner' 
import { Menu } from './Components/Menu' 
import { TopButton } from './Components/TopButton' 

import './styles/global.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <MenuList />

      <Banner />
      <Menu />

      <TopButton />
    </>
  )
}

export default App
