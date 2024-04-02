import {React, useState,useContext} from "react";
import {View, Text,FlatList,PixelRatio} from 'react-native';
import NavigationHeaderComponent from '../../components/NavigationHeaderComponent/NavigationHeaderComponent';
import { screeNames } from '../../utils/ScreenNames';
import {styles} from './Style';
import SearchBarComponent from '../../components/SearchBarComponent/SearchBarComponent';
import AddButton from "../../components/AddButtonComponent/AddButtonComponent";
import { ComplaintListContext } from "../../contexts/ComplaintsContext";
import ComplaintItem from "../../components/Listing/ComplaintItemComponent/ComplaintItem";



function ComplaintsScreen({navigation}) {

    const [searchBarVisible, setSearchBarVisible] = useState(false);
    const comlaintListData = useContext(ComplaintListContext);


    navigation['IsDrawer'] = true;
    navigation['title'] = 'Complaints';
    navigation['OnDrawerPress'] = OnDrawerPress = () => {
        navigation.openDrawer();
        setSearchBarVisible(false);
    }
    navigation['isSearchIcon'] = true;
    navigation.searchBarToggle = () => {
        setSearchBarVisible(!searchBarVisible);
    }

    const searchProps ={
        placeholder: 'Search by Name',
    }
    const addButtonProrps = {
        openAddModal: () => {
            navigation.navigate(screeNames.AddComplaintScreen)      
        }
    }



    return (
        <>
        <NavigationHeaderComponent navigation = {navigation}/>
        {searchBarVisible?<SearchBarComponent searchProps={searchProps}/>:<></>}
        <View style={styles.container}>
          <View style={styles.container}>
            <FlatList
                style={{ marginHorizontal: PixelRatio.roundToNearestPixel(13), marginVertical: 5, padding:10}}
                data={comlaintListData}
                renderItem={({item}) => <ComplaintItem item={item} />}
                keyExtractor={item => item.ComplaintId}/>
          </View>
        </View>
        <AddButton addButtonProrps={addButtonProrps}/>
        </>
    );
}
export default ComplaintsScreen;