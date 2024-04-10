import React,{useContext} from 'react';
import {View, Text, ScrollView,Button,TouchableOpacity,Image} from 'react-native';
import NavigationHeaderComponent from '../../../components/NavigationHeaderComponent/NavigationHeaderComponent';
import { screeNames } from '../../../utils/ScreenNames';
import {styles} from './Style';
import AddButton from '../../../components/AddButtonComponent/AddButtonComponent';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { Appstyles } from '../../../config/styles';
import Feather from 'react-native-vector-icons/Feather';
import {ImageSources} from '../../../utils/ImageSources';



const QuotationDetails = ({navigation,route}) => {
    const  item  = route.params.item;
    const total = item.Items.reduce((accumulator, currentItem) => {
        return accumulator + (parseInt(currentItem.quantity, 10) * parseInt(currentItem.price, 10));
      }, 0);
    // const enquiryListData = useContext(QuotationListContext);
    console.log(item)
    navigation['IsDrawer'] = false;
    navigation['title'] = 'Quotation No : '+item.QuotationId
    navigation['date']  = item.QuotationDate
    navigation['OnDrawerPress'] = OnDrawerPress = () => {
    navigation.navigate(screeNames.QuatationsScreen)
    }
    navigation['isSearchIcon'] = false;
    
    createDeliveryChallan = () => {
        navigation.navigate(screeNames.AddDeliveryChallan)
    }
   
    return (
        <>
            <NavigationHeaderComponent navigation={navigation} />
            <ScrollView>
            {/* <View style={styles.container}>
                <Text>Quotation Details Screen</Text>
                <Text>Quotation ID : {item.QuotationId} </Text>
                <Text>Reference No : {item.EnquiryNo} </Text>
            </View> */}
            <View style={styles.container}>
            <View style={styles.buttonContainer}>
                
                <TouchableOpacity onPress={createDeliveryChallan} style={styles.buttonWrapper}>
                    <Text style={styles.buttonText}>Create Delivery Challan </Text>
                </TouchableOpacity>
                
                <TouchableOpacity title="Download Info" onPress={() => {}} style={styles.buttonWrapper} >
                   <Text style={styles.buttonText}>Download Info </Text>
                </TouchableOpacity>

                <TouchableOpacity title="Print" onPress={() => {}} style={styles.buttonWrapper}>
                <IonIcon name="print-outline" size={18} color={Appstyles.colors.PRIMARY_COLOR}></IonIcon>
                </TouchableOpacity>
             
                <TouchableOpacity title="Edit" onPress={() => {}} style={styles.buttonWrapper}>
                 <Feather name="edit" size={18} color={Appstyles.colors.PRIMARY_COLOR} />
                </TouchableOpacity>
            </View>
            <View style={styles.imageContainer}>
                <Image source={ImageSources.AppImages.MobileImage} style={styles.image}></Image>
                <Image source={ImageSources.AppImages.MobileImage} style={styles.image}></Image>
                <Image source={ImageSources.AppImages.MobileImage} style={styles.image}></Image>
                <Image source={ImageSources.AppImages.MobileImage} style={styles.image}></Image>
                <Image source={ImageSources.AppImages.MobileImage} style={styles.image}></Image>
            </View>
                <View style={styles.detailsContainer}>
                    <View>
                    <Text>Full Name</Text>
                    <Text style={styles.label}>{item.CustomerName}</Text>
                    </View>
                    <View style={styles.phoneContainer}>
                    <Text style>Phone </Text>
                    <Text style={styles.label}>{item.Contact}</Text>
                    </View>      
                </View>
                <View style={styles.line}></View>
                <View style={styles.detailsContainerTwo}>
                    <View>
                    <Text >Reference No </Text>
                    <Text style={styles.label}>{item.EnquiryNo}</Text>
                    </View>
                    <View style={styles.phoneContainer}>
                    <Text>Delivery Date:</Text>
                    <Text style={styles.label}>{item.DeliveryDate}</Text>
                    </View>   
                    <View style={styles.phoneContainer}>
                    <Text>Payment Terms:</Text>
                    <Text style={styles.label}>{item.PaymentTerm}</Text>
                    </View>    
                </View>
                <View>

                </View>
                <View style={styles.AddressContainer}>
                <Text>Subject</Text>
                 <Text style={{marginTop:5,color:Appstyles.colors.COLOR_BLACK}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent eget dictum urna. Quisque est ipsum, consequat vehicula mollis ac,
                      dignissim quis nulla.</Text>
                </View>
                <View style={styles.line}></View>
                <View >
                <Text style={styles.heading}>Items</Text>
                <View style={styles.tableContainer}>
                    <View style={styles.tableHeader}>
                    <Text style={styles.headerText}>Product</Text>
                    <Text style={styles.headerText}>Quantity</Text>
                    <Text style={styles.headerText}>Price</Text>
                    <Text style={styles.headerText}>Total</Text>
                    </View>
                    {item.Items.map((item, index) => (
                    <View key={index} style={styles.tableRow}>
                        <Text style={styles.rowText}>{item.product}</Text>
                        <Text style={styles.rowText}>{item.quantity}</Text>
                        <Text style={styles.rowText}>₹ {item.price}</Text>
                        <Text style={styles.rowText}>₹ {parseInt(item.quantity, 10) * parseInt(item.price, 10)}</Text>
                    </View>
                    ))}
                </View>
                <View style={styles.totalContainer}>
                    <Text>Summary </Text>
                    <Text> ₹ {total}</Text>
                </View>
                </View>
                
              </View>
            </ScrollView>
            {/* <AddButton />    */}
        </>     
    );
};
export default QuotationDetails