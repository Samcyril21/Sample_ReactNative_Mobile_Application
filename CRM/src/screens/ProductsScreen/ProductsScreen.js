import {React, useState,useContext} from "react";
import { View, 
        Text,
        TouchableOpacity, 
        FlatList, 
        PixelRatio,  
        StatusBar, } from "react-native";
import {styles} from './Style';
import NavigationHeaderComponent from '../../components/NavigationHeaderComponent/NavigationHeaderComponent';
import SearchBarComponent from '../../components/SearchBarComponent/SearchBarComponent';
import ProductItem from "../../components/Listing/ProductItemComponent/ProductItem";
import AddButton from "../../components/AddButtonComponent/AddButtonComponent";
import { ProductListContext } from "../../contexts/ProductContext";
import AddProduct from '../../components/AddProduct/AddProduct';
import { Appstyles } from "../../config/styles";



function ProductsScreen({navigation}) {
    const [searchBarVisible, setSearchBarVisible] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const ProductList = useContext(ProductListContext);

    navigation['IsDrawer'] = true;
    navigation['title'] = 'Products';
    navigation.OnDrawerPress = OnDrawerPress = () => {
        navigation.openDrawer();
        setSearchBarVisible(false);
    }
    navigation['isSearchIcon'] = true;
    navigation.searchBarToggle = () => {
        setSearchBarVisible(!searchBarVisible);
    }

    const searchProps ={
        placeholder: 'Search by Title',
        
    }
    const addButtonProrps = {
        openAddModal: () => {
            setModalVisible(true);
        }
    }
    
    return (    
        <> 
        <NavigationHeaderComponent navigation={navigation}/>
        {searchBarVisible?<SearchBarComponent searchProps={searchProps}/>:<></>}
        {/* <SafeAreaView>
          <ScrollView> */}
              <View style={styles.container}>
                <FlatList
                style={{ marginHorizontal: PixelRatio.roundToNearestPixel(13), marginVertical: 5, padding:10}}
                data={ProductList}
                renderItem={({item}) => <ProductItem item={item} />}
                keyExtractor={item => item.ProductId}/>
              </View>
              <AddProduct modalVisible={modalVisible} setModalVisible={setModalVisible}/>  
          {/* </ScrollView>
        </SafeAreaView> */}
        <AddButton addButtonProrps={addButtonProrps}/>
       </>
    );
}
export default ProductsScreen;