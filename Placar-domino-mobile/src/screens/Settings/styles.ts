import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121214",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  label: {
    fontSize: 20,
    fontFamily: "DMSans_500Medium",
    color: "white",
    marginBottom: 10,
    marginTop: 20
  },
  input: {
    width: "80%",
    height: 45,
    marginBottom: 20,
    padding: 10,

    borderRadius: 8, 
    borderWidth: 2,
    backgroundColor:  "#323238",
    textDecorationLine: "none",

    fontSize: 18,
    fontFamily: "DMSans_400Regular",
    color: "white"
  },
  saveButton: {
    width: "50%",
    height: 45,
    padding: 12,
    marginTop: 30,
    marginBottom: 30,
    alignItems: "center",

    backgroundColor: "#8D8D99",
    borderRadius: 8
  },
  save: {
    fontSize: 16,
    fontFamily: "DMSans_700Bold",
    color: "#323238",
    textTransform: "uppercase"
  },
  manual: {
    fontSize: 16,
    fontFamily: "DMSans_400Regular",
    color: "white",
    textAlign: "justify",

    marginHorizontal: 25,  
    marginTop: 4,
    marginBottom: 2
  }
});
