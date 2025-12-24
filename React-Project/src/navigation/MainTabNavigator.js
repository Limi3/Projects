import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/HomeScreen';
import ElectronicsStack from './ElectronicsStack';
import AboutScreen from '../screens/aboutScreen';
import CartScreen from '../screens/CartScreen';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#2ecc71',
        tabBarInactiveTintColor: '#94a3b8',
        tabBarStyle: {
          backgroundColor: '#0f172a',
          borderTopWidth: 1,
          borderTopColor: 'rgba(46,204,113,0.12)',
          paddingBottom: 6,
          paddingTop: 6,
          height: 62,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
        headerStyle: {
          backgroundColor: '#0f172a',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          headerShown: true,
          headerTitle: 'TechStore',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.getParent()?.openDrawer()}
              style={{ marginLeft: 15 }}
            >
              <MaterialCommunityIcons
                name="menu"
                size={28}
                color="#fff"
              />
            </TouchableOpacity>
          ),
        })}
      />
      <Tab.Screen
        name="ElectronicsShop"
        component={ElectronicsStack}
        options={{
          tabBarLabel: 'Shop',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="store" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={({ navigation }) => ({
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cart" color={color} size={size} />
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.getParent()?.openDrawer()}
              style={{ marginLeft: 15 }}
            >
              <MaterialCommunityIcons
                name="menu"
                size={28}
                color="#fff"
              />
            </TouchableOpacity>
          ),
        })}
      />
      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={({ navigation }) => ({
          tabBarLabel: 'About',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="information" color={color} size={size} />
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.getParent()?.openDrawer()}
              style={{ marginLeft: 15 }}
            >
              <MaterialCommunityIcons
                name="menu"
                size={28}
                color="#fff"
              />
            </TouchableOpacity>
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;

