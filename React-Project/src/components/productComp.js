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
    backgroundColor: "#0f172a",
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(46,204,113,0.12)",
  },
productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: "#131c2e",
  },
productName: {
    fontSize: 16,
    marginTop: 5,
    color: "#e2e8f0",
  },
productPrice: {
    fontSize: 14,
    color: '#2ecc71',
  }
});

export default ProductComp;