import React from "react";
import { 
    View, 
    Text, 
    StyleSheet, 
    SafeAreaView, 
    StatusBar, 
    TouchableOpacity,
    Image,
    FlatList,
} from "react-native";

import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Colors from '../assets/colors/colors';

import CategoriesData from "../assets/data/categoriesData";
import PopularData from "../assets/data/popularData";


const Details = ({ route, navigation }) => {
    const { item } = route.params;

    const renderIngredientsItem = ({ item }) => {
        return (
            <View style={[styles.ingredientImageWrapper, {
                marginLeft: item.id === "1" ? 20 : 0,
            }]}>
                <Image source={item.image} style={styles.ingredientImage} />
            </View>
        );
    };

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

            {/* Pizza info */}
            <View style={styles.infoWrapper}>
                <View style={styles.infoLeftWrapper}>
                    <View style={styles.infoItemWrapper}>
                        <Text style={styles.infoItemTitle}>Size</Text>
                        <Text style={styles.infoItemText}>{item.sizeName} {item.sizeNumber}"</Text>
                    </View>
                    <View style={styles.infoItemWrapper}>
                        <Text style={styles.infoItemTitle}>Crust</Text>
                        <Text style={styles.infoItemText}>{item.crust}</Text>
                    </View>
                    <View style={styles.infoItemWrapper}>
                        <Text style={styles.infoItemTitle}>Delivery in</Text>
                        <Text style={styles.infoItemText}>{item.deliveryTime} min</Text>
                    </View>
                </View>
                <View>
                    <Image source={item.image} style={styles.itemImage}/>
                </View>
            </View>
            {/* Ingredients */}
            <View style={styles.ingredientsWrapper}>
                <Text style={styles.ingredientsTitle}>Ingredients</Text>
                <View style={styles.ingredientsListWrapper}>
                <FlatList 
                      data={item.ingredients}
                      renderItem={renderIngredientsItem}
                      keyExtractor={item => item.id}
                      horizontal = {true}
                      showsHorizontalScrollIndicator={false}
                      />
                </View>
            </View>
            {/* Place an order */}
            <TouchableOpacity onPress={() => alert("Your order has been placed!")}>
                <View style={styles.orderWrapper}>
                    <Text style={styles.orderText}>Place an order</Text>
                    <Feather name="chevron-right" size={18} color={Colors.black} /> 
                </View>
            </TouchableOpacity>
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
    },
    infoWrapper: {
        marginTop: 60,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    infoLeftWrapper: {
        paddingLeft: 20,
    },
    infoItemWrapper: {
        marginBottom: 20,
    },
    infoItemTitle: {
    fontFamily: "Montserrat_500Medium",
    fontSize: 14,
    color: Colors.textLight,
    },
    infoItemText: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 18,
    color: Colors.textDark,
    },
    infoRightWrapper: {

    },
    itemImage: {
        resizeMode: "contain",
        marginLeft: 50,
    },
    ingredientsWrapper: {
        marginTop: 40,
    },
    ingredientsTitle: {
        paddingHorizontal: 20,
        fontFamily: "Montserrat_700Bold",
        fontSize: 16,
        color: Colors.textDark,
    },
    ingredientsListWrapper: {
        paddingVertical: 20,
    },
    ingredientImageWrapper: {
        backgroundColor: Colors.white,
        alignItem: "center",
        justifyContent: "center",
        paddingHorizontal: 10,
        marginRight: 15,
        borderRadius: 15,
        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
    },
    ingredientImage: {
        resizeMode: "contain",
    },
    orderWrapper: {
        marginTop: 40,
        marginHorizontal: 20,
        backgroundColor: Colors.primary,
        borderRadius: 50,
        paddingVertical: 25,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    orderText: {
        fontFamily: "Montserrat_700Bold",
        fontSize: 14,
        marginRight: 10,
    },

})


export default Details;