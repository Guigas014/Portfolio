import { useState } from 'react'

import { Header } from './Components/Header' 
import { MenuList } from './Components/MenuList' 
import { Banner } from './Components/Banner' 
import { Menu } from './Components/Menu' 

import './styles/global.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <MenuList />

      <Banner />
      <Menu />
    </>
  )
}

export default App
