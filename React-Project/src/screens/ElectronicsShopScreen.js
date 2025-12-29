import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import ProductCard from "../components/ProductCard";
import electronicsData from "../data/electronics.json";

const ElectronicsShopScreen = ({ navigation }) => {
  const route = useRoute();
  const categoryFromRoute = route.params?.category;
  
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categoryFromRoute || "All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    setTimeout(() => {
      setProducts(electronicsData);
      setFilteredProducts(electronicsData);
      setLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
   
    if (categoryFromRoute) {
      setSelectedCategory(categoryFromRoute);
    }
  }, [categoryFromRoute]);

  useEffect(() => {
    filterProducts();
  }, [searchQuery, selectedCategory, products]);

  const filterProducts = () => {
    let filtered = [...products];

 
    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

   
    if (searchQuery.trim() !== "") {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  };

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const handleProductPress = (product) => {
    navigation.navigate("ProductDetail", { product });
  };

  const renderProduct = ({ item }) => (
    <ProductCard product={item} onPress={() => handleProductPress(item)} />
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#2ecc71" />
        <Text style={styles.loadingText}>Loading products...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search products..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholderTextColor="#999"
        />
      </View>

      <View style={styles.categoryContainer}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.categoryButton,
                selectedCategory === item && styles.categoryButtonActive,
              ]}
              onPress={() => setSelectedCategory(item)}
            >
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === item && styles.categoryTextActive,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <FlatList
        data={filteredProducts}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
        columnWrapperStyle={styles.row}
        nestedScrollEnabled={true}
        scrollEnabled={true}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No products found</Text>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0c1220",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0c1220",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: "#cbd5e1",
  },
  header: {
    backgroundColor: "#0f172a",
    padding: 16,
    paddingTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(46,204,113,0.12)",
  },
  searchInput: {
    backgroundColor: "#131c2e",
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    color: "#e2e8f0",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
  },
  categoryContainer: {
    backgroundColor: "#0f172a",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(46,204,113,0.12)",
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginHorizontal: 6,
    borderRadius: 20,
    backgroundColor: "#131c2e",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
  },
  categoryButtonActive: {
    backgroundColor: "#2ecc71",
    borderColor: "#2ecc71",
  },
  categoryText: {
    fontSize: 14,
    color: "#cbd5e1",
    fontWeight: "600",
  },
  categoryTextActive: {
    color: "#fff",
    fontWeight: "bold",
  },
  listContainer: {
    padding: 8,
    paddingHorizontal: 8,
  },
  row: {
    justifyContent: 'space-around',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 100,
  },
  emptyText: {
    fontSize: 18,
    color: "#cbd5e1",
  },
});

export default ElectronicsShopScreen;

