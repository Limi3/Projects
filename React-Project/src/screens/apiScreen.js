import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

class ApiScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    async componentDidMount() {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts');
        const dataJson = await data.json();
        this.setState({ posts: dataJson });
    }

    render() {
        const { posts } = this.state;
        return (
            <View style={styles.container}>
                <Text>ApiScreen</Text>
                <FlatList
                    data={posts}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.postContainer}>
                            <Text style={styles.postTitle}>{item.title}</Text>
                            <Text style={styles.postBody}>{item.body}</Text>
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
        justifyContent: "center",
        alignItems: "center"
    },
    postContainer: {
        marginBottom: 20,
        padding: 10,
    },
    postTitle: {
        fontSize: 16,
        fontWeight: "bold",
    },
    postBody: {
        fontSize: 14,
        color: "#666",
    },
});

export default ApiScreen;