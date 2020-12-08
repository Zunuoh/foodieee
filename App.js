import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/LoginScreen'; 
import HomeScreen from './src/HomeScreen';
import DessertScreen from './src/DessertScreen';
import ShakeScreen from './src/ShakeScreen';
import PizzaScreen from './src/PizzaScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Fragment } from 'react';
import {FontAwesome, Ionicons} from '@expo/vector-icons';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainSectionTab = () =>{
  return(
  
       <Tab.Navigator  tabBarOptions={{
      activeTintColor: '#000',
      inactiveTintColor: '#ccc',
    }}>
    <Tab.Screen name ="Home" component={HomeScreen} options={{
          tabBarIcon: ({color,size})=> (
            <FontAwesome name="home" color="black" size={24}/>
            )
        }}/>
    <Tab.Screen name="Login" component={LoginScreen} options={{
          tabBarIcon: ({focused})=> (
            <Ionicons name="ios-apps" color="black" size={24}/>
            )
        }}/>
    <Tab.Screen name="Dessert" component={DessertScreen}  options={{
        tabBarIcon: ({focused})=> (
          <Ionicons name="logo-buffer" color="black" size={24}/>
          )
      }}/>
      <Tab.Screen name="Shake" component={ShakeScreen} options={{
        tabBarIcon: ({focused})=> (
          <Ionicons name="ios-cart" color="black" size={24}/>
          )
      }}/>
        
    </Tab.Navigator>

    
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Main" component={MainSectionTab} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Desert" component={DessertScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Shake" component={ShakeScreen} options={{headerShown:false}}/>
          <Stack.Screen name="Pizza" component={PizzaScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    // <LoginScreen/>
    // <DessertScreen/>
    // <HomeScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
