import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import { CartProvider } from './src/context/CartContext';

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </CartProvider>
  );
}

