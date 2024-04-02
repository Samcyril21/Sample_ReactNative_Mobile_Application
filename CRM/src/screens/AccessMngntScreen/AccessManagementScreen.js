import React from "react";
import { View, Text } from "react-native";
import {styles} from './Style';
import NavigationHeaderComponent from '../../components/NavigationHeaderComponent/NavigationHeaderComponent';
import { screeNames } from '../../utils/ScreenNames';




function AccessManagementScreen({navigation}) {
    navigation['IsDrawer'] = true;
    navigation['title'] = 'AccessManagement';
    navigation['OnDrawerPress'] = OnDrawerPress = () => {
        navigation.openDrawer();
    }
    return (    
        <>
        <NavigationHeaderComponent navigation={navigation}/>
        <View style={styles.container}>
            <Text>Access Management Screen </Text>
        </View>
        </>
     
    );
}
export default AccessManagementScreen;