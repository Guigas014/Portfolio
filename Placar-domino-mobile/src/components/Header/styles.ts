import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  header: {
    backgroundColor: "#121214",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    gap: 40,
    width: "100%",
    paddingBottom: 20
  },
  settingsButton: {
    alignItems: "center",
    justifyContent: "center",
    //backgroundColor: "lightblue",
    padding: 2,
    width: 30,
    height: 30
  },
  backButton: {
    alignItems: "center",
    justifyContent: "center",
    //backgroundColor: "lightblue",
    padding: 2,
    width: 30,
    height: 30
  },
  title: {
    color: "#C2C2C2",
    fontFamily: "DMSans_700Bold",
    fontSize: 22,
    textTransform: "uppercase",

    marginTop: 90,
  }
});
