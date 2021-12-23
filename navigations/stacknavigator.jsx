import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../pages/login";
import Detail from '../pages/detail';
import TabNavigator from './tabnavigator';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="tabnavigator" component={TabNavigator}/>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Detail" component={Detail}/>
    </Stack.Navigator>
  );
};

export default StackNavigator;
