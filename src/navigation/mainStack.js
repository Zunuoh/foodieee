import React, { Fragment } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomStackNavigator from "./bottomStack";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Fragment>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="main" component={BottomStackNavigator} />
      </Stack.Navigator>
    </Fragment>
  );
};

export default MainStackNavigator;
