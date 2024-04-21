import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";
import CustomDrawerNavigation from "../components/CustomerDrawerNavigation";

const Drawer = createDrawerNavigator()

const MyDrawer = () => {
    return(
        <Drawer.Navigator
            initialRouteName="home"
            drawerContent={props => <CustomDrawerNavigation {...props}/>}
        >
            <Drawer.Screen name="home" component={HomeScreen}/>
            <Drawer.Screen name="details" component={DetailScreen}/>
        </Drawer.Navigator>
    )
}

export default MyDrawer;
