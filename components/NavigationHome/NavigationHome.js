import React, { useEffect, useState } from "react";
import { Pressable, TextInput, View } from "react-native";
import styles from "./NavigationHome.styles";
import DefaultText from "../shared/DefaultText/DefaultText";

function NavigationHome() {
  const [value, setValue] = useState(0);
  const [text, setText] = useState(0);

  //   useEffect(() => {}, []);

  const handlePress = () => setValue((prev) => prev + 1);

  return (
    <View style={styles.container}>
      <DefaultText>{text}</DefaultText>
      <TextInput
        style={styles.input}
        placeholder="Type here..."
        value={text}
        onChangeText={(input) => setText(input)}
      />

      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "gray" : "red",
            padding: 10,
            borderRadius: 5,
          },
        ]}
        onPress={handlePress}
      >
        <DefaultText style={{ color: "white", textAlign: "center" }}>
          Click Me
        </DefaultText>
      </Pressable>
      <DefaultText>{value}</DefaultText>
    </View>
  );
}

export default NavigationHome;
