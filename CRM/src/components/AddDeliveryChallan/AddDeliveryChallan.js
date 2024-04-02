import React from "react";
import { View, Text,TouchableOpacity,PixelRatio,Modal,TextInput } from "react-native";
import {styles} from './Style';
import NavigationHeaderComponent from "../NavigationHeaderComponent/NavigationHeaderComponent";
import { screeNames } from "../../utils/ScreenNames";




const AddDeliveryChallan = ({navigation},props) => {

    navigation['IsDrawer'] = false;
    navigation['title'] = 'New Delivery Challan'
    navigation['OnDrawerPress'] = OnDrawerPress = () => {
        navigation.navigate(screeNames.DeliveryChallanScreen)
    }
    navigation['isSearchIcon'] = false;
    return (
        <>
        <NavigationHeaderComponent navigation = {navigation}/>  
        <View>
            <Text>AddDeliveryChallan</Text>
        </View>
        </>
    
    );
};
export default AddDeliveryChallan;