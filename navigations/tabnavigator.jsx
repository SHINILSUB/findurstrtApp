import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Add from '../pages/add';
import Main from '../pages/main';
import My from '../pages/my';

const Tabs = createBottomTabNavigator();

const TabNavigator = ({ navigation, route }) => {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        showLabel: true,
        style: {
          backgroundColor: '#fff',
          borderTopColor: '#eee',
          height: 40,
          fontSize: 10,
        },
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tabs.Screen name="Main" component={Main} />
      <Tabs.Screen name="Add" component={Add} />
      <Tabs.Screen name="My" component={My} />
    </Tabs.Navigator>
  );
};

export default TabNavigator;