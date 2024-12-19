import React from "react";
import { View } from "react-native";
import defaultStyles from "./DefaultLayout.styles";
function DefaultLayout({ children, style }) {
  return (
    <View
      style={{
        ...defaultStyles.defaultBackground,
        ...style,
      }}
    >
      {children}
    </View>
  );
}

export default DefaultLayout;
