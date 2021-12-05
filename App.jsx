import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigations/stacknavigator';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  );
}


