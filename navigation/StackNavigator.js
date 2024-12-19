import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StatusBar } from "react-native";
import TabNavigator from "../components/shared/TabNavigator/TabNavigator";

function StackNavigator() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <TabNavigator />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

export default StackNavigator;
