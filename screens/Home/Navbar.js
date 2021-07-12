import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView, Pressable, TouchableOpacity } from 'react-native';

import { Ionicons, Entypo } from '@expo/vector-icons';
// import { Entypo } from '@expo/vector-icons';

export default function Navbar(props) {
    // console.log("these are the navigation options",props.navigation);
    const [location, setLocation] = useState('Karachi');
    // useEffect(()=>{
    //     let location = props.navigation.navigate.state.params.city;
    //     setLocation(location)
    // });

    const NavigateToSearch = (location, searchType) => {
        if (searchType === "City") {
        console.log("NavigateToSearch function is called and searchType is", searchType);
            props.navigation.navigate('CitySelect', { location: location })
        }else if(searchType === "Search"){
        console.log("NavigateToSearch function is called and searchType is", searchType);
            props.navigation.navigate('Search',{location:location})
        }
    }
    return (
        <View style={styles.navbar}>
            <View style={styles.logoContainer}>
                {/* <Text>Car</Text><Text style={styles.four}>4</Text><Text>Rent</Text> */}
                <Text style={{ color: '#fff', fontSize: 18, fontWeight: '700', fontFamily: 'RobotoRegular' }}>Car4rent</Text>
            </View>
            <View style={styles.searchContainer}>
                <Pressable style={styles.findYourCarContainer} onPress={() => { NavigateToSearch(location, "Search") }}>
                    <Ionicons style={styles.searchIcon} name="ios-search-outline" size={16} color="#888" />
                    <Text style={{ color: '#999', marginLeft: 5 }}>
                        Find Your Car!
                    </Text>
                </Pressable>
                <TouchableOpacity onPress={() => { NavigateToSearch(location, "City") }} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flex: 0.355, backgroundColor: 'transparent', paddingVertical: 10 }}>
                    <Text style={styles.searchLocation}>{location}</Text>
                    <Ionicons name="chevron-forward-circle" size={12} color="rgba(255,80,100,1)" style={{ marginTop: 2 }} />
                </TouchableOpacity>

            </View>

        </View>
    );
}
const styles = StyleSheet.create({
    navbar: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgba(255,80,100,1)',
        paddingBottom: 10,
        paddingHorizontal: 20,
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
        shadowColor: "red",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 2,
        marginBottom: 20,
    },
    logoContainer: {
        backgroundColor: 'transparent',
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 20

    },
    four: {
        color: 'red',
    },
    searchContainer: {
        width: '100%',
        // height: 20,
        backgroundColor: 'white',
        borderWidth: 2,
        display: 'flex',
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderColor: '#222',
        // paddingHorizontal: 20,
        // paddingVertical: 20,
        marginBottom: 25,
        marginTop: 15,
        alignSelf: 'center',
    },
    findYourCarContainer: {
        flex: 1,
        // backgroundColor: '#888',
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        // justifyContent: 'flex-start'
    },
    searchLocation: {
        // flex: 0.1,
        borderLeftWidth: 1,
        paddingLeft: 10,
        // color: 'rgba(50,150,255,1)'
        color: 'black'
    }

});