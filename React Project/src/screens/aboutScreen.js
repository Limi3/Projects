import React from "react";
import { Text, View, ScrollView, StyleSheet, ImageBackground } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AboutScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200' }}
        style={styles.headerImage}
        resizeMode="cover"
      >
        <View style={styles.headerOverlay}>
          <Text style={styles.headerTitle}>About TechStore</Text>
        </View>
      </ImageBackground>

      <View style={styles.content}>
        <View style={styles.section}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons name="store" size={40} color="#2ecc71" />
          </View>
          <Text style={styles.sectionTitle}>Our Story</Text>
          <Text style={styles.sectionText}>
            TechStore was founded with a simple mission: to make cutting-edge technology 
            accessible to everyone. Since our inception, we've been committed to providing 
            premium electronics at competitive prices, backed by exceptional customer service.
          </Text>
        </View>

        <View style={styles.section}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons name="target" size={40} color="#2ecc71" />
          </View>
          <Text style={styles.sectionTitle}>Our Mission</Text>
          <Text style={styles.sectionText}>
            We strive to be your trusted partner in technology, offering the latest 
            innovations from leading brands while maintaining the highest standards of 
            quality and customer satisfaction.
          </Text>
        </View>

        <View style={styles.section}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons name="star-circle" size={40} color="#2ecc71" />
          </View>
          <Text style={styles.sectionTitle}>Why Choose Us</Text>
          <View style={styles.featureList}>
            <View style={styles.featureItem}>
              <MaterialCommunityIcons name="check-circle" size={24} color="#2ecc71" />
              <Text style={styles.featureText}>Premium Quality Products</Text>
            </View>
            <View style={styles.featureItem}>
              <MaterialCommunityIcons name="check-circle" size={24} color="#2ecc71" />
              <Text style={styles.featureText}>Competitive Pricing</Text>
            </View>
            <View style={styles.featureItem}>
              <MaterialCommunityIcons name="check-circle" size={24} color="#2ecc71" />
              <Text style={styles.featureText}>Fast & Secure Shipping</Text>
            </View>
            <View style={styles.featureItem}>
              <MaterialCommunityIcons name="check-circle" size={24} color="#2ecc71" />
              <Text style={styles.featureText}>24/7 Customer Support</Text>
            </View>
            <View style={styles.featureItem}>
              <MaterialCommunityIcons name="check-circle" size={24} color="#2ecc71" />
              <Text style={styles.featureText}>30-Day Money-Back Guarantee</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons name="phone" size={40} color="#2ecc71" />
          </View>
          <Text style={styles.sectionTitle}>Contact Us</Text>
          <View style={styles.contactInfo}>
            <View style={styles.contactItem}>
              <MaterialCommunityIcons name="email" size={20} color="#666" />
              <Text style={styles.contactText}>support@techstore.com</Text>
            </View>
            <View style={styles.contactItem}>
              <MaterialCommunityIcons name="phone" size={20} color="#666" />
              <Text style={styles.contactText}>1-800-TECHSTORE</Text>
            </View>
            <View style={styles.contactItem}>
              <MaterialCommunityIcons name="map-marker" size={20} color="#666" />
              <Text style={styles.contactText}>123 Tech Street, Digital City</Text>
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2024 TechStore. All rights reserved.</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  headerImage: {
    width: "100%",
    height: 200,
    justifyContent: "flex-end",
  },
  headerOverlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 20,
    paddingBottom: 30,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  content: {
    padding: 20,
  },
  section: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  iconContainer: {
    alignItems: "center",
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 12,
    textAlign: "center",
  },
  sectionText: {
    fontSize: 16,
    color: "#666",
    lineHeight: 24,
    textAlign: "justify",
  },
  featureList: {
    marginTop: 10,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  featureText: {
    fontSize: 16,
    color: "#666",
    marginLeft: 12,
  },
  contactInfo: {
    marginTop: 10,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  contactText: {
    fontSize: 16,
    color: "#666",
    marginLeft: 12,
  },
  footer: {
    padding: 20,
    alignItems: "center",
  },
  footerText: {
    fontSize: 14,
    color: "#999",
  },
});

export default AboutScreen;
