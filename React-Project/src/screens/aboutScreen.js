import React from "react";
import { Text, View, ScrollView, StyleSheet, ImageBackground } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const stats = [
  { label: "Happy customers", value: "250K+" },
  { label: "Products curated", value: "2K+" },
  { label: "Avg. rating", value: "4.8★" },
  { label: "Global shipping", value: "35+ countries" },
];

const AboutScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <ImageBackground
        source={{ uri: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1400" }}
        style={styles.headerImage}
        resizeMode="cover"
      >
        <View style={styles.headerOverlay}>
          <Text style={styles.kicker}>Built for the tech-obsessed</Text>
          <Text style={styles.headerTitle}>About TechStore</Text>
          <Text style={styles.headerSubtitle}>
            We curate the best gear so creators, gamers, and doers can focus on what matters.
          </Text>
          <View style={styles.heroBadges}>
            <View style={styles.badge}>
              <MaterialCommunityIcons name="shield-check" size={18} color="#0f172a" />
              <Text style={styles.badgeText}>Trusted by pros</Text>
            </View>
            <View style={styles.badge}>
              <MaterialCommunityIcons name="clock-fast" size={18} color="#0f172a" />
              <Text style={styles.badgeText}>Fast dispatch</Text>
            </View>
          </View>
        </View>
      </ImageBackground>

      <View style={styles.content}>
        <View style={styles.statsRow}>
          {stats.map((s) => (
            <View key={s.label} style={styles.statCard}>
              <Text style={styles.statValue}>{s.value}</Text>
              <Text style={styles.statLabel}>{s.label}</Text>
            </View>
          ))}
        </View>

        <View style={styles.card}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons name="store" size={40} color="#2ecc71" />
          </View>
          <Text style={styles.cardTitle}>Our Story</Text>
          <Text style={styles.cardText}>
            TechStore was founded to remove the noise from tech shopping. We hand-pick premium
            devices, verify specs, and negotiate the best value so you can upgrade with confidence.
          </Text>
        </View>

        <View style={styles.card}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons name="target" size={40} color="#2ecc71" />
          </View>
          <Text style={styles.cardTitle}>Our Mission</Text>
          <Text style={styles.cardText}>
            To be your trusted partner in technology—guiding every purchase with expertise,
            transparent pricing, and human support when you need it.
          </Text>
        </View>

        <View style={styles.dualRow}>
          <View style={[styles.card, styles.half]}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons name="star-circle" size={40} color="#2ecc71" />
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
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons name="headset" size={40} color="#2ecc71" />
            </View>
            <Text style={styles.cardTitle}>We’re Here to Help</Text>
            <Text style={styles.cardText}>
              Need sizing advice, compatibility checks, or order help? Our specialists respond fast
              across chat, email, and phone.
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
    <MaterialCommunityIcons name={icon} size={20} color="#94a3b8" />
    <Text style={styles.contactText}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0c1220",
  },
  headerImage: {
    width: "100%",
    height: 320,
    justifyContent: "flex-end",
  },
  headerOverlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    paddingHorizontal: 20,
    paddingVertical: 26,
  },
  kicker: {
    color: "#9ae6b4",
    textTransform: "uppercase",
    letterSpacing: 1.2,
    fontSize: 12,
    fontWeight: "700",
    marginBottom: 6,
  },
  headerTitle: {
    fontSize: 34,
    fontWeight: "800",
    color: "#fff",
    marginBottom: 6,
  },
  headerSubtitle: {
    color: "#e2e8f0",
    fontSize: 15,
    lineHeight: 22,
    maxWidth: 320,
  },
  heroBadges: {
    flexDirection: "row",
    marginTop: 14,
    gap: 10,
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2ecc71",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 12,
    gap: 8,
  },
  badgeText: {
    color: "#0f172a",
    fontWeight: "700",
    fontSize: 12,
  },
  content: {
    padding: 20,
  },
  statsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  statCard: {
    width: "48%",
    backgroundColor: "#0f172a",
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "rgba(46,204,113,0.12)",
  },
  statValue: {
    color: "#e2e8f0",
    fontSize: 22,
    fontWeight: "800",
    marginBottom: 6,
  },
  statLabel: {
    color: "#94a3b8",
    fontSize: 13,
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
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  half: {
    width: "48%",
  },
  iconContainer: {
    alignItems: "center",
    marginBottom: 14,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#e2e8f0",
    marginBottom: 10,
    textAlign: "center",
  },
  cardText: {
    fontSize: 15,
    color: "#cbd5e1",
    lineHeight: 22,
    textAlign: "left",
  },
  featureList: {
    marginTop: 6,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    gap: 10,
  },
  featureText: {
    fontSize: 15,
    color: "#cbd5e1",
    flexShrink: 1,
  },
  contactInfo: {
    marginTop: 14,
    gap: 12,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  contactText: {
    fontSize: 15,
    color: "#cbd5e1",
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
