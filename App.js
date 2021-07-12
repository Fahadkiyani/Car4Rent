// import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

// import Home from './screens/Home';
import ItemsNavigator from './Navigation/Navigation';
// import getUser from './FakeApiData/FakeApiData'

export default function App() {
  
  let [fontsLoaded] = useFonts({
    'LatoBlackItalic': require('./assets/fonts/Lato-BlackItalic.ttf'),
    'LatoBold': require('./assets/fonts/Lato-Bold.ttf'),
    'LatoRegular':require('./assets/fonts/Lato-Regular.ttf'),
    'LatoThin':require('./assets/fonts/Lato-Thin.ttf'),
    'RobotoRegular':require('./assets/fonts/Roboto-Regular.ttf'),
    'RobotoBlack':require('./assets/fonts/Roboto-Black.ttf'),
});

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      
      <View style={styles.container}>
        <ItemsNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
