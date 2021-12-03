
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigations/stacknavigator';
import React from 'react';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  );
}


