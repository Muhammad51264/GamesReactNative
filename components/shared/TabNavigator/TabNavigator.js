import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import tabs from "./constants";
import { colors } from "../../../colors";

function TabNavigator() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case "Home":
              iconName = focused ? "home" : "home-outline";
              break;
            case "Games":
              iconName = focused
                ? "game-controller"
                : "game-controller-outline";
              break;
            case "Settings":
              iconName = focused ? "settings" : "settings-outline";
              break;
            default:
              iconName = focused
                ? "information-circle"
                : "information-circle-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.whiteColor,
        tabBarInactiveTintColor: colors.unselectedColor,
        tabBarStyle: {
          backgroundColor: colors.primary,
          borderBlockColor: colors.whiteColor,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          paddingBottom: 30,
        },
      })}
    >
      {tabs.map((tab) => (
        <Tab.Screen key={tab.name} name={tab.name} component={tab.component} />
      ))}
    </Tab.Navigator>
  );
}

export default TabNavigator;
