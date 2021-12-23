import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigations/stacknavigator';
import Loading from './pages/Loading';

export default function App() {
  const [ready, setReady] = useState(false)
  return (
    ready ? (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
    ) : (<Loading/>)
  );
}


