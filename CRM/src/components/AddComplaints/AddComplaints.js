import {React,useContext,useState} from "react";
import { View, Text,TouchableOpacity,PixelRatio,Modal,TextInput, ScrollView } from "react-native";
import {styles} from './Style';
import NavigationHeaderComponent from "../NavigationHeaderComponent/NavigationHeaderComponent";
import { screeNames } from "../../utils/ScreenNames";
import { Appstyles } from '../../config/styles';
import IonIcon from 'react-native-vector-icons/Ionicons'; 
import { ComplaintListContext, ComplaintDispatchContext } from '../../contexts/ComplaintsContext';
import { useToast } from 'react-native-toast-notifications';



const AddComplaints = ({navigation}) => {
     
    const toast = useToast();
    const existingComplaintList = useContext(ComplaintListContext);
    const setcomplaitsList = useContext(ComplaintDispatchContext);
    const [newComplaint , setNewComplaint] = useState({
        ComplaintId: '#16788',
        CustomerName: '',
        Product: '',
        ComplaintDate: '',
        ResolutionDate: '01/01/2022',
        Contact:'',
        WorkeCompletedDate:'',
        WorkCompletedBy:"",
        Status:'Open',
        Address:'',
        City:'',
        State:'',
        Pincode:'',
        ProductImages:[],
        Details:'',
    });

    navigation['IsDrawer'] = false;
    navigation['title'] = 'New Complaint'
    navigation['OnDrawerPress'] = OnDrawerPress = () => {
    navigation.navigate(screeNames.ComplaintsScreen)
    }
    navigation['isSearchIcon'] = false;


    onCancelPress = () => {
        navigation.navigate(screeNames.ComplaintsScreen)
    }
    onSavePress = () => {
        if(newComplaint.CustomerName === '') {
            alert('Enter Customer Name');
            return;
        }
        else if(newComplaint.Product === '') {
            alert('Enter Product Name');
            return;
        }
        else if(newComplaint.ComplaintDate === '') {
            alert('Enter Complaint Date');
            return;
        }
        else{
            setcomplaitsList([...existingComplaintList,newComplaint]);
            console.log(newComplaint)
            console.log(existingComplaintList)
            navigation.navigate(screeNames.ComplaintsScreen);
            toast.show('Complaint Added Successfully', { type: 'success' });
        }
     }
        
    return (
        <>
          <NavigationHeaderComponent navigation = {navigation}/>
          <ScrollView>
           <View style={styles.modalContainer}> 
              <View style={styles.modalBodyView}>
                <Text style={styles.modalLable}>Name</Text>
                <View  style={styles.inputView}>
                  <TextInput style={styles.input}
                     onChangeText={(text) => setNewComplaint({...newComplaint, CustomerName: text})}
                     value={newComplaint.CustomerName}
                     placeholder="Customer Name"
                     >
                  </TextInput>
                </View>
                <Text style={styles.modalLable}>Product</Text>
                <View  style={styles.inputView}>
                  <TextInput style={styles.input}
                   onChangeText={(text) => setNewComplaint({...newComplaint, Product: text})}
                   value={newComplaint.Product}
                     placeholder="Product Name"
                     >
                  </TextInput>
                </View>
                
                <Text style={styles.modalLable}>Complaint Date</Text>
                <View  style={styles.inputView}>
                  <TextInput style={styles.input}
                     onChangeText={(text) => setNewComplaint({...newComplaint, ComplaintDate: text})}
                     value={newComplaint.ComplaintDate}
                     placeholder="DD/MM/YYYY"
                     >
                  </TextInput>
                </View>
                <Text style={styles.modalLable}>Phone</Text>
                <View  style={styles.inputView}>
                  <TextInput style={styles.input}
                     onChangeText={(text) => setNewComplaint({...newComplaint, Contact: text})}
                     value={newComplaint.Contact}
                     placeholder="+91 0000000000"
                     >
                  </TextInput>
                </View>
                <Text style={styles.modalLable}>Work Completed On</Text>
                <View  style={styles.inputView}>
                  <TextInput style={styles.input}
                     onChangeText={(text) => setNewComplaint({...newComplaint, WorkeCompletedDate: text})}
                     value={newComplaint.WorkeCompletedDate}
                     placeholder="DD/MM/YYYY"
                     >
                  </TextInput>
                </View>
                <Text style={styles.modalLable}>Work Completed By</Text>
                <View  style={styles.inputView}>
                  <TextInput style={styles.input}
                     onChangeText={(text) => setNewComplaint({...newComplaint, WorkCompletedBy: text})}
                     value={newComplaint.WorkCompletedBy}
                     placeholder="Vendor Name"
                     >
                  </TextInput>
                </View>
                <Text style={styles.modalLable}>Address</Text>
                <View  style={styles.inputView}>
                  <TextInput  style={styles.input}
                    onChangeText={(text) => setNewComplaint({...newComplaint, Address: text})}
                    value={newComplaint.Address}
                     placeholder="Enter Address"
                     >   
                  </TextInput>
                </View>
                <View style={styles.locationContainer}>
                <View  style={styles.locationinputView}>
                <TextInput  style={styles.input}
                    onChangeText={(text) => setNewComplaint({...newComplaint, Pincode: text})}
                    value={newComplaint.Pincode}
                     placeholder='Pincode'
                     >   
                </TextInput>
                </View>
                <View>
                <View  style={styles.locationinputView}> 
                  <TextInput  style={styles.input}
                     onChangeText={(text) => setNewComplaint({...newComplaint, City: text})}
                     value={newComplaint.City}
                     placeholder='City'
                     >   
                  </TextInput>
                </View>
                </View>
                <View>
                <View style={styles.locationinputView}>
                <TextInput  style={styles.input}
                     onChangeText={(text) => setNewComplaint({...newComplaint, State: text})}
                     value={newComplaint.State}
                     placeholder='State'
                     >   
                  </TextInput>
                </View>
                </View>
                </View>
                <TouchableOpacity  style={styles.productImageview}>
                  <View  style={{alignItems:'center'}}>
                    <IonIcon name="images-outline" color={Appstyles.colors.PRIMARY_LIGHT_COLOR} size={60}/>
                    <Text style={{color:Appstyles.colors.COLOR_LIGHT_GREY}}>Upload Product Images </Text>
                  </View>
                </TouchableOpacity> 
                
                <Text style={styles.modalLable}>Details</Text>
                <View  style={styles.descriptionView}>
                  <TextInput  
                     onChangeText={(text) => setNewComplaint({...newComplaint, Details: text})}
                     value={newComplaint.Details}
                     placeholder='Enter Details'
                     >   
                  </TextInput>
                </View>   
              </View>
              </View>
             </ScrollView>
              <View style={styles.modalFooterView}>
                <TouchableOpacity onPress={onCancelPress}
                 style={styles.modalButton}>
                <Text style={{color:'black'}}>Cancel </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onSavePress}
                 style={styles.modalButton}>
                <Text style={{color:'black'}}>Save </Text>
                </TouchableOpacity>
              </View>
        
        </>
      
    )
};

export default AddComplaints;