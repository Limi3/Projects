import React from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";

// accept productName, productPrice and productImage props directly
const ProductComp = ({ productName, productPrice, productImage }) => {
  return (
    <View style={styles.product}>
      <Image
      // for remote images pass { uri: 'https://...' } as productImage
      source={productImage ? productImage : require('../../assets/producti1.png')}
      style={styles.productImage}
      />
      <Text style={styles.productName}>{productName}</Text>
      <Text style={styles.productPrice}>${productPrice}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
product: {
    alignItems: 'center',
    margin: 10,
  },
productImage: {
    width: 100,
    height: 100,
  },
productName: {
    fontSize: 16,
    marginTop: 5,
  },
productPrice: {
    fontSize: 14,
    color: 'gray',
  }
});

export default ProductComp;