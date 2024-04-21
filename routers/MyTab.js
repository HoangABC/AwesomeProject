import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';

const Tab = createBottomTabNavigator()

const MyTab = () => {
    return(
        <Tab.Navigator 
        initialRouteName="home"
            drawerContent={props => <createBottomTabNavigator {...props}/>}
            >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Details" component={DetailScreen} />
        </Tab.Navigator>
    )
}

export default MyTab;