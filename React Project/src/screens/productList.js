import React from "react";
import { Text, View, TouchableOpacity, StyleSheet, FlatList, Image } from "react-native";

// store image as filename (local) — resolveImageSource will map to a static require when possible
const products = [
    {id: 1, name: 'Product 1', price: 99.99, image: 'producti1.png', description: 'Description for Product 1'},
    {id: 2, name: 'Product 2', price: 89.99, image: 'producti2.png', description: 'Description for Product 2'},
    {id: 3, name: 'Product 3', price: 79.99, image: 'producti3.png', description: 'Description for Product 3'},
    {id: 4, name: 'Product 4', price: 69.99, image: 'producti4.png', description: 'Description for Product 4'},
];

// static mapping for local images - bundlers require static require() calls
const imageMap = {
    'producti1.png': require('../../assets/producti1.png'),
    'producti1.webp': require('../../assets/producti1.webp'),
    // add more mappings here when you add assets to the assets/ folder
};

// default image shown when a specific image is missing
const defaultImage = require('../../assets/icon.png');

function resolveImageSource(name) {
    if (!name) return defaultImage;
    // prefer exact match from map
    if (imageMap[name]) return imageMap[name];
    // try common extensions if name without ext was provided (not used here but safe)
    const lower = name.toLowerCase();
    for (const key of Object.keys(imageMap)) {
        if (key.toLowerCase() === lower) return imageMap[key];
    }
    // fallback
    return defaultImage;
}


const ProductList = ({navigation}) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => (
                    <View style={{alignItems: 'center', margin: 12}}>
                        <Image source={resolveImageSource(item.image)} style={{width: 100, height: 100, resizeMode: 'contain'}} />
                        <Text style={styles.textName}>{item.name}</Text>
                        <Text style={styles.textPrice}>${item.price}</Text>
                        <Text style={styles.textDescription}>{item.description}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 18,
        marginVertical: 5,
    },
    textName: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10,
        marginBottom: 5,
        textAlign: "center",
    },
    textPrice: {
        fontSize: 18,
        marginVertical: 5,
        textAlign: "center",
    },
    textDescription: {
        fontSize: 16,
        marginVertical: 5,
        textAlign: "center",
    }
});
export default ProductList;