import React from "react";
import { ScrollView } from "react-native";
import defaultStyles from "./DefaultLayout.styles";
function DefaultLayout({ children, style }) {
  return (
    <ScrollView
      style={{
        ...defaultStyles.defaultBackground,
        ...style,
      }}
    >
      {children}
    </ScrollView>
  );
}

export default DefaultLayout;
