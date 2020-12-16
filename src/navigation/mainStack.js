import React, { Fragment } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomStackNavigator from "./bottomStack";
import DessertScreen from '../screens/dessert/dessert';
import PizzaScreen from '../screens/pizza/pizza';
import ShakeScreen from "../screens/shake/shake";


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
        {/* <Stack.Screen name="Dessert" component={DessertScreen} />
        <Stack.Screen name="Pizza" component={PizzaScreen} />
        <Stack.Screen name="Shake" component={ShakeScreen} /> */}
      </Stack.Navigator>
    </Fragment>
  );
};

export default MainStackNavigator;
