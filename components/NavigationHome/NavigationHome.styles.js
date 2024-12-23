import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    gap: 15,
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "",
  },
  iconWithShadow: {
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },

});

export default styles;
