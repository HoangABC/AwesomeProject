import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab } from "react-native-paper"; 

const createBottomTabNavigator = ({ navigation }) => {
    return (
        <View style={{ paddingTop: 40 }}>
            <Tab.Section>
                <Tab.Item 
                    label="Home" 
                    icon={"home"}
                    onPress={() => navigation.navigate("home")} /> 
                <Tab.Item 
                    label="Details" 
                    icon={"email"}
                    onPress={() => navigation.navigate("details")} /> 
            </Tab.Section>
        </View>
    )
}

export default createBottomTabNavigator;
