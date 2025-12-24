import react from "react";
import { Text, View, TouchableOpacity, StyleSheet, FlatList, Image } from "react-native";

const products = [
    {id: 1, name: 'Product 1', price: 99.99, image: require('../../assets/producti1.png'), description: 'Description for Product 1'},
    {id: 2, name: 'Product 2', price: 89.99, image: require('../../assets/producti1.png'), description: 'Description for Product 2'},
    {id: 3, name: 'Product 3', price: 79.99, image: require('../../assets/producti1.png'), description: 'Description for Product 3'},
    {id: 4, name: 'Product 4', price: 69.99, image: require('../../assets/producti1.png'), description: 'Description for Product 4'},
];

const SimProductList = ({navigation}) => {
    return (
        <View>
            <FlatList
                data={products}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => (
                    <View>
                        <Image source={item.image} style={{width: 100, height: 100}} />
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
export default SimProductList;