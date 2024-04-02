import {React, useState} from "react";
import {View, Text} from 'react-native';
import NavigationHeaderComponent from '../../components/NavigationHeaderComponent/NavigationHeaderComponent';
import { screeNames } from '../../utils/ScreenNames';
import {styles} from './Style';
import SearchBarComponent from '../../components/SearchBarComponent/SearchBarComponent';
import AddButton from "../../components/AddButtonComponent/AddButtonComponent";


function JobCardsScreen({navigation}) {

    const [searchBarVisible, setSearchBarVisible] = useState(false);
    navigation['IsDrawer'] = true;
    navigation['title'] = 'JobCards'
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
                  
        }
    }



    return (
        <>
        <NavigationHeaderComponent navigation = {navigation}/>
        {searchBarVisible?<SearchBarComponent searchProps={searchProps}/>:<></>}
        <View style={styles.container}>
            <Text>JobCards Screen </Text>
        </View>
        <AddButton addButtonProrps={addButtonProrps}/>
        </>
    );
}
export default JobCardsScreen;