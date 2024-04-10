import React,{useState,useContext} from 'react';
import {View, Text, TextInput, TouchableOpacity,FlatList,KeyboardAvoidingView} from 'react-native';
import {styles} from './Style';
import NavigationHeaderComponent from '../NavigationHeaderComponent/NavigationHeaderComponent';
import {screeNames} from '../../utils/ScreenNames';
import CheckBox from 'react-native-check-box';
import { Appstyles } from '../../config/styles';
import { StaffListContext, StaffDispatchContext } from '../../contexts/StaffsContext';



const AddStaffScreen = ({navigation}) => {

    navigation['IsDrawer'] = false;
    navigation['title'] = 'New Staff'
    navigation['OnDrawerPress'] = OnDrawerPress = () => {
    navigation.navigate(screeNames.AccessManagementScreen)
    }
    navigation['isSearchIcon'] = false;
    
    const existingStaffList = useContext(StaffListContext);
    const setStaffList = useContext(StaffDispatchContext);
    const [newStaff,setNewStaff] = useState({
        StaffId: '#16786',
        Name: '',
        Email: '',
        Password: '',
        Accesses:'',
        AddedOn:'01/01/2022',
        AddedBy: 'John Doe',
    })
    const [AccessScreensData, setAccessScreensData] = useState([
        {
            screenId:1,
            screenName:'Products',
            isChecked:false
        
        },
        {
            screenId:2,
            screenName:'Quotation',
            isChecked:false
            
        },
        {
            screenId:3,
            screenName:'DC',
            isChecked:false
            
        },
        {
            screenId:4,
            screenName:'JC',
            isChecked:false
            
        },
        {
            screenId:5,
            screenName:'Complaints',
            isChecked:false
            
        },
        {
            screenId:6,
            screenName:'Access Mgmt',
            isChecked:false
            
        },
        {
            screenId:7,
            screenName:'Dashboard',
            isChecked:false

        },
    ]);

    const handleCheckboxChange = (item) => {
        setAccessScreensData((prevData) =>
            prevData.map((dataItem) =>
                dataItem.screenName === item.screenName
                    ? { ...dataItem, isChecked: !dataItem.isChecked }
                    : dataItem
            )
        );
    };
    

    const RenderCheckBox = (props) => {
        return (
            <CheckBox
              style={{flex:1,padding:0, marginTop: 25}}
              onClick={() => handleCheckboxChange((props.item))}
              isChecked={props.item.isChecked}
              rightText={props.item.screenName}
              checkedCheckBoxColor={Appstyles.colors.PRIMARY_COLOR}
            />
        )
    }

    OnSavePress = () => {
        const checkedScreensNames = AccessScreensData.filter(item => item.isChecked).map(item => item.screenName).join();
        const updatedStaffAccesses ={...newStaff,Accesses:checkedScreensNames};
        setStaffList([...existingStaffList,updatedStaffAccesses]);
        console.log(existingStaffList)
        console.log(newStaff)
        navigation.navigate(screeNames.AccessManagementScreen)
    }
    OnCancelPress = () => {
        navigation.navigate(screeNames.AccessManagementScreen)
    }

    return (
        <>
        <NavigationHeaderComponent navigation={navigation}/>
        <KeyboardAvoidingView>
        <View style={styles.modalContainer}> 
              <View style={styles.modalBodyView}>
              <Text style={styles.modalLable}>Name</Text>
                <View  style={styles.inputView}>
                  <TextInput style={styles.input}
                     onChangeText={(text) => setNewStaff({...newStaff, Name: text})}
                     value={newStaff.Name}
                     placeholder="Customer Name"
                     >
                  </TextInput>
                </View>
                <Text style={styles.modalLable}>Email</Text>
                <View  style={styles.inputView}>
                  <TextInput style={styles.input}
                    autoComplete='email'
                    onChangeText={(text) => setNewStaff({...newStaff, Email: text})}
                    value={newStaff.Email}
                     placeholder="Enter Email"
                     >
                  </TextInput>
                </View>
                <Text style={styles.modalLable}>Password</Text>
                <View  style={styles.inputView}>
                  <TextInput style={styles.input}
                        secureTextEntry={true}
                        onChangeText={(text) => setNewStaff({...newStaff, Password: text})}
                        value={newStaff.Password}
                     placeholder="Enter Password"
                     >
                  </TextInput>
                </View>
                <Text style={styles.modalLable}>Accesses</Text>
                <View style={styles.checkboxView}>
                    <FlatList
                        data={AccessScreensData}
                        renderItem={({item}) => <RenderCheckBox item = {item}/>}
                        keyExtractor={item => item.screenId} 
                        numColumns={2} 
                    />
                </View>
              </View>
              <View style={styles.modalFooterView}>
                <TouchableOpacity 
                 onPress={OnCancelPress}
                 style={styles.modalButton}>
                <Text style={{color:'black'}}>Cancel </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={OnSavePress} 
                style={styles.modalButton}>
                <Text style={{color:'black'}}>Save </Text>
                </TouchableOpacity>
              </View>
        </View>
        </KeyboardAvoidingView>
        
        </>   
    )
};

export default AddStaffScreen;