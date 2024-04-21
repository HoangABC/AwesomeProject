import React from "react";
import { View } from "react-native";
import { Drawer } from "react-native-paper"; 

const CustomDrawerNavigation = ({ navigation }) => {
    return (
        <View style={{ paddingTop: 40 }}>
            <Drawer.Section>
                <Drawer.Item 
                    label="Home" 
                    icon={"home"}
                    onPress={() => navigation.navigate("home")} /> 
                <Drawer.Item 
                    label="Details" 
                    icon={"email"}
                    onPress={() => navigation.navigate("details")} /> 
            </Drawer.Section>
        </View>
    )
}

export default CustomDrawerNavigation;
