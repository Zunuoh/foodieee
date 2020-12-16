import React, { Fragment } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/home/home";
import DessertScreen from "../screens/dessert/dessert";
import ShakeScreen from "../screens/shake/shake";
import NewOne from '../screens/new1/new1';
import NewTwo from '../screens/new2/new2'

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
          name="NewOne"
          component={NewOne}
          options={{
            tabBarIcon: () => (
              <Ionicons name="logo-buffer" color="black" size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="NewTwo"
          component={NewTwo}
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
