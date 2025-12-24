import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { DrawerContentScrollView } from '@react-navigation/drawer';

const CustomDrawerContent = (props) => {
  const navigateToTab = (tabName) => {
    props.navigation.navigate('MainTabs', { screen: tabName });
    props.navigation.closeDrawer();
  };

  return (
    <DrawerContentScrollView {...props} style={styles.drawer}>
      <View style={styles.drawerHeader}>
        <Text style={styles.drawerTitle}>TechStore</Text>
      </View>
      
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigateToTab('Home')}
      >
        <MaterialCommunityIcons name="home" size={24} color="#2ecc71" />
        <Text style={styles.drawerLabel}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigateToTab('ElectronicsShop')}
      >
        <MaterialCommunityIcons name="store" size={24} color="#2ecc71" />
        <Text style={styles.drawerLabel}>Shop</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigateToTab('Cart')}
      >
        <MaterialCommunityIcons name="cart" size={24} color="#2ecc71" />
        <Text style={styles.drawerLabel}>Cart</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigateToTab('About')}
      >
        <MaterialCommunityIcons name="information" size={24} color="#2ecc71" />
        <Text style={styles.drawerLabel}>About</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  drawerHeader: {
    padding: 20,
    paddingTop: 60,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(46,204,113,0.12)',
    marginBottom: 10,
  },
  drawerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#e2e8f0',
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    paddingLeft: 20,
  },
  drawerLabel: {
    fontSize: 16,
    marginLeft: 15,
    color: '#e2e8f0',
  },
});

export default CustomDrawerContent;

