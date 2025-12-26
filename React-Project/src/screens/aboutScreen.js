import React from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AboutScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        <Text style={styles.introText}>
          To be your trusted partner in technology— guiding every purchase with expertise, transparent pricing, and human support when you need it.
        </Text>

        <View style={styles.dualRow}>
          <View style={[styles.card, styles.half]}>
            <View style={styles.iconCircle}>
              <MaterialCommunityIcons name="star" size={28} color="#2ecc71" />
            </View>
            <Text style={styles.cardTitle}>Why Choose Us</Text>
            <View style={styles.featureList}>
              <Feature text="Premium, vetted catalog" />
              <Feature text="Fair pricing & promos" />
              <Feature text="Insured, fast shipping" />
              <Feature text="24/7 human support" />
              <Feature text="30-day hassle-free returns" />
            </View>
          </View>

          <View style={[styles.card, styles.half]}>
            <View style={styles.iconCircle}>
              <MaterialCommunityIcons name="headset" size={28} color="#2ecc71" />
            </View>
            <Text style={styles.cardTitle}>We're Here to Help</Text>
            <Text style={styles.cardText}>
              Need sizing advice, compatibility checks, or order help? Our specialists respond fast across chat, email, and phone.
            </Text>
            <View style={styles.contactInfo}>
              <Contact icon="email" text="support@techstore.com" />
              <Contact icon="phone" text="1-800-TECHSTORE" />
              <Contact icon="map-marker" text="123 Tech Street, Digital City" />
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2024 TechStore. Crafted with care for tech lovers.</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const Feature = ({ text }) => (
  <View style={styles.featureItem}>
    <MaterialCommunityIcons name="check-circle" size={22} color="#2ecc71" />
    <Text style={styles.featureText}>{text}</Text>
  </View>
);

const Contact = ({ icon, text }) => (
  <View style={styles.contactItem}>
    <MaterialCommunityIcons name={icon} size={20} color="#2ecc71" />
    <Text style={styles.contactText}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
  },
  content: {
    padding: 20,
    paddingTop: 16,
  },
  introText: {
    fontSize: 15,
    color: "#e2e8f0",
    lineHeight: 22,
    marginBottom: 20,
    textAlign: "left",
  },
  card: {
    backgroundColor: "#0f172a",
    borderRadius: 14,
    padding: 20,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: "rgba(46,204,113,0.12)",
  },
  dualRow: {
    flexDirection: "column",
    marginBottom: 20,
  },
  half: {
    width: "100%",
  },
  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#0f172a",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 14,
    alignSelf: "center",
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#e2e8f0",
    marginBottom: 12,
    textAlign: "center",
  },
  cardText: {
    fontSize: 14,
    color: "#e2e8f0",
    lineHeight: 20,
    textAlign: "left",
    marginBottom: 12,
  },
  featureList: {
    marginTop: 4,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  featureText: {
    fontSize: 14,
    color: "#e2e8f0",
    marginLeft: 10,
    flexShrink: 1,
  },
  contactInfo: {
    marginTop: 8,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  contactText: {
    fontSize: 14,
    color: "#e2e8f0",
    marginLeft: 10,
  },
  footer: {
    paddingVertical: 20,
    alignItems: "center",
  },
  footerText: {
    fontSize: 14,
    color: "#94a3b8",
    textAlign: "center",
  },
});

export default AboutScreen;
