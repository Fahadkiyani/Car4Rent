import React from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, Pressable, Image } from 'react-native';
// import FindCarContainer from '../../FindCar/FindCarContainer';
import HorizontalView from '../HorizontalView/HorizontalView';

import { Ionicons } from '@expo/vector-icons';

import Navbar from '../Navbar';
// const vlist = [{ id: 10, name: 'Mercedeze benz', type: 'S-Class', color: 'black' }, { id: 20, name: 'toyota', type: 'Land Crusier Prado V8', color: 'white' }, { id: 30, name: 'Mercedeze benz', type: 'S-Class', color: 'black' }, { id: 40, name: 'toyota', type: 'Land Crusier Prado V8', color: 'white' }]
let vlist = [{ id: 1, heading: 'white suv honda, what if text getout of ound.', name: 'Honda', type: 'suv', color: 'white', price: '60,000', description: 'lorem ipsum text', location: 'islamabad', image: 'https://cache3.pakwheels.com/ad_pictures/5037/Slide_honda-br-v-i-vtec-s-2018-50378113.jpg', milage: '100,000', engineType: 'petrol', year: 2020 }, { id: 2, heading: 'black suv Toyota', name: 'Toyota', type: 'suv', color: 'black', price: '66,000', description: 'lorem ipsum text', location: 'lahore', image: 'https://images.unsplash.com/photo-1594978100646-ccd2ae32b711', milage: '50,000', engineType: 'diesel', year: 2019 }];


export default function VerticeList(props) {
    let findcarcontainerProps = props.AllProps.navigation;
    return (
        <View style={styles.VerticalListContainer}>
            <FlatList
                onScroll={(e) => {
                    // let c=e.nativeEvent.contentOffset;
                    // console.log(c);
                }}
                verticle={true}
                ListHeaderComponent={
                    <View style={styles.ListHeaderComponents}>
                        {/* <FindCarContainer navigation={findcarcontainerProps} /> */}

                        <Navbar navigation={props.AllProps.navigation} />
                        <HorizontalView navigation={findcarcontainerProps} />
                        <View>
                            <Text style={styles.Heading}>All Cars</Text>
                            <Pressable style={styles.viewAll}>
                                <Text style={styles.viewAllText}>View All</Text>
                            </Pressable>
                        </View>
                        <View style={{ marginTop: 10 }}></View>
                    </View>
                }
                ListFooterComponent={
                    <View style={styles.ListFooterComponents}>

                    </View>
                }
                showsVerticleScrollIndicator={false}
                keyExtractor={(vlist => {
                    return vlist.id.toString();
                })}
                data={vlist}
                renderItem={({ item }) => {
                    return (
                        <Pressable onPress={() => { console.log(item.id, " got pressed"); }}>
                            <View style={{
                                borderBottomWidth: 1,
                                borderColor: '#f2f2f2',
                                paddingBottom: 15
                            }}>
                                <View style={styles.items}>
                                    <View style={styles.VerticalListItemImageContainer}>
                                        <Image
                                            style={styles.Image}
                                            source={{
                                                uri: item.image,
                                            }}
                                        />
                                    </View>
                                    <View style={styles.verticleListItemDetailContainer}>
                                        <View style={styles.verticleListItemDetailContainerFirstRow}>
                                            <Text numberOfLines={2} style={styles.title}>{item.heading}</Text>
                                        </View>
                                        <View style={styles.verticleListItemDetailContainerSecondRow}>
                                            <Text style={styles.rentPrice}>Rent Price {item.price} pkr</Text>
                                        </View>
                                        <View style={styles.verticleListItemDetailContainerThirdRow}>
                                            {/* <Ionicons name="location-outline" size={12} color="#777" /> */}
                                            <Text style={styles.location}>{item.location}</Text>
                                        </View>
                                        <View style={styles.verticleListItemDetailContainerFourthRow}>
                                            <Text style={styles.year}>{item.year}</Text>
                                            <View style={{ borderLeftWidth: 1, borderColor: '#999', maxHeight: 12, marginTop: 3 }}></View>
                                            <Text style={styles.milage}>{item.milage} Km</Text>
                                            <View style={{ borderLeftWidth: 1, borderColor: '#999', maxHeight: 12, marginTop: 3 }}></View>
                                            <Text style={styles.engineType}>{item.engineType}</Text>

                                        </View>
                                    </View>
                                </View>
                            </View>
                        </Pressable>

                    )
                }} />
        </View>

    )
}

const styles = StyleSheet.create({
    items: {
        backgroundColor: 'transparent',
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 15,
        overflow: 'hidden',
        borderRadius: 10,
        flexDirection: 'row',

    },
    VerticalListContainer: {
        display: 'flex',
        backgroundColor: '#fbfbfc'
    },
    ListHeaderComponents: {
        width: '100%'
    },
    HeadinContainer: {
        display: 'flex',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#f0f0f0',
        marginBottom: 20,
        paddingVertical: 10,

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
    allCars: {
        fontFamily: 'LatoBold',
        paddingLeft: 15,
        paddingBottom: 8,
        fontSize: 18,
        fontWeight: '900',
        marginTop: 30,
        borderBottomWidth: 1,
        borderColor: '#f0f0f0'
    },
    ListFooterComponents: {
        marginTop: 200
    },
    VerticalListItemImageContainer: {
        width: 130,
        height: 130,
        backgroundColor: 'red'
    },
    Image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: "cover",
        // margin: 15,
        backgroundColor: '#000',

    },
    verticleListItemDetailContainer: {
        paddingHorizontal: 10,
    },
    verticleListItemDetailContainerFirstRow: {
        display: 'flex',
        // backgroundColor:'red',
    },
    title: {
        color: '#222',
        textTransform: 'capitalize',
        fontFamily: 'LatoRegular',
        fontSize: 16,
        // backgroundColor:'green',
        maxWidth: 200
    },
    verticleListItemDetailContainerSecondRow: {
        marginVertical: 5,
    },
    rentPrice: {
        fontFamily: 'LatoRegular',
        fontSize: 16,
        color: '#222'
    },
    verticleListItemDetailContainerThirdRow: {
        marginVertical: 5,
        display: 'flex',
        flexDirection: 'row'
    },
    location: {
        textTransform: 'capitalize',
        color: '#777777',
        fontFamily: 'LatoRegular',
    },
    verticleListItemDetailContainerFourthRow: {
        // borderTopWidth:1,
        // borderColor:'#f0f0f0',
        // backgroundColor:'red',
        // paddingTop:8,
        // width: 200,
        display: 'flex',
        flexDirection: 'row'
    },
    year: {
        color: '#777',
        fontFamily: 'LatoRegular',
        paddingRight: 8,
        paddingTop: 2.5,
        paddingBottom: 2.5
        // textTransform:'capitalize'
    },
    milage: {
        color: "#777",
        fontFamily: 'LatoRegular',
        paddingRight: 8,
        paddingLeft: 8,
        paddingTop: 2.5,
        paddingBottom: 2.5,
        textTransform: 'capitalize'
    },
    engineType: {
        color: "#777",
        fontFamily: 'LatoRegular',
        paddingRight: 8,
        paddingLeft: 8,
        paddingTop: 2.5,
        paddingBottom: 2.5,
        textTransform: 'capitalize'
    },

});