import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

type gameState = {
  title: string
  oldTitle: string
  namePlayer1: string
  namePlayer2: string
  parcialPointsP1: string[]
  parcialPointsP2: string[]
  totalPointsP1: string[]
  totalPointsP2: string[]
  qtdVitoriaP1: number
  qtdVitoriaP2: number
  changeTitle: (newTitle: string) => void
  changeOldTitle: (newOldTitle: string) => void
  saveNamesP1: (namePlayer1: string) => void
  saveNamesP2: (namePlayer2: string) => void
  saveParcialPointsP1: (parcialP1: string[]) => void
  saveParcialPointsP2: (parcialP2: string[]) => void
  updateTotalPointsP1: (totalP1: string[]) => void
  updateTotalPointsP2: (totalP2: string[]) => void
  clearAllPoints: () => void
  clearMatchPoints: () => void
  clearQtdVitorias: () => void
}

export const useGameData = create<gameState>((set) => ({
  title: "Canastra",
  oldTitle: "",
  namePlayer1: "Player 1",
  namePlayer2: "Player 2",
  parcialPointsP1: [],
  parcialPointsP2: [],
  totalPointsP1: [],
  totalPointsP2: [],
  qtdVitoriaP1: 0,
  qtdVitoriaP2: 0,

  changeTitle: (newTitle: string) => set(() => ({ title: newTitle })),
  changeOldTitle: (newOldTitle: string) =>
    set(() => ({ oldTitle: newOldTitle })),

  saveNamesP1: (nameP1: string) => set(() => ({ namePlayer1: nameP1 })),
  saveNamesP2: (nameP2: string) => set(() => ({ namePlayer2: nameP2 })),

  saveParcialPointsP1: (parcialP1: string[]) =>
    set(() => ({ parcialPointsP1: parcialP1 })),
  saveParcialPointsP2: (parcialP2: string[]) =>
    set(() => ({ parcialPointsP2: parcialP2 })),

  updateTotalPointsP1: (totalP1: string[]) =>
    set(() => ({ totalPointsP1: totalP1 })),
  updateTotalPointsP2: (totalP2: string[]) =>
    set(() => ({ totalPointsP1: totalP2 })),

  clearMatchPoints: () =>
    set(() => ({ parcialPointsP1: [], parcialPointsP2: [] })),
  clearAllPoints: () => set(() => ({ totalPointsP1: [], totalPointsP2: [] })),
  clearQtdVitorias: () => set(() => ({ qtdVitoriaP1: 0, qtdVitoriaP2: 0 })),
}))
