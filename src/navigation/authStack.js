import React, { Fragment } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/auth/login";

const Stack = createStackNavigator();

const AuthStackNavigator = () => {
  return (
    <Fragment>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </Fragment>
  );
};

export default AuthStackNavigator;
