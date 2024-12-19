import React from "react";
import { Text } from "react-native";
import defaultStyles from "./DefaultText.styles";
function DefaultText({ children, style }) {
  return (
    <Text
      style={{
        ...defaultStyles.defaultFontStyle,
        ...style,
      }}
    >
      {children}
    </Text>
  );
}

export default DefaultText;
