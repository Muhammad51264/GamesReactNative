import React from "react";
import { View, Image } from "react-native";
import DefaultText from "../shared/DefaultText/DefaultText";
import styles from "./SimpleCard.styles";
import { BlurView } from "expo-blur";

const textStyles = {
  color: "white",
  textAlign: "center",
  fontSize: 20,
  fontWeight: "bold",
  textShadowColor: "rgba(0, 0, 0, 0.75)",
  textShadowOffset: { width: 2, height: 2 },
  textShadowRadius: 5,
};

function SimpleCard({ name, image, id, rating }) {
  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />
      <BlurView style={styles.titleWrapper} intensity={20} tint="light">
        <DefaultText style={textStyles}>{name}</DefaultText>
        <DefaultText style={textStyles}>{rating}</DefaultText>
      </BlurView>
    </View>
  );
}

export default SimpleCard;
