import React from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import ProductComp from "../components/productComp";

const ShopScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Shop Screen</Text>

      <View style={styles.productsContainer}>
        <ProductComp productName="Product 1" productPrice="99.99" productImage={require('../../assets/producti1.png')} />
        <ProductComp productName="Product 2" productPrice="89.99" productImage={require('../../assets/producti1.webp')} />
        <ProductComp productName="Product 3" productPrice="79.99" productImage={{ uri: 'https://static.vecteezy.com/system/resources/thumbnails/024/841/285/small_2x/wireless-headphone-isolated-on-transparent-background-high-quality-bluetooth-headphone-for-advertising-and-product-catalogs-generative-ai-png.png' }} />
        <ProductComp productName="Product 4" productPrice="69.99" />
      </View>

      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    marginBottom: 20
  },
   button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    width: 150,
    height: 50,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18
  },
  productsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  
});

export default ShopScreen;
