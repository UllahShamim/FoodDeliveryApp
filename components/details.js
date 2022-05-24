import React from "react";
import { 
    View, 
    Text, 
    StyleSheet, 
    SafeAreaView, 
    StatusBar, 
    TouchableOpacity } from "react-native";

import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Colors from '../assets/colors/colors';

import CategoriesData from "../assets/data/categoriesData";
import PopularData from "../assets/data/popularData";


const Details = ({ route, navigation }) => {
    const { item } = route.params;

    return (
        <View style={styles.container}>
            {/* Header */}
            <SafeAreaView style={{ marginTop: StatusBar.currentHeight }}>
                <View style={styles.headerWrapper}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View style={styles.headerLeft}>
                        <Feather name="chevron-left" size={12} color={Colors.textDark} />
                    </View>
                    </TouchableOpacity>
                    <View style={styles.headerRight}>
                        <MaterialCommunityIcons name="star" size={12} color={Colors.white} />
                    </View>
                </View>
            </SafeAreaView>  

            {/* Titles */}
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>{item.title}</Text>
            </View>

            {/* Price */}
            <View style={styles.priceWrapper}>
                <Text style={styles.priceText}>£{item.price}</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create ({
    container: {
        flex: 1,
    },
    headerWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    headerLeft: {
        borderColor: Colors.textLight,
        borderWidth: 2,
        padding: 12,
        borderRadius: 10,
    },
    headerRight: {
        backgroundColor: Colors.primary,
        padding: 12,
        borderRadius: 10,
        borderColor: Colors.primary,
        borderWidth: 2,
    },
    titleWrapper: {
        paddingHorizontal: 20,
        marginTop: 30,
    },
    title: {
        fontFamily: "Montserrat_700Bold",
        fontSize: 32,
        color: Colors.textDark,
        width: "60%",
    },
    priceWrapper: {
        marginTop: 20,
        paddingHorizontal: 20,
    },
    priceText: {
        color: Colors.price,
        fontFamily: "Montserrat_700Bold",
        fontSize: 32,
    }
})


export default Details;