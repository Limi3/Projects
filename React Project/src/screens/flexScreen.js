import react from "react";
import { Text, View, TouchableOpacity, StyleSheet, FlatList, Image } from "react-native";


const FlexScreen = ({navigation}) => {
    return (
        <View>
            <View style={styles.container}>
                <View style={[styles.item1, styles.itemCommon]}>1</View>
                <View style={[styles.item2, styles.itemCommon]}>2</View>
                <View style={[styles.item3, styles.itemCommon]}>3</View>
                <View style={[styles.item4, styles.itemCommon]}>4</View>
            </View>
            <View>
                <TouchableOpacity onPress={() => Linking.openURL("https://css-tricks.com/snippets/css/a-guide-to-flexbox/")}>
                    <Text>https://css-tricks.com/snippets/css/a-guide-to-flexbox/</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        //  flexDirection: row | row-reverse | column | column-reverse;
        justifyContent: "space-around",
        //horizontal alignment if flexDirection is column or vertical if flexDirection is row
        //  justifyContent: flex-start | flex-end | center | space-between | space-around | space-evenly;
        alignItems: "center",
        //vertical alignment if flexDirection is column or horizontal if flexDirection is row
        //  alignItems: flex-start | flex-end | center | stretch | baseline;
        alignContent: "center",
        //  alignContent: flex-start | flex-end | center | stretch | space-between | space-around;
        // only works if there's multiple rows
        height: 400,
    },
    itemCommon: {
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    item1:{
        backgroundColor: "red",
        alignSelf: "flex-end",
        //alignSelf: auto | flex-start | flex-end | center | stretch | baseline;
    },
    item2:{
        backgroundColor: "blue",
    },
    item3:{
        backgroundColor: "green",
    },
    item4:{
        backgroundColor: "yellow",
    }
});


export default FlexScreen;