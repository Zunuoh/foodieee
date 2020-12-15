import React, { Fragment } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/home/home";
import DessertScreen from "../screens/dessert/dessert";
import ShakeScreen from "../screens/shake/shake";

const Tab = createBottomTabNavigator();

const BottomStackNavigator = () => {
  return (
    <Fragment>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "#000",
          inactiveTintColor: "#ccc",
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: () => (
              <FontAwesome name="home" color="black" size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Dessert"
          component={DessertScreen}
          options={{
            tabBarIcon: () => (
              <Ionicons name="logo-buffer" color="black" size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Shake"
          component={ShakeScreen}
          options={{
            tabBarIcon: () => (
              <Ionicons name="ios-cart" color="black" size={24} />
            ),
          }}
        />
      </Tab.Navigator>
    </Fragment>
  );
};

export default BottomStackNavigator;
