import React from "react";
import { View, Text, StyleSheet, FlatList, ScrollView, Image } from "react-native";
import data from '../data/countries.json';
import flagImages from '../data/flagImages';


class CountriesScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            countries: []
        };
    }

    componentDidMount() {
        this.setState({ countries: data });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text> Countries Screen</Text>
                <FlatList
                    horizontal={true}
                    data={this.state.countries}
                    keyExtractor={country => country.id.toString()}
                    renderItem={({item}) => (
                        <View style={styles.countryContainer}>
                            <Image 
                                style={styles.countryFlag} 
                                source={flagImages[item.flag]}
                            />
                                <Text style={styles.countryText}> Country Name: {item.name}</Text>
                                <Text style={styles.countryText}> Country Code: {item.code}</Text>
                                <Text style={styles.countryText}> Capital: {item.capital}</Text>
                                <Text style={styles.countryText}> Region: {item.region}</Text>
                                <Text style={styles.countryText}> Population: {item.population}</Text>
                        </View>
                    )}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "stretch",
        padding: 10,
    },
    countryContainer: {
        marginBottom: 20,
    },
    countryFlag: {
        width: 100,
        height: 60,
        borderRadius: 5,
    },
    countryText: {
        fontSize: 16,
        marginVertical: 2,
    },
})

export default CountriesScreen;