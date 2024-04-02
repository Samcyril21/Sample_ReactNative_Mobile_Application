import {React, useState,useContext} from "react";
import {View, Text,FlatList,PixelRatio} from 'react-native';
import NavigationHeaderComponent from '../../components/NavigationHeaderComponent/NavigationHeaderComponent';
import { screeNames } from '../../utils/ScreenNames';
import {styles} from './Style';
import SearchBarComponent from '../../components/SearchBarComponent/SearchBarComponent';
import AddButton from "../../components/AddButtonComponent/AddButtonComponent";
import { DeliveryChallanListContext } from "../../contexts/DeliveryChallansContext";
import DeliveryChallanItem from "../../components/Listing/DeliveryChallanItem/DeliveryChallanItem";




function DeliveryChallanScreen({navigation}) {

    const [searchBarVisible, setSearchBarVisible] = useState(false);
    const deliveryChallanListData = useContext(DeliveryChallanListContext);


    navigation['IsDrawer'] = true;
    navigation['title'] = 'DeliveryChallan'
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
                navigation.navigate(screeNames.AddDeliveryChallan)  
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
                data={deliveryChallanListData}
                renderItem={({item}) => <DeliveryChallanItem item={item} />}
                keyExtractor={item => item.DeliveryChallantId}/>
              </View>
        </View>
        <AddButton addButtonProrps={addButtonProrps}/>
        </>
    );
}
export default DeliveryChallanScreen;