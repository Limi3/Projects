import React, { useRef, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Dimensions,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ProductCard from "../components/ProductCard";
import electronicsData from "../data/electronics.json";

const { width } = Dimensions.get("window");
const SLIDE_WIDTH = width * 0.82;

const slides = [
  {
    title: "Next‑gen sound",
    subtitle: "Immersive audio for work and play",
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=1200",
  },
  {
    title: "Power to create",
    subtitle: "Laptops built for performance",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1200",
  },
  {
    title: "Smart living",
    subtitle: "Wearables that fit your lifestyle",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200",
  },
];

const categories = [
  { key: "Audio", icon: "headphones", description: "Headsets, speakers, buds" },
  { key: "Mobile", icon: "cellphone", description: "Phones and tablets" },
  { key: "Computers", icon: "laptop", description: "Workstations & ultrabooks" },
  { key: "Gaming", icon: "controller", description: "Consoles and gear" },
  { key: "Displays", icon: "monitor", description: "Crisp 4K & HDR screens" },
  { key: "Accessories", icon: "usb", description: "Keyboards, hubs, essentials" },
];

const featuredProducts = electronicsData.slice(0, 4);

const HomeScreen = ({ navigation }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const viewabilityConfig = useRef({ viewAreaCoveragePercentThreshold: 60 }).current;
  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems && viewableItems.length > 0 && viewableItems[0].index !== null) {
      setActiveSlide(viewableItems[0].index);
    }
  }).current;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={false}
    >
      <ImageBackground
        source={{ uri: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1400" }}
        style={styles.hero}
        resizeMode="cover"
      >
        <View style={styles.heroOverlay}>
          <Text style={styles.kicker}>Premium electronics</Text>
          <Text style={styles.title}>TechStore</Text>
          <Text style={styles.subtitle}>Built for creators, gamers, and everyday life.</Text>
          <View style={styles.heroActions}>
            <TouchableOpacity
              onPress={() => navigation.navigate("ElectronicsShop")}
              style={styles.primaryButton}
              activeOpacity={0.85}
            >
              <MaterialCommunityIcons name="lightning-bolt" size={18} color="#fff" />
              <Text style={styles.primaryButtonText}>Shop the collection</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Cart")}
              style={styles.secondaryButton}
              activeOpacity={0.85}
            >
              <Text style={styles.secondaryButtonText}>View cart</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.heroStats}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>2K+</Text>
              <Text style={styles.statLabel}>Curated products</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>4.8★</Text>
              <Text style={styles.statLabel}>Avg. ratings</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>24/7</Text>
              <Text style={styles.statLabel}>Support</Text>
            </View>
          </View>
        </View>
      </ImageBackground>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>In the spotlight</Text>
          <TouchableOpacity onPress={() => navigation.navigate("ElectronicsShop")}>
            <Text style={styles.sectionLink}>See all</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal
          data={slides}
          keyExtractor={(item) => item.title}
          showsHorizontalScrollIndicator={false}
          snapToInterval={SLIDE_WIDTH + 16}
          decelerationRate="fast"
          snapToAlignment="start"
          viewabilityConfig={viewabilityConfig}
          onViewableItemsChanged={onViewableItemsChanged}
          contentContainerStyle={styles.sliderContent}
          renderItem={({ item, index }) => (
            <ImageBackground
              source={{ uri: item.image }}
              style={[styles.slideCard, { width: SLIDE_WIDTH }]}
              imageStyle={styles.slideImage}
            >
              <View style={styles.slideOverlay}>
                <View style={styles.slideBadge}>
                  <Text style={styles.slideBadgeText}>Featured {index + 1}</Text>
                </View>
                <Text style={styles.slideTitle}>{item.title}</Text>
                <Text style={styles.slideSubtitle}>{item.subtitle}</Text>
                <TouchableOpacity
                  style={styles.slideButton}
                  onPress={() => navigation.navigate("ElectronicsShop")}
                  activeOpacity={0.85}
                >
                  <Text style={styles.slideButtonText}>Explore</Text>
                  <MaterialCommunityIcons
                    name="chevron-right"
                    size={18}
                    color="#0f172a"
                    style={{ marginLeft: 6 }}
                  />
                </TouchableOpacity>
              </View>
            </ImageBackground>
          )}
        />
        <View style={styles.dots}>
          {slides.map((_, idx) => (
            <View
              key={idx}
              style={[
                styles.dot,
                activeSlide === idx && styles.dotActive,
              ]}
            />
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Shop by category</Text>
        </View>
        <View style={styles.categoryGrid}>
          {categories.map((cat) => (
            <TouchableOpacity
              key={cat.key}
              style={styles.categoryCard}
              onPress={() => navigation.navigate("ElectronicsShop")}
              activeOpacity={0.9}
            >
              <View style={styles.categoryIconWrap}>
                <MaterialCommunityIcons name={cat.icon} size={22} color="#2ecc71" />
              </View>
              <Text style={styles.categoryTitle}>{cat.key}</Text>
              <Text style={styles.categoryDescription}>{cat.description}</Text>
              <View style={styles.categoryFooter}>
                <Text style={styles.categoryLink}>View items</Text>
                <MaterialCommunityIcons name="chevron-right" size={16} color="#2ecc71" />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Bestsellers</Text>
          <TouchableOpacity onPress={() => navigation.navigate("ElectronicsShop")}>
            <Text style={styles.sectionLink}>Browse shop</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.productsGrid}>
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onPress={() => navigation.navigate("ProductDetail", { product })}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0c1220",
  },
  scrollContainer: {
    paddingBottom: 32,
  },
  hero: {
    width: "100%",
    height: 420,
    marginBottom: 12,
  },
  heroOverlay: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 24,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.55)",
  },
  kicker: {
    color: "#9ae6b4",
    textTransform: "uppercase",
    letterSpacing: 1.2,
    fontSize: 12,
    fontWeight: "700",
    marginBottom: 6,
  },
  title: {
    fontSize: 46,
    fontWeight: "800",
    color: "#fff",
    marginBottom: 6,
  },
  subtitle: {
    color: "#e2e8f0",
    fontSize: 16,
    lineHeight: 22,
    maxWidth: 320,
    marginBottom: 18,
  },
  heroActions: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  primaryButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2ecc71",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
  },
  primaryButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
    marginLeft: 8,
  },
  secondaryButton: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.25)",
    backgroundColor: "rgba(255,255,255,0.08)",
    marginLeft: 12,
  },
  secondaryButtonText: {
    color: "#e2e8f0",
    fontWeight: "600",
    fontSize: 14,
  },
  heroStats: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(15, 23, 42, 0.7)",
    borderRadius: 14,
    padding: 12,
  },
  statItem: {
    flex: 1,
  },
  statNumber: {
    color: "#fff",
    fontWeight: "800",
    fontSize: 18,
  },
  statLabel: {
    color: "#cbd5e1",
    fontSize: 12,
  },
  statDivider: {
    width: 1,
    height: 34,
    backgroundColor: "rgba(255,255,255,0.16)",
    marginHorizontal: 12,
  },
  section: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  sectionTitle: {
    color: "#e2e8f0",
    fontSize: 20,
    fontWeight: "700",
  },
  sectionLink: {
    color: "#2ecc71",
    fontWeight: "700",
    fontSize: 14,
  },
  sliderContent: {
    paddingRight: 16,
    paddingBottom: 4,
  },
  dots: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(255,255,255,0.25)",
    marginHorizontal: 4,
  },
  dotActive: {
    backgroundColor: "#2ecc71",
    width: 10,
  },
  slideCard: {
    height: 220,
    marginRight: 16,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#111827",
  },
  slideImage: {
    borderRadius: 16,
  },
  slideOverlay: {
    flex: 1,
    backgroundColor: "rgba(7, 11, 19, 0.55)",
    padding: 16,
    justifyContent: "flex-end",
  },
  slideBadge: {
    backgroundColor: "rgba(46, 204, 113, 0.9)",
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
    marginBottom: 10,
  },
  slideBadgeText: {
    color: "#0f172a",
    fontWeight: "700",
    fontSize: 12,
  },
  slideTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 4,
  },
  slideSubtitle: {
    color: "#e2e8f0",
    fontSize: 14,
    marginBottom: 10,
  },
  slideButton: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 10,
  },
  slideButtonText: {
    color: "#0f172a",
    fontWeight: "700",
    fontSize: 13,
  },
  categoryGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  categoryCard: {
    width: "48%",
    backgroundColor: "#0f172a",
    borderRadius: 14,
    padding: 14,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "rgba(46, 204, 113, 0.12)",
  },
  categoryIconWrap: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: "rgba(46, 204, 113, 0.12)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  categoryTitle: {
    color: "#e2e8f0",
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 4,
  },
  categoryDescription: {
    color: "#94a3b8",
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 10,
  },
  categoryFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  categoryLink: {
    color: "#2ecc71",
    fontWeight: "700",
    fontSize: 13,
  },
  productsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});

export default HomeScreen;
