import React from 'react';
import {HomeStack, AboutStack} from './StackNavigator';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator 
      tabBarOptions={{
        activeTintColor: '#f4501eff',
        inactiveTintColor: 'gray',
        style: { backgroundColor: '#fff' },
        labelStyle: { fontSize: 12 },
      }}
    >
        <Tab.Screen 
          name="Home" 
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
          name="About" 
          component={AboutStack}
          options={{
            tabBarLabel: 'About',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="information" color={color} size={size} />
            ),
          }}
        />
    </Tab.Navigator>
    );
}

export default TabNavigator;