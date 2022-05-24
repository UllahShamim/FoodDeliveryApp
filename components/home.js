import React from "react";
import { 
    Text, 
    Image, 
    View, 
    StyleSheet, 
    SafeAreaView, 
    FlatList,
    ScrollView,
    StatusBar, 
    TouchableOpacity } 
    from "react-native";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Colors from '../assets/colors/colors';

import CategoriesData from "../assets/data/categoriesData";
import PopularData from "../assets/data/popularData";


const HomeScreen = ({ navigation }) => {
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
            {/* Header  inc Android status bar setup*/}
        <ScrollView contentInsetAdjustmentBehavior="automatic" showsVerticalScrollIndicator={false}>
           <SafeAreaView style={{ marginTop: StatusBar.currentHeight }}>
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

            {/* Popular section */}
            <View style={styles.popularWrapper}>
                <Text style={styles.popularTitle}>Popular</Text>
                {PopularData.map(item => (
                    <TouchableOpacity
                        key={item.id}
                        onPress={() => navigation.navigate("Details", {
                            item: item,
                        })}
                    >
                    <View style={[styles.popularCardWrapper, 
                    {
                      marginTop: item.id == 1 ? 10 : 20,  
                    },
                    ]}>
                        <View>
                            <View>
                                <View style={styles.popularTopWrapper}>
                                    <MaterialCommunityIcons 
                                    name="crown" size={12} 
                                    color={Colors.primary} 
                                    />
                                    <Text style={styles.popularTopText}>Top of the week</Text>
                                </View>
                                <View>
                                    <View style={styles.popularTitlesWrapper}>
                                        <Text style={styles.popularTitlesTitle}>{item.title}</Text>
                                        <Text style={styles.popularTitlesWeight}>Weight: {item.weight}</Text>
                                    </View>
                                </View>
                                <View style={styles.popularCardBottom}>
                                    <View style={styles.addPizzaButton}>
                                        <Feather name="plus" size={10} color={Colors.textDark} />
                                    </View>
                                    <View style={styles.ratingWrapper}>
                                        <MaterialCommunityIcons name="star" size={10} color={Colors.textDark} />
                                        <Text style={styles.rating}>{item.rating}</Text>
                                    </View>
                                </View>
                            </View>
                            {/* image should really be going here from the video, but it appears below the content in the card
                            rather than on the right */}
                            {/* <View style={styles.popularCardRight}>
                                <Image source={item.image} style={styles.popularCardImage} />
                            </View> */}
                        </View>
                        <View style={styles.popularCardRight}>
                                <Image source={item.image} style={styles.popularCardImage} />
                        </View>
                    </View> 
                    </TouchableOpacity>
                ))}
                
            </View>
            </ScrollView>
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
    shadowColor: Colors.black,
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,

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
popularWrapper: {
    paddingHorizontal: 20,
},
popularTitle: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 16,
},
popularCardWrapper: {
    backgroundColor: Colors.white,
    borderRadius: 25,
    paddingTop: 20, 
    paddingLeft: 20,
    flexDirection: "row",
    overflow: "hidden",
    shadowColor: Colors.black,
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,

},
popularTopWrapper: {
    flexDirection: "row",
    alignItems: "center",
},
popularTopText: {
    marginLeft: 10,
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 14,
},
popularTitlesWrapper: {
    marginTop: 20,
},
popularTitlesTitle: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 14,
    color: Colors.textDark,
},
popularTitlesWeight: {
    fontFamily: "Montserrat_500Medium",
    fontSize: 12,
    color: Colors.textLight,
    marginTop: 5,
},
popularCardBottom: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginLeft: -20,
},
addPizzaButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
},
ratingWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
},
rating: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 12,
    color: Colors.textDark,
    marginLeft: 5,
},
popularCardRight: {
    marginLeft: 40,
    // marginLeft: 5,
},
popularCardImage: {
    width: 210,
    height: 125,
    // width: 150,
    // height: 100,
    resizeMode: 'contain',
},
});

export default HomeScreen;