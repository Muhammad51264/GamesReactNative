import React from "react";
import { Pressable, View } from "react-native";
import styles from "./NavigationHome.styles";
import DefaultText from "../shared/DefaultText/DefaultText";
import NavElements from "./constants";
import Ionicons from "react-native-vector-icons/Ionicons";

function NavigationHome() {
  return (
    <View style={styles.container}>
      {NavElements.map((nav) => (
        <Pressable
          key={nav.name}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? nav.pressedColor : nav.color,
              borderRadius: 5,
              aspectRatio: 1,
              alignItems: "center",
              justifyContent: "center",
              width: "45%",
              shadowColor: nav.shadowColor,
              shadowOffset: {
                width: 4,
                height: 4,
              },
              shadowOpacity: 1.18,
              shadowRadius: 1.0,

              elevation: 1,
            },
          ]}
        >
          <Ionicons
            name={nav.icon}
            size={40}
            color={"white"}
            style={styles.iconWithShadow}
          />
          <DefaultText
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 20,
              fontWeight: "bold",
              textShadowColor: "rgba(0, 0, 0, 0.75)",
              textShadowOffset: { width: 2, height: 2 },
              textShadowRadius: 5,
            }}
          >
            {nav.name}
          </DefaultText>
        </Pressable>
      ))}
    </View>
  );
}

export default NavigationHome;
