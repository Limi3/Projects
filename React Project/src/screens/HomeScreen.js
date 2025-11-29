import React from "react";
import { Text, View, TouchableOpacity, StyleSheet, ImageBackground, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const HomeScreen = ({navigation}) => {
  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1200' }}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.overlay}>
          <View style={styles.content}>
            <Text style={styles.title}>TechStore</Text>
            <Text style={styles.subtitle}>Your Premier Electronics Destination</Text>
            
            <View style={styles.descriptionContainer}>
              <Text style={styles.description}>
                Welcome to TechStore, your one-stop shop for the latest and greatest in electronics. 
                We offer a wide selection of premium products including smartphones, laptops, 
                headphones, smart watches, gaming consoles, and much more.
              </Text>
              
              <Text style={styles.description}>
                Our mission is to provide you with cutting-edge technology at competitive prices, 
                backed by exceptional customer service. Whether you're looking for the latest 
                smartphone or a powerful gaming setup, we've got you covered.
              </Text>

              <View style={styles.featuresContainer}>
                <Text style={styles.featuresTitle}>Why Choose TechStore?</Text>
                <Text style={styles.feature}>✓ Premium Quality Products</Text>
                <Text style={styles.feature}>✓ Competitive Prices</Text>
                <Text style={styles.feature}>✓ Fast & Secure Shipping</Text>
                <Text style={styles.feature}>✓ 24/7 Customer Support</Text>
                <Text style={styles.feature}>✓ 30-Day Money-Back Guarantee</Text>
              </View>
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate("ElectronicsShop")}
              style={styles.shopButton}
            >
              <Text style={styles.shopButtonText}>🛒 Shop Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingTop: 60,
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  subtitle: {
    fontSize: 20,
    color: '#2ecc71',
    marginBottom: 30,
    textAlign: 'center',
    fontWeight: '600',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  descriptionContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 15,
    padding: 20,
    marginBottom: 30,
    width: '100%',
    maxWidth: 400,
  },
  description: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    marginBottom: 15,
    textAlign: 'justify',
  },
  featuresContainer: {
    marginTop: 10,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  featuresTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2ecc71',
    marginBottom: 12,
  },
  feature: {
    fontSize: 15,
    color: '#555',
    marginBottom: 8,
    lineHeight: 22,
  },
  shopButton: {
    backgroundColor: '#2ecc71',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  shopButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;
