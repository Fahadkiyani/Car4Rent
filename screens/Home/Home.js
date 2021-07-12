import React from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native';
// import FindCarContainer from '../FindCar/FindCarContainer';
import HorizontalView from './HorizontalView/HorizontalView';
import VerticeList from './VerticleList/VerticleList';



export default function Home(props) {
    return (
        <View>
            {/* <StatusBar style="auto" backgroundColor='grey' /> */}
            <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "rgba(255,80,100,1)" translucent = {false}/>
            {/* <StatusBar barStyle="light-content" /> */}
            {/* <View style={styles.container}>
                <FindCarContainer />
                <HorizontalView />
            </View> */}
            <VerticeList AllProps={props} />
           
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
});