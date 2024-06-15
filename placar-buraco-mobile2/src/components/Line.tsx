import { colors } from "@/styles/Colors"
import { View } from "react-native"

export function Line() {
  return (
    <View
      style={{
        borderTopColor: colors.lavenderGray,
        borderTopWidth: 2,
        width: 300,
      }}
    />
  )
}
