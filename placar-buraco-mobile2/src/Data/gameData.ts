import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

type gameState = {
  namePlayer1: string
  namePlayer2: string
  parcialPointsP1: string[]
  parcialPointsP2: string[]
  saveNamesP1: (namePlayer1: string) => void
  saveNamesP2: (namePlayer2: string) => void
  saveParcialPointsP1: (parcialP1: string[]) => void
  saveParcialPointsP2: (parcialP2: string[]) => void
  clearAllPoints: () => void
}

export const useGameData = create<gameState>((set) => ({
  namePlayer1: "Player 1",
  namePlayer2: "Player 2",
  parcialPointsP1: [],
  parcialPointsP2: [],

  saveNamesP1: (nameP1: string) => set(() => ({ namePlayer1: nameP1 })),
  saveNamesP2: (nameP2: string) => set(() => ({ namePlayer2: nameP2 })),

  saveParcialPointsP1: (parcialP1: string[]) =>
    set(() => ({ parcialPointsP1: parcialP1 })),
  saveParcialPointsP2: (parcialP2: string[]) =>
    set(() => ({ parcialPointsP2: parcialP2 })),

  clearAllPoints: () =>
    set(() => ({ parcialPointsP1: [], parcialPointsP2: [] })),
}))
