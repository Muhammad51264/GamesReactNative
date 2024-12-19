import React from "react";
import DefaultText from "../DefaultText/DefaultText";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from "../../../colors";
import pageIcons from "./constants";
import { View } from "react-native";
import styles from "./ScreenTitle.style";
function ScreenTitle({ name }) {
  return (
    <View style={styles.layout}>
      <Ionicons name={pageIcons[name]} size={30} color={colors.whiteColor} />
      <DefaultText style={{ fontSize: 20, fontWeight: "bold", paddingTop: 3 }}>
        {name}
      </DefaultText>
    </View>
  );
}

export default ScreenTitle;
