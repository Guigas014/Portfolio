import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  header: {
    backgroundColor: "#121214",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    width: "100%",
    paddingBottom: 10,

    position: "relative"
  },
  settingsButton: {
    position: "absolute",
    right: 30,
    top: 95
  },
  backButton: {
    position: "absolute",
    left: 30,
    top: 96
    //alignItems: "center",
    //justifyContent: "center",
    //backgroundColor: "lightblue",
    //padding: 2,
    //width: 30,
    //height: 30
  },
  title: {
    color: "#C2C2C2",
    fontFamily: "DMSans_700Bold",
    fontSize: 22,
    textTransform: "uppercase",

    marginTop: 90,
  }
});
