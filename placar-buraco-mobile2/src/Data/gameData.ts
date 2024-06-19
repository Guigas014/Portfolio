import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

type gameState = {
  namePlayer1: string
  namePlayer2: string
  saveNamesP1: (namePlayer1: string) => void
  saveNamesP2: (namePlayer2: string) => void
}

export const useGameData = create<gameState>((set) => ({
  namePlayer1: "Player 1",
  namePlayer2: "Player 2",

  saveNamesP1: (nameP1: string) => set(() => ({ namePlayer1: nameP1 })),
  saveNamesP2: (nameP2: string) => set(() => ({ namePlayer2: nameP2 })),
}))
