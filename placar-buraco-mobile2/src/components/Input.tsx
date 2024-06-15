import { ReactNode } from "react"
import { TextInput, TextInputProps, View, StyleSheet } from "react-native"

import { font } from "@/styles/fontFamily"
import { colors } from "@/styles/Colors"

function Input({ children }: { children: ReactNode }) {
  return <View style={styles.container}>{children}</View>
}

function Field({ ...rest }: TextInputProps) {
  return <TextInput style={styles.input} {...rest} />
}

Input.Field = Field

export { Input }

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 80,
    maxWidth: 280,
    height: 40,
    padding: 5,

    borderBottomColor: colors.asparagus,
    borderBottomWidth: 2,
  },
  input: {
    flex: 1,
    color: colors.asparagus,
    fontSize: 20,
    fontFamily: font.medium,
  },
})
