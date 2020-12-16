import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthStackNavigator from "./src/navigation/authStack";
import MainStackNavigator from "./src/navigation/mainStack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="auth" component={AuthStackNavigator} />
        <Stack.Screen name="core" component={MainStackNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
