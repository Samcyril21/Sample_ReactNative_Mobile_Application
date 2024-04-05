import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import NavigationHeaderComponent from '../../../components/NavigationHeaderComponent/NavigationHeaderComponent';
import { screeNames } from '../../../utils/ScreenNames';
import {styles} from './Style';
import AddButton from '../../../components/AddButtonComponent/AddButtonComponent';



const QuotationDetails = ({navigation,route}) => {
    navigation['IsDrawer'] = false;
    navigation['title'] = 'Quotation Details'
    navigation['OnDrawerPress'] = OnDrawerPress = () => {
    navigation.navigate(screeNames.QuatationsScreen)
    }
    navigation['isSearchIcon'] = false;
    const  item  = route.params.item;
    console.log(item)
    return (
        <>
            <NavigationHeaderComponent navigation={navigation} />
            <ScrollView>
            <View style={styles.container}>
                <Text>Quotation Details Screen</Text>
                <Text>Quotation ID : {item.QuotationId} </Text>
                <Text>Reference No : {item.EnquiryNo} </Text>
            </View>
            </ScrollView>
            {/* <AddButton />    */}
        </>     
    );
};
export default QuotationDetails