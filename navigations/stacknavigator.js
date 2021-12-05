import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import Add from "../pages/add";
import Login from "../pages/login";
import Main from "../pages/main";
import My from "../pages/my";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Add" component={Add}/>
      <Stack.Screen name="Main" component={Main}/>
      <Stack.Screen name="My" component={My}/>
    </Stack.Navigator>
  );
};

export default StackNavigator;
