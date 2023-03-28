import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    height: "14%",
    marginTop: 22,
    marginBottom: 22,

    borderRadius: 8,
    borderLeftWidth: 8,
    borderRightWidth: 8,
  },
  playerName: {
    textAlign: "center",
    width: "100%",
    height: "50%",
    padding: 16,
    backgroundColor: "#323238",

    fontSize: 20,
    fontFamily: "DMSans_500Medium",
    color: "white"
  },
  parcialScoreButton: {
    width: "100%",
    height: "50%",
    padding: 18,
    backgroundColor: "#8D8D99",

  },
  playerParcialScore: {
    textAlign: "center",

    fontSize: 20,
    fontFamily: "DMSans_700Bold",
    color: "#323238"
  },
});
