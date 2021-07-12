import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, FlatList, StatusBar, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons, Fontisto } from '@expo/vector-icons';




// import { Picker } from '@react-native-picker/picker';

import cities from '../../sortedCities.json';

export default function CitySelect(props) {
    // console.log(typeof cities);
    let location = props.navigation.state.params.location;
    return (
        <View>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#fff" translucent={false} />
            <FlatList
                ListHeaderComponent={
                    <Text style={{ padding: 25, }}>Select your city</Text>
                }
                keyExtractor={((item, index) => { return index.toString() })}
                data={cities}
                renderItem={({ item, index }) => {
                    return (

                        <View style={styles.listContainer}>
                            <TouchableOpacity>
                                <Text style={styles.listItems}>{item.city}</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
        </View>

    );
}

const styles = StyleSheet.create({
    listContainer: {
        display: 'flex',
        flexDirection: "column",
    },
    listItems: {
        backgroundColor: 'white',
        paddingHorizontal: 25,
        paddingVertical: 15,
        fontSize: 16,
        color: '#222',
        borderBottomWidth: 1,
        borderColor: '#f0f0f0'
    }
});