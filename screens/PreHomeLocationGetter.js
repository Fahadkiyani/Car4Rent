import React from 'react';
import { View, Text, Pressable, StyleSheet, TouchableOpacity } from 'react-native';

export default function PreHomeLocationGetter(props) {
    // let navigate= props.navigation.navigate;
    const navigateToHome = (city) => {
        console.log(city);
        console.log(props.navigation.navigate('Home', { city: city }));
    };
    return (
        <View style={styles.Container}>
            <View style={styles.buttonContainer}>
                <Text style={styles.Heading}>Please select your nearest location</Text>
                <TouchableOpacity style={styles.button} activeOpacity={0.1} onPress={() => { navigateToHome('lhr') }}>
                    <Text>Lahore</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} activeOpacity={0.1} onPress={() => { navigateToHome('khi') }}>
                    <Text>Karachi</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.skipBTNContainer}>
                <TouchableOpacity activeOpacity={0.7} onPress={() => { navigateToHome(null) }}>
                    <Text style={styles.skipToNext}>Skip this step</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#fff',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    buttonContainer: {
        backgroundColor: '#f9f9f9',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    skipBTNContainer: {
        flex: 0.1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9f9f9'
    },
    Heading: {
        color: '#222',
        fontSize: 16
    },
    button: {
        width: 200,
        paddingTop: 20,
        paddingBottom: 20,
        // paddingLeft:60,
        // paddingRight:60,
        backgroundColor: 'white',
        borderWidth: 1,
        color: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    skipToNext: {
        color: 'rgba(50,150,200,1)',
        textDecorationLine: 'underline',
        letterSpacing: 0.51,

    }
})