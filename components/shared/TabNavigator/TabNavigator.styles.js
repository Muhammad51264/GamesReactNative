import { StyleSheet } from "react-native";
import { colors } from "../../../colors";

const styles = StyleSheet.create({
  bottomHeader: {
    alignItems: "center",
    backgroundColor: colors.primary,
    bottom: 0,
    height: "10%",
    justifyContent: "center",
    left: 0,
    maxHeight: 50,
    padding: 10,
    position: "fixed",
    right: 0,

    shadowColor: "#ffffff",
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8.68,
    elevation: 10,

    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  headerText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default styles;
