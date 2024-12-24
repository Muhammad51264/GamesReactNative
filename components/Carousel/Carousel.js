import React from "react";
import { View } from "react-native";
import styles from "./Carousel.styles";

function Carousel({ children }) {
  return <View style={styles.container}>{children}</View>;
}

export default Carousel;
