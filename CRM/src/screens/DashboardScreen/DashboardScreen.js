import React from 'react';
import {View, Text} from 'react-native';
import NavigationHeaderComponent from '../../components/NavigationHeaderComponent/NavigationHeaderComponent';
import { screeNames } from '../../utils/ScreenNames';
import {styles} from './Style';
import Icon from 'react-native-vector-icons/Entypo';

function DashboardScreen({navigation}) {
    navigation['IsDrawer'] = true;
    navigation['title'] = 'Dashboard'
    navigation['OnDrawerPress'] = OnDrawerPress = () => {
        navigation.openDrawer();
    }
    return (
        <>
        <NavigationHeaderComponent navigation = {navigation}/>
        <View style={styles.container}>
            <Text>Dashboard Screen </Text>
        </View>
        </>
        
    );
}
export default DashboardScreen;