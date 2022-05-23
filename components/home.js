import React from "react";
import { 
    Text, 
    Image, 
    View, 
    StyleSheet, 
    SafeAreaView, 
    FlatList } 
    from "react-native";
import Feather from "react-native-vector-icons/Feather";
// import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Colors from '../assets/colors/colors';

import CategoriesData from "../assets/data/categoriesData";
// import PopularData from "../assets/data/popularData";


const HomeScreen = () => {
const renderCategoryItem = ({ item }) => {
    return (
        <View style={[
            styles.categoryItemWrapper,
            {
                backgroundColor: item.selected ? Colors.primary : Colors.white,
                marginLeft: item.id == 1 ? 20 : 0,
            },
            ]}>
            <Image source={item.image} style={styles.categoryItemImage}/>
            <Text style={styles.categoryItemTitle}>{item.title}</Text>
            <View style={[styles.categorySelectWrapper, 
            {
                backgroundColor: item.selected ? Colors.white : Colors.secondary,
            }]}>
                <Feather 
                name="chevron-right" 
                size={8}
                style={styles.categorySelectIcon}
                color={item.selected ? Colors.black : Colors.white}
                />
            </View>
        </View>
    )
}

    return (
        <View style={styles.container}>
           <SafeAreaView>
                <View style={styles.headerWrapper}>
                    <Image 
                    source={require("../assets/images/profile.png")}
                    style={styles.profileImage}/>
                    <Feather name="menu" size={24} color={Colors.textDark} />
                </View>
            </SafeAreaView> 

            {/* Title */}
            <View style={styles.titleWrapper}>
                <Text style={styles.titleSubtitle}>Food</Text>
                <Text style={styles.titleTitle}>Delivery</Text>
            </View>

            {/* Search */}
            <View style={styles.searchWrapper}>
                <Feather name="search" size={16} color={Colors.textDark} />
                <View style={styles.search}>
                    <Text style={styles.searchText}>Search</Text>
                </View>
            </View>

            {/* Categories */}
            <View style={styles.categoriesWrapper}>
                <Text style={styles.categoriesText}>Categories</Text>
                <View style={styles.categoriesListWrapper}>
                    <FlatList 
                      data={CategoriesData}
                      renderItem={renderCategoryItem}
                      keyExtractor={item => item.id}
                      horizontal = {true}
                      />
                </View>  
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
container: {
    flex: 1,
},
headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: "center",
    // borderColor: "green",
    // borderWidth: 2,
},
profileImage: {
    height: 40,
    width: 40,
    borderRadius: 40,
},
titleWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
},
titleSubtitle: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 16,
    color: Colors.textDark,
},
titleTitle: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 32,
    color: Colors.textDark,
    marginTop: 5,
},
searchWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 30,
},
search: {
    flex: 1,
    marginLeft: 10,
    borderBottomColor: Colors.textLight,
    borderBottomWidth: 2,
},
searchText: {
    fontFamily: "Montserrat_600SemiBold",
    color: Colors.textLight,
    fontSize: 14,
    marginBottom: 5,
},
categoriesWrapper: {
    marginTop: 30,
},
categoriesText: {
    fontFamily: "Montserrat_700Bold",
    paddingHorizontal: 20,
    fontSize: 16,
},
categoriesListWrapper: {
    paddingTop: 15,
    paddingBottom: 20,

},
categoryItemWrapper: {
    backgroundColor: "#F5CA4B",
    marginRight: 20,
    borderRadius: 20,
},
categoryItemImage: {
    width: 60,
    height: 60,
    marginTop: 24,
    alignSelf: "center",
    marginHorizontal: 20,
},
categoryItemTitle: {
    textAlign: "center",
    fontFamily: "Montserrat_500Medium",
    fontSize: 14,
    marginTop: 10,

},
categorySelectWrapper: {
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 20,
    width: 26,
    height: 26,
    borderRadius: 26,
    marginBottom: 20,
},
categorySelectIcon: {
   alignSelf: "center",
},
});

export default HomeScreen;