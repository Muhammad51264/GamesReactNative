import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 400,
    paddingHorizontal: 10,
    backgroundColor: "white",
    marginBottom: 10,
    borderRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    position: "relative",
    overflow: "hidden",
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },

  titleWrapper: {
    width: "100%",
    height: "20%",
    position: "absolute",
    bottom: 0,
    left: 0,
    padding: 10,
  },
});

export default styles;
