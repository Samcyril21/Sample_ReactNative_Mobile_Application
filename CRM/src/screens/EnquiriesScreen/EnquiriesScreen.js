import {React, useState, useContext} from "react";
import {View, Text,ScrollView, FlatList,PixelRatio} from 'react-native';
import NavigationHeaderComponent from '../../components/NavigationHeaderComponent/NavigationHeaderComponent';
import { screeNames } from '../../utils/ScreenNames';
import {styles} from './Style';
import SearchBarComponent from '../../components/SearchBarComponent/SearchBarComponent';
import AddButton from "../../components/AddButtonComponent/AddButtonComponent";
import { EnquiryListContext } from "../../contexts/EnquiriesContext";
import EnquiryItem from "../../components/Listing/EnquiryItemComponent/EnquiryItemComponent";



function EnquiriesScreen({navigation}) {

    const [searchBarVisible, setSearchBarVisible] = useState(false);
    const enquiriesListData = useContext(EnquiryListContext);



    navigation['IsDrawer'] = true;
    navigation['title'] = 'Enquiries'
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
            navigation.navigate(screeNames.AddEnquiriesScreen)
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
                data={enquiriesListData}
                renderItem={({item}) => <EnquiryItem item={item} />}
                keyExtractor={item => item.EnquiryId}/>
              </View>
        </View>
        <AddButton addButtonProrps={addButtonProrps}/>
        </>
    );
}
export default EnquiriesScreen;