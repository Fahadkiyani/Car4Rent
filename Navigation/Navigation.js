import { createStackNavigator, HeaderTitle } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

// Import Screens
import PreHomeLocationGetter from '../screens/PreHomeLocationGetter';
import Home from '../screens/Home/Home';
import CitySelect from '../screens/SearchOptions/CitySelect';
import Search from '../screens/SearchOptions/Search';
import Details from '../screens/Details/Details';

const ItemsNavigator = createStackNavigator({
    PreHomeLocationGetter: {
        screen: PreHomeLocationGetter,
        navigationOptions: { title: '', headerStyle: { height: 0 } }

    },
    Home: {
        screen: Home,
        navigationOptions: { title: '', headerStyle: { backgroundColor: '#f9f9f9', height: 0 }, headerLeft: ()=>null }
    },Details:{
        screen:Details,
        navigationOptions:{title:'', headerTransparent:true,headerTintColor:'#f9f9f9'}
    },
    CitySelect:{
        screen:CitySelect,
        navigationOptions:{title:'Change City', headerStyle:{backgroundColor:'#fff',height:40}}
    },
    Search:{
        screen:Search,
        navigationOptions:{title:'Search car', headerStyle:{backgroundColor:'#fff',height:40}}
    }
}, {
    initialRouteName: 'Home',
    // defaultNavigationOptions:{
    //     headerTintColor:'transparent',
    //     headerStyle:{backgroundColor:'#fff',height:0},
    //     headerTitleAlign:'center',
    // }
});


export default createAppContainer(ItemsNavigator);