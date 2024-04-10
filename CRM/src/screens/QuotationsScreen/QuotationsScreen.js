import {React, useState, useContext} from "react";
import {View, Text, FlatList,PixelRatio,Dimensions} from 'react-native';
import NavigationHeaderComponent from '../../components/NavigationHeaderComponent/NavigationHeaderComponent';
import { screeNames } from '../../utils/ScreenNames';
import SearchBarComponent from '../../components/SearchBarComponent/SearchBarComponent';
import AddButton from "../../components/AddButtonComponent/AddButtonComponent";
import QuotationItem from "../../components/Listing/QuotationItemComponent/QuotationItemComponent";
import { QuotationListContext } from "../../contexts/QuotationsContext";
import {styles} from './Style';
var {width, height} = Dimensions.get('window');



function QuotationsScreen({navigation}) {
     console.log('width : ',width , 'height:', height)

    const [searchBarVisible, setSearchBarVisible] = useState(false);
    const quotationList = useContext(QuotationListContext);
    navigation['IsDrawer'] = true;
    navigation['title'] = 'Quotations'
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
            navigation.navigate(screeNames.AddQuotationScreen)    
        }
    }

    OnQuotationNumberClick = (item) => {
        navigation.navigate(screeNames.QuotationDetailsScreen,{item})
        console.log('before',item)
    }



    return (
        <>
        <NavigationHeaderComponent navigation = {navigation}/>
        {searchBarVisible?<SearchBarComponent searchProps={searchProps}/>:<></>}
        <View style={styles.container}>
        <View style={styles.container}>
            <FlatList
                style={{ marginHorizontal: PixelRatio.roundToNearestPixel(13), marginVertical: 5, padding:10}}
                data={quotationList}
                renderItem={({item}) => <QuotationItem item={item} OnQuotationNumberClick={() => OnQuotationNumberClick(item)} />}
                keyExtractor={item => item.QuotationId}/>
              </View>
        </View>
        <AddButton addButtonProrps={addButtonProrps}/>
        </>
    );
}
export default QuotationsScreen;