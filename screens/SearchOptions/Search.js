import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, FlatList, StatusBar, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons, Fontisto } from '@expo/vector-icons';

// import { Picker } from '@react-native-picker/picker';

// import cities from '../../cities.json';

export default function Search(props) {

    let location = props.navigation.state.params.location;
    return (
        <View>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#fff" translucent={false} />
            <View>
                <Text>Search Cars</Text>
                
            </View>
        </View>
    );
}

