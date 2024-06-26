import React,{useContext,useState} from 'react';
import { View, Text, TextInput,ScrollView,SafeAreaView} from 'react-native';
import {styles} from './Style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { screeNames } from '../../utils/ScreenNames';
import { Appstyles } from '../../config/styles';
import { literals } from "../../utils/Strings";
import DropdownComponent from '../DropdownComponent/DropdownComponent';
import NavigationHeaderComponent from '../NavigationHeaderComponent/NavigationHeaderComponent';
import { EnquiryListContext } from '../../contexts/EnquiriesContext';
import { EnquiryDispatchContext } from '../../contexts/EnquiriesContext';
import DateMode from '../../components/DatepickerComponent/Datepicker';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { formatDate } from '../../config/formatDate';


const AddEnquiries = ({navigation},props) => {

    const existingEnquiryList = useContext(EnquiryListContext);
    const setEnquiryList = useContext(EnquiryDispatchContext);
    const [newEnquiry,setNewEnquiry] = useState(
        {EnquiryId: '#16789',
        CustomerName: '',
        FollowUpDate: '',
        Contact:'',
        Category: 'John Doe',
        Status:'High',
        CompanyName:'Coleague',
        GstIn:'1234567890',
        Address:'',
        City:'',
        State:'',
        Pincode:'',
        Requirements:'',});

    navigation['IsDrawer'] = false;
    navigation['title'] = 'New Enquiry'
    navigation['OnDrawerPress'] = OnDrawerPress = () => {
        navigation.navigate(screeNames.EnquiryScreen)
    }
    navigation['isSearchIcon'] = false;
   

    const Categorydata = [
        { label: 'Furniture', value: '1' },
        { label: 'Electronics', value: '2' },
        { label: 'Motors', value: '3' },
        { label: 'Materials', value: '4' },
        { label: 'Electrical', value: '5' },
      ];


const dropdownProps = {
        dropdownLable:'Category',
        container:styles.inputView,
        dropdown : styles.dropdown, 
        placeholderStyle:styles.placeholderStyle,
        selectedTextStyle:styles.selectedTextStyle,
        inputSearchStyle:styles.inputSearchStyle,
        iconStyle:styles.iconStyle,
        data:Categorydata,
        search:true,
        maxHeight:300,
        labelField:"label",
        valueField:"value",
        placeholder:"Select Category",
        searchPlaceholder:"Search"
}


const OnCancelPress = () => {
    setNewEnquiry({
        EnquiryId: '#16789',
        CustomerName: '',
        FollowUpDate: '',
        Contact:'',
        Category: 'John Doe',
        Status:'High',
        CompanyName:'Coleague',
        GstIn:'1234567890',
        Address:'',
        City:'',
        State:'',
        Pincode:'',
        Requirements:'',})
  }
  
  const OnSavePress = () => {
    if(newEnquiry.CustomerName === '') {
        alert('Enter Customer Name');
        return;
    }
    if(newEnquiry.FollowUpDate === '') {
        alert('Enter Follow-Up-Date');
        return;
    }else{
        setEnquiryList([...existingEnquiryList,newEnquiry]);
        setNewEnquiry({
            EnquiryId: '#16789',
            CustomerName: '',
            FollowUpDate: '',
            Contact:'',
            Category: 'John Doe',
            Status:'High',
            CompanyName:'Coleague',
            GstIn:'1234567890',
            Address:'',
            City:'',
            State:'',
            Pincode:'',
            Requirements:'',})
       navigation.navigate(screeNames.EnquiryScreen)
    }  
  }

  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const handleDateConfirm = (date) => {
    const formattedDate = formatDate(date);
    setNewEnquiry((prevEnquiry) => ({
        ...prevEnquiry,
        FollowUpDate: formattedDate,
    }));
    console.log('Date confirmed:', formattedDate);
    setIsDatePickerOpen(false);
};

  const handleDateCancel = () => {
      console.log('Date selection cancelled');
      setIsDatePickerOpen(false);
  };

    return (
    <>
     <NavigationHeaderComponent navigation = {navigation}/>
       <ScrollView>
           <View style={styles.modalContainer}> 
              <View style={styles.modalBodyView}>
                <Text style={styles.modalLable}>Name</Text>
                <View  style={styles.inputView}>
                  <TextInput style={styles.input}
                     onChangeText={(text) => setNewEnquiry({...newEnquiry, CustomerName: text})}
                     value={newEnquiry.CustomerName}
                     placeholder="Customer Name"
                     >
                  </TextInput>
                </View>
                <Text style={styles.modalLable}>Category</Text>
                <DropdownComponent  dropdownProps={dropdownProps}/>
                <Text style={styles.modalLable}>Follow-Up-Date</Text>
                <View  style={styles.dateInputView}>
                  <TextInput style={styles.input}
                     onChangeText={(text) => setNewEnquiry({...newEnquiry, FollowUpDate: text})}
                     value={newEnquiry.FollowUpDate}
                     placeholder="dd/mm/yyyy"
                     >
                  </TextInput>
                  <TouchableOpacity  onPress={() => setIsDatePickerOpen(true)}>
                     <IonIcon name="calendar" size={20} color="#000"></IonIcon>
                     <DateMode
                     open={isDatePickerOpen}
                     onConfirm={handleDateConfirm}
                     onCancel={handleDateCancel}
                     />
                </TouchableOpacity>
                </View>
                <Text style={styles.modalLable}>Phone</Text>
                <View  style={styles.inputView}>
                  <TextInput style={styles.input}
                     onChangeText={(text) => setNewEnquiry({...newEnquiry, Contact: text})}
                     value={newEnquiry.Contact}
                     placeholder="+91 0000000000"
                     >
                  </TextInput>
                </View>
                <Text style={styles.modalLable}>Address</Text>
                <View  style={styles.inputView}>
                  <TextInput  style={styles.input}
                     onChangeText={(text) => setNewEnquiry({...newEnquiry, Address: text})}
                     value={newEnquiry.Address}
                     placeholder="Enter Address"
                     >   
                  </TextInput>
                </View>
                <View style={styles.locationContainer}>
                <View  style={styles.locationinputView}>
                <TextInput  style={styles.input}
                     onChangeText={(text) => setNewEnquiry({...newEnquiry, Pincode: text})}
                     value={newEnquiry.Pincode}
                     placeholder='Pincode'
                     >   
                </TextInput>
                </View>
                <View>
                <View  style={styles.locationinputView}> 
                  <TextInput  style={styles.input}
                     onChangeText={(text) => setNewEnquiry({...newEnquiry, City: text})}
                     value={newEnquiry.City}
                     placeholder='City'
                     >   
                  </TextInput>
                </View>
                </View>
                <View>
                <View style={styles.locationinputView}>
                <TextInput  style={styles.input}
                     onChangeText={(text) => setNewEnquiry({...newEnquiry, State: text})}
                     value={newEnquiry.State}
                     placeholder='State'
                     >   
                  </TextInput>
                </View>
                </View>
                </View>
                <Text style={styles.modalLable}>Requirements</Text>
                <View  style={styles.descriptionView}>
                  <TextInput  
                     onChangeText={(text) => setNewEnquiry({...newEnquiry, Requirements: text})}
                     value={newEnquiry.Requirements}
                     placeholder='Enter Requirements'
                     >   
                  </TextInput>
                </View>   
              </View>
              <View style={styles.modalFooterView}>
                <TouchableOpacity onPress={OnCancelPress}
                 style={styles.modalButton}>
                <Text style={{color:'black'}}>Cancel </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={OnSavePress} style={styles.modalButton}>
                <Text style={{color:'black'}}>Save </Text>
                </TouchableOpacity>
              </View>
           </View>
       </ScrollView>
        
    </>
       
    )}

    export default AddEnquiries;