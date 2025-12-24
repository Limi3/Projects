import react from "react";
import { Text, View, TouchableOpacity, StyleSheet, FlatList } from "react-native";

const students = [
    {id: 1, name: 'John', surname:'Doe', age: 20},
    {id: 2, name: 'Jane', surname:'Smith', age: 22},
    {id: 3, name: 'Filan', surname:'Fisteku', age: 21},
    {id: 4, name: 'Arta', surname:'Krasniqi', age: 23},
    {id: 5, name: 'Liridon', surname:'Hoxha', age: 24},
    {id: 6, name: 'Aferdita', surname:'Berisha', age: 22},
];

const ListScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>List Screen</Text>

            <FlatList
                data={students}
                keyExtractor={student => student.id.toString()}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Text>{item.name} {item.surname}, Age: {item.age}</Text>
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
        backgroundColor: "#0c1220",
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#e2e8f0",
    },
});

export default ListScreen;