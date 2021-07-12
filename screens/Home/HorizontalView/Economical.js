import { set } from 'lodash';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, FlatList, Pressable, StatusBar, useWindowDimensions, Dimensions } from 'react-native';
import FakeCarData from '../../../FakeApiData/FakeApiData';
import { useFonts } from 'expo-font';
// const list = [{ id: 1, name: 'Mercedeze benz', type: 'S-Class', color: 'black' }, { id: 2, name: 'toyota', type: 'Land Crusier Prado V8', color: 'white' }, { id: 3, name: 'Mercedeze benz', type: 'S-Class', color: 'black' }, { id: 4, name: 'toyota', type: 'Land Crusier Prado V8', color: 'white' }]
// let list = [{ id: 1, heading: 'black suv mitsubishi', name: 'Honda', type: 'suv', color: 'white', price: '60,000', description: 'lorem ipsum text', location: 'islamabad', image: 'https://cache3.pakwheels.com/ad_pictures/5037/Slide_honda-br-v-i-vtec-s-2018-50378113.jpg', milage: '100,000', engineType: 'petrol', year: 2020 }, { id: 2, heading: 'black suv Toyota', name: 'Toyota', type: 'suv', color: 'black', price: '66,000', description: 'lorem ipsum text', location: 'lahore', image: 'https://images.unsplash.com/photo-1594978100646-ccd2ae32b711', milage: '50,000', engineType: 'diesel', year: 2019 }];

let list = [{ id: 1, heading: 'black suv mitsubishi', name: 'Daihatsu', type: 'wagon', color: 'silver', price: {day:"1,500",week:"12,000",month:'25,000'}, description: 'lorem ipsum text', location: 'islamabad', image:[ 'https://cache1.pakwheels.com/ad_pictures/4996/daihatsu-hijet-van-2014-49969310.jpg'], milage: '100,000', engineType: 'petrol', year: 2018 ,gear:"manual"}, { id: 2, heading: 'black suv Toyota', name: 'Toyota', type: 'suv', color: 'black', price: {day:"6,000",week:"20,000",month:'60,000'}, description: 'lorem ipsum text', location: 'lahore', image: ['https://images.unsplash.com/photo-1594978100646-ccd2ae32b711'], milage: '50,000', engineType: 'diesel', year: 2019 ,gear:"automatic"}];


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function EconomicalCars(props) {
    let navigation = props.navigation;
    const navigateToDetails = (item,index,fromWhichPage)=>{
        console.log('the item having index no.',index, " is clicked");
        navigation.navigate('Details',{properties:item,indexOfItem:index,from:fromWhichPage})
    };
    
    const viewAllItems =(fromWhereThisFunctionIsCalled)=>{
        console.log("viewAllItem fn is called from: ",fromWhereThisFunctionIsCalled);

    };

    return (
        <View style={styles.HorizontalViewContainer}>
            <View style={styles.HeadinContainer}>
                <Text style={styles.Heading}>Economical</Text>
                <Pressable style={styles.viewAll} onPress={() => {viewAllItems('youMayLike')}}>
                    <Text style={styles.viewAllText}>View All</Text>
                </Pressable>
            </View>

            
            <FlatList
                ListHeaderComponent={<View style={styles.ListHeaderComponent}></View>}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(list => {
                    return list.id.toString();
                })}
                data={list}
                renderItem={({ item,index }) => {
                    return (
                        <Pressable onPress={() => {navigateToDetails(item,index,'youMayLike')}}>
                            <View style={styles.items}>
                                <View style={styles.imageContainer}>
                                    <Image
                                        style={styles.Image}
                                        source={{
                                            uri: item.image[0],
                                        }}
                                    />
                                </View>
                                <View style={styles.detailContainer}>
                                    <View style={styles.firstRowDetailContainer}>
                                        <Text style={styles.name}>{item.name}</Text>
                                        <Text style={styles.type}>{item.type}</Text>
                                        <Text style={styles.color}>{item.color}</Text>
                                    </View>
                                    <View style={styles.secondRowDetailContainer}>
                                        <Text style={styles.Rent}>Rent: </Text><Text style={styles.price}>{item.price.day} PKR/day</Text>
                                    </View>
                                    <View style={styles.thirdRowDetail}>
                                        <Text style={[styles.thirdRowDetailItems, { marginLeft: -5, borderRightWidth: 1, borderColor: '#dedede' }]}>{item.year}</Text>
                                        <Text style={[styles.thirdRowDetailItems, { borderRightWidth: 1, borderColor: '#dedede' }]}>{item.milage} km</Text>
                                        <Text style={styles.thirdRowDetailItems}>{item.engineType}</Text>
                                    </View>
                                    <View style={styles.fourthRowDetail}>
                                        <Text style={styles.location}>{item.location}</Text>
                                    </View>
                                </View>
                            </View>
                        </Pressable>
                    )
                }} />

        </View>
    );

}
const styles = StyleSheet.create({
    HorizontalViewContainer: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderColor: '#f0f0f0'
        // paddingLeft: 10
    },
    HeadinContainer: {
        display: 'flex',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#f0f0f0',
        marginBottom: 20,
        paddingVertical: 12,

    },
    Heading: {
        color: '#222',
        fontFamily: 'LatoBold',
        fontSize: 18,
        flex: 0.8,
        paddingLeft: 12,
    },
    viewAll: {
        flex: 0.2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewAllText: {
        color: '#rgba(50,150,255,0.8)',
        marginRight: 10,
    },
    ListHeaderComponent: {
        marginLeft: 12
    },

    imageContainer: {
        width: '100%',
        height: '60%'
    },
    Image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: "cover",
        // margin: 15,
        backgroundColor: '#000',

    },
    items: {
        // height: windowHeight / 3,
        width: 189.47,
        height: 300,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#dedede',
        backgroundColor: '#fff',
        marginRight: 12,
        overflow: 'hidden',
        // paddingBottom:2.5,
        shadowColor: "#eeeeee",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.10,
        shadowRadius: 10,
        elevation: 0.4,
        marginBottom: 5
    },
    detailContainer: {
        paddingLeft: 8
    },
    firstRowDetailContainer: {
        // backgroundColor:'grey',
        maxHeight: '100%',
        maxWidth: '100%',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 12
    },
    name: {
        // backgroundColor:'green',
        textTransform: 'capitalize',
        color: "#333000",
        fontFamily: 'LatoRegular',
        fontSize: 16,
        fontWeight: "600"
    },
    type: {
        color: "#333000",
        marginLeft: 3,
        fontFamily: 'LatoRegular',
        fontSize: 16,
        fontWeight: "600"
    },
    color: {
        color: "#333000",
        marginLeft: 3,
        fontFamily: 'LatoRegular',
        fontSize: 16,
        fontWeight: "600"
    },
    // Second Row Starts Here
    secondRowDetailContainer: {
        marginTop: 5,
        color: 'green',
        display: 'flex',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#f9f9f9',
        paddingBottom: 5
    },
    Rent: {
        // color: 'rgba(105,155,105,1)',
        // color:'rgba(150,200,255,1)',
        color: '#222',
        fontSize: 14
    },
    price: {
        // color:'rgba(150,200,255,1)',
        // color: 'rgba(105,155,105,1)',
        color: '#222',
        fontSize: 14,
        fontWeight: '600'
    },
    thirdRowDetail: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 8
    },
    thirdRowDetailItems: {
        color: '#666',
        textTransform: 'capitalize',
        fontSize: 12,
        paddingVertical: 1,
        paddingHorizontal: 8
    },
    fourthRowDetail: {
        marginLeft: 2
    },
    location: {
        color: '#666',
        fontSize: 12,
        textTransform: 'capitalize'
    }
});