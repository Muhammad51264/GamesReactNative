import { StyleSheet } from "react-native";
import { colors } from "../../colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20
  },
  text: {
    color: colors.whiteColor,
  },
  input: {
    backgroundColor: colors.whiteColor,
    padding: 10,
    borderRadius: 5,
    width: 200,
  },
});

export default styles;
