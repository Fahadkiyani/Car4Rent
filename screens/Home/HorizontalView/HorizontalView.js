import { set } from 'lodash';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, FlatList, Pressable, StatusBar, useWindowDimensions, Dimensions } from 'react-native';

import YouMayLike from './YouMayLike';
import EconomicalCars from './Economical';

export default function HorizontalView(props) {
    let navigation = props.navigation;
    // console.log(navigationProp);
    return (
        <View>
            <YouMayLike navigation={navigation}/>
            <EconomicalCars navigation={navigation}/>
        </View>

    );
}