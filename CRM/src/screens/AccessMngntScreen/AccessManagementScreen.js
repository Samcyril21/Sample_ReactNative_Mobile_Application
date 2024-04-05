import React,{useContext} from "react";
import { View, Text, FlatList, PixelRatio } from "react-native";
import {styles} from './Style';
import NavigationHeaderComponent from '../../components/NavigationHeaderComponent/NavigationHeaderComponent';
import { screeNames } from '../../utils/ScreenNames';
import AddButton from "../../components/AddButtonComponent/AddButtonComponent";
import { StaffListContext } from "../../contexts/StaffsContext";
import StaffItem from "../../components/Listing/StaffItem/StaffItem";




function AccessManagementScreen({navigation}) {

    const staffListData = useContext(StaffListContext);
    navigation['IsDrawer'] = true;
    navigation['title'] = 'Access Management';
    navigation['OnDrawerPress'] = OnDrawerPress = () => {
        navigation.openDrawer();
    }

    const addButtonProrps = {
        openAddModal: () => {
            navigation.navigate(screeNames.AddStaffScreen)      
        }
    }

    return (    
        <>
        <NavigationHeaderComponent navigation={navigation}/>
        <View style={styles.container}>
        <View style={styles.container}>
                <FlatList
                style={{ marginHorizontal: PixelRatio.roundToNearestPixel(13), marginVertical: 5, padding:10}}
                data={staffListData}
                renderItem={({item}) => <StaffItem item={item} />}
                keyExtractor={item => item.StaffId}/>
              </View>
        </View>
        <AddButton addButtonProrps={addButtonProrps}/>
        </>
     
    );
}
export default AccessManagementScreen;