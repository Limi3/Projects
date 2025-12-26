import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import productImages from "../data/productImages";

const ProductCard = ({ product, onPress }) => {
  const localImage = productImages[product.name];
  const imageSource = localImage ? localImage : { uri: product.image };

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
      <Image 
        source={imageSource} 
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name} numberOfLines={2}>{product.name}</Text>
        <Text style={styles.category}>{product.category}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>${product.price.toFixed(2)}</Text>
          <Text style={styles.rating}>⭐ {product.rating}</Text>
        </View>
        <Text style={styles.stock}>In Stock: {product.stock}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'transparent',
    borderRadius: 12,
    marginBottom: 16,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 220,
    backgroundColor: 'rgba(15, 23, 42, 0.6)',
    alignSelf: 'center',
  },
  infoContainer: {
    padding: 14,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#e2e8f0',
  },
  category: {
    fontSize: 12,
    color: '#94a3b8',
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2ecc71',
  },
  rating: {
    fontSize: 12,
    color: '#f2c94c',
  },
  stock: {
    fontSize: 11,
    color: '#94a3b8',
    marginTop: 4,
  },
});

export default ProductCard;

