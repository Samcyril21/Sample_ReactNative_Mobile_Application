import React,{useContext,useState} from "react";
import { View, Text,TouchableOpacity,PixelRatio,Modal,TextInput } from "react-native";
import {styles} from './Style';
import NavigationHeaderComponent from "../NavigationHeaderComponent/NavigationHeaderComponent";
import { screeNames } from "../../utils/ScreenNames";
import DropdownComponent from '../DropdownComponent/DropdownComponent';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { Appstyles } from '../../config/styles';
import CheckBox from 'react-native-check-box';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {DeliveryChallanListContext} from '../../contexts/DeliveryChallansContext';
import { DeliveryChallanDispatchContext } from "../../contexts/DeliveryChallansContext";
import { useToast } from 'react-native-toast-notifications';
import DateMode from '../../components/DatepickerComponent/Datepicker';
import { formatDate } from '../../config/formatDate';





const AddDeliveryChallan = ({navigation},props) => {

    const [currentStep, setCurrentStep] = useState(0);
    const [errors, setErrors] = useState([false, false, false, false]);
    const [isChecked, setIsChecked] = useState(false);
    const [items, setItems] = useState([]);
    const toast = useToast();
    const deliveryChallanList = useContext(DeliveryChallanListContext);
    const setDeliveryChallanList = useContext(DeliveryChallanDispatchContext);
    const [newDeliveryChallan, setNewDeliveryChallan] = useState({
            DeliveryChallantId: '#16786',
            CustomerName: 'John Doe',
            PaymentTerm: '',
            PaymentMode: '',
            GstIn: '',
            DeliveryDate: '',
            PaymentDate: '01/01/2022',
            Contact1:'',
            Contact2:'',
            DeliveryAddress:{ 
                Address:'',
                City:'',
                State:'',
                Pincode:'',},
            IsBillingSameAsDelivery: false,
            BillingAddress:{
                Address:'',
                City:'',
                State:'',
                Pincode:'',
            },
            Items:[]
    })

    navigation['IsDrawer'] = false;
    navigation['title'] = 'New Delivery Challan'
    navigation['OnDrawerPress'] = OnDrawerPress = () => {
    navigation.navigate(screeNames.DeliveryChallanScreen)
    }
    navigation['isSearchIcon'] = false;


    const paymentTerms = [{ label: 'IMMEDIATE', value: '1' },
    { label: '15 DAYS', value: '2' },
    { label: '30 DAYS', value: '3' },
    { label: '45 DAYS', value: '4' },
    { label: '60 DAYS', value: '5' }];

    const paymentModes = [{ label: 'Cash', value: '1' },
    { label: 'Cheque', value: '2' },
    { label: 'Credit Card', value: '3' },
    { label: 'UPI', value: '3' }]

    const products = [{ label: 'Sofa', value: '1' },
    { label: 'Table', value: '2' },
    { label: 'King size bed', value: '3' },
    { label: 'Queen size bed', value: '4' },
    { label: 'Chair', value: '5' },
    { label: 'Desk', value: '6' },
    { label: 'Cot', value: '7' },
    { label: 'Window', value: '8' },]


    const progressBarStyle = {
        activeStepIconBorderColor: Appstyles.colors.PRIMARY_LIGHT_COLOR,
        completedStepIconColor: Appstyles.colors.PRIMARY_LIGHT_COLOR,
        activeStepIconColor: Appstyles.colors.PRIMARY_LIGHT_COLOR,
        completedProgressBarColor: Appstyles.colors.PRIMARY_LIGHT_COLOR,
        activeLabelColor: Appstyles.colors.COLOR_BLACK,
        completedCheckColor: Appstyles.colors.COLOR_BLACK
      }


    const progressBarButtonStyle = {
        nextBtnStyle: styles.footerBtnStyle,
        nextBtnTextStyle: { color: Appstyles.colors.COLOR_BLACK, fontSize: 17 },
        nextBtnText: "Next ",
        previousBtnTextStyle: { color: Appstyles.colors.COLOR_BLACK, fontSize: 17 },
        previousBtnText: "Previous ",
        previousBtnStyle: styles.footerBtnStyle
      }


    const PaymentTermsdropdownProps = {
        dropdownLable: 'Payment Terms',
        container: styles.inputView,
        dropdown: styles.dropdown,
        placeholderStyle: styles.placeholderStyle,
        selectedTextStyle: styles.selectedTextStyle,
        inputSearchStyle: styles.inputSearchStyle,
        iconStyle: styles.iconStyle,
        data: paymentTerms,
        search: false,
        maxHeight: 300,
        labelField: "label",
        valueField: "value",
        placeholder: "Select a Term",
        searchPlaceholder: "Search"
      }

      const PaymentModeDropdownProps = {
        dropdownLable: 'Payment',
        container: styles.inputView,
        dropdown: styles.dropdown,
        placeholderStyle: styles.placeholderStyle,
        selectedTextStyle: styles.selectedTextStyle,
        inputSearchStyle: styles.inputSearchStyle,
        iconStyle: styles.iconStyle,
        data: paymentModes,
        search: false,
        maxHeight: 300,
        labelField: "label",
        valueField: "value",
        placeholder: "Select Payment Mode",
        searchPlaceholder: "Search"
      }

      const ProductsdropdownProps = {
        dropdownLable: 'Products',
        container: styles.inputView,
        dropdown: styles.dropdown,
        placeholderStyle: styles.placeholderStyle,
        selectedTextStyle: styles.selectedTextStyle,
        inputSearchStyle: styles.inputSearchStyle,
        iconStyle: styles.iconStyle,
        data: products,
        search: true,
        maxHeight: 300,
        labelField: "label",
        valueField: "value",
        placeholder: "Select Product",
        searchPlaceholder: "Search"
      }

      const Categorydata = [
        { label: 'Furniture', value: '1' },
        { label: 'Electronics', value: '2' },
        { label: 'Motors', value: '3' },
        { label: 'Materials', value: '4' },
        { label: 'Electrical', value: '5' },
      ];


     const CategoryDropdownProps = {
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

    const VendorsData = [
        { label: 'Vendor 1', value: '1' },
        { label: 'Vendor 2', value: '2' },
        { label: 'Vendor 3', value: '3' },
        { label: 'Vendor 4', value: '4' },
        { label: 'Vendor 4', value: '5' },
    ];
    const VendorsDropdownProps = {
        dropdownLable:'Vendors',
        container:styles.inputView,
        dropdown : styles.dropdown, 
        placeholderStyle:styles.placeholderStyle,
        selectedTextStyle:styles.selectedTextStyle,
        inputSearchStyle:styles.inputSearchStyle,
        iconStyle:styles.iconStyle,
        data:VendorsData,
        search:true,
        maxHeight:300,
        labelField:"label",
        valueField:"value",
        placeholder:"Select Vendor",
        searchPlaceholder:"Search"
}

      const onNextStep = () => {
        if (currentStep === 0 && !validateStep1()) {
          updateErrors(0, true);
        }
        else if (currentStep === 1 && !validateStep2()) {
          updateErrors(1, true);
        }
        else if (currentStep === 2 && !validateStep3()) {
          updateErrors(2, true);
        }
        else {
          updateErrors(currentStep, false);
          setCurrentStep(currentStep + 1);
        }
      };
    
      const onPreviousStep = () => {
        setCurrentStep(currentStep - 1);
      };
    
      const validateStep1 = () => {
        return true;
      };
    
      const validateStep2 = () => {
        return true;
      };
    
      const validateStep3 = () => {
        return true;
      };
    
      const updateErrors = (index, value) => {
        errors[index] = value;
        setErrors(errors);
      };

      const handleAddItem = () => {
        setItems([...items, { category:'',product: '',vendor:'',productImages:[], price: '', quantity: '' }]);
      };
    
      const handleRemoveItem = (index) => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
      };
       
      const handleCheckboxChange = () => {
          setIsChecked(!isChecked);
          setNewDeliveryChallan({ ...newDeliveryChallan, IsBillingSameAsDelivery:isChecked})
          {isChecked?setNewDeliveryChallan({ ...newDeliveryChallan, BillingAddress: newDeliveryChallan.DeliveryAddress}):setNewDeliveryChallan({ ...newDeliveryChallan, BillingAddress: newDeliveryChallan.BillingAddress})}
      }

      const handleProductChange = (value, index) => {
        const newItems = [...items];
        newItems[index].product = value;
        setItems(newItems);
        console.log(newItems);
      };

      const handleCategoryChange=(value, index) => {
        const newItems = [...items];
        newItems[index].category = value;
        setItems(newItems);
        console.log(newItems);
      }

      const handleVendorChange=(value, index) => {
        const newItems = [...items];
        newItems[index].vendor = value;
        setItems(newItems);
        console.log(newItems);
      }

      const handlePriceChange = (text, index) => {
        const newItems = [...items];
        newItems[index].price = text;
        setItems(newItems);
        console.log(newItems);
      };

      const handleQuantityChange = (text, index) => {
        const newItems = [...items];
        newItems[index].quantity = text;
        setItems(newItems);
        console.log(newItems);
      };

     const onSubmit = () => {
       setNewDeliveryChallan({ ...newDeliveryChallan, Items: items});
       setDeliveryChallanList([...deliveryChallanList, newDeliveryChallan]);
       console.log(deliveryChallanList);
       navigation.navigate(screeNames.DeliveryChallanScreen);
       toast.show("Submitted successfully", { type: "success" });
     }

     const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
     const handleDateConfirm = (date) => {
       const formattedDate = formatDate(date);
       setNewDeliveryChallan((prevEnquiry) => ({
           ...prevEnquiry,
           DeliveryDate: formattedDate,
       }));
       setIsDatePickerOpen(false);
   };
   
     const handleDateCancel = () => {
         setIsDatePickerOpen(false);
     };
   
    return (
        <>
        <NavigationHeaderComponent navigation = {navigation}/>  
        <View style={styles.container}>
        <ProgressSteps {...progressBarStyle}>
            <ProgressStep label="Basic" onNext={onNextStep} errors={errors[0]} nextBtnStyle={styles.footerBtnStyle} nextBtnTextStyle={{ color: Appstyles.colors.COLOR_BLACK, fontSize: 17 }} nextBtnText="Next ">
                <View style={styles.modalContainer}>
                        <View>
                            <Text style={styles.modalLable}>Payment Terms</Text>
                            <DropdownComponent value={newDeliveryChallan.PaymentTerm} dropdownProps={PaymentTermsdropdownProps} onValueChange={(value) =>{setNewDeliveryChallan({ ...newDeliveryChallan, PaymentTerm: value })}} />
                        </View>
                        <View>
                            <Text style={styles.modalLable}>Payment Mode</Text>
                            <DropdownComponent dropdownProps={PaymentModeDropdownProps} onValueChange={(value) =>{setNewDeliveryChallan({ ...newDeliveryChallan, PaymentMode: value })}} />
                        </View>
                        <View>
                            <Text style={styles.modalLable}>GSTIN Number(optional)</Text>
                            <View style={styles.inputView}>
                            <TextInput style={styles.input}
                             onChangeText={(text) => setNewDeliveryChallan({ ...newDeliveryChallan, GstIn: text })}
                             value={newDeliveryChallan.GstIn}
                             placeholder="Enter GSTIN Number"
                            >
                            </TextInput>
                       </View>
                       <View>
                            <Text style={styles.modalLable}>Delivery Date</Text>
                            <View  style={styles.dateInputView}>
                            <TextInput style={styles.input}
                            onChangeText={(text) => setNewDeliveryChallan({...newDeliveryChallan, DeliveryDate: text})}
                            value={newDeliveryChallan.DeliveryDate}
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
                       </View>
                       <View>
                            <Text style={styles.modalLable}>Phone Number 1</Text>
                            <View style={styles.inputView}>
                            <TextInput style={styles.input}
                            onChangeText={(text) => setNewDeliveryChallan({ ...newDeliveryChallan, Contact1: text })}
                            value={newDeliveryChallan.Contact1}
                             placeholder="Enter Phone Number"
                            />
                           </View>
                       </View>
                       <View>
                            <Text style={styles.modalLable}>Phone Number 2</Text>
                            <View style={styles.inputView}>
                            <TextInput style={styles.input}
                            onChangeText={(text) => setNewDeliveryChallan({ ...newDeliveryChallan, Contact2: text })}
                            value={newDeliveryChallan.Contact2}
                             placeholder="Enter Phone Number"
                            />
                            </View>
                       </View>
                    </View>
                    </View>  
            </ProgressStep>
            
            <ProgressStep label="Addresses" onNext={onNextStep} onPrevious={onPreviousStep} errors={errors[1]} {...progressBarButtonStyle}>
               <View style={styles.modalContainer}>
               <Text style={styles.modalLable}>Delivery Address</Text>
               <View style={styles.locationContainer}>
                <View  style={styles.locationinputView}>
                <TextInput  style={styles.input}
                    onChangeText={(text) => {
                      setNewDeliveryChallan(prevState => ({
                        ...prevState,
                        DeliveryAddress: {
                          ...prevState.DeliveryAddress,
                          Pincode: text
                        }
                      }));
                    }
                  }
                    value={newDeliveryChallan.DeliveryAddress.Pincode}
                     placeholder='Pincode'
                >   
                </TextInput>
                </View>
                <View>
                <View  style={styles.locationinputView}> 
                  <TextInput  style={styles.input}
                    onChangeText={(text) => {
                      setNewDeliveryChallan(prevState => ({
                        ...prevState,
                        DeliveryAddress: {
                          ...prevState.DeliveryAddress,
                          City: text
                        }
                      }));
                    }
                  }
                    value={newDeliveryChallan.DeliveryAddress.City}
                     placeholder='City'
                     >   
                  </TextInput>
                </View>
                </View>
                <View>
                <View style={styles.locationinputView}>
                <TextInput  style={styles.input}
                    onChangeText={(text) => {
                      setNewDeliveryChallan(prevState => ({
                        ...prevState,
                        DeliveryAddress: {
                          ...prevState.DeliveryAddress,
                          State: text
                        }
                      }));
                    }
                  }
                    value={newDeliveryChallan.DeliveryAddress.State}
                     placeholder='State'
                     >   
                  </TextInput>
                </View>
                </View>
                </View>
                <View  style={styles.inputView}>
                  <TextInput  style={styles.input}
                    onChangeText={(text) => {
                      setNewDeliveryChallan(prevState => ({
                        ...prevState,
                        DeliveryAddress: {
                          ...prevState.DeliveryAddress,
                          Address: text
                        }
                      }));
                    }
                  }
                    value={newDeliveryChallan.DeliveryAddress.Address}
                     placeholder="Enter Address"
                     >   
                  </TextInput>
                </View>
                
                <CheckBox
                    style={{  flex:1,padding: 0, marginTop: 25 }}
                    onClick={handleCheckboxChange}
                    isChecked={isChecked}
                    rightText={"Billing address same as delivery address"}
                    checkedCheckBoxColor={Appstyles.colors.PRIMARY_COLOR}
                />
                <Text style={styles.modalLable}>Billing Address</Text>
                <View style={styles.locationContainer}>
                <View  style={styles.locationinputView}>
                <TextInput  style={styles.input}
                    onChangeText={(text) => {
                      setNewDeliveryChallan(prevState => ({
                        ...prevState,
                        BillingAddress: {
                          ...prevState.BillingAddress,
                          Pincode: text
                        }
                      }));
                    }
                  }
                    value={newDeliveryChallan.BillingAddress.Pincode}
                     placeholder='Pincode'
                     >   
                </TextInput>
                </View>
                <View>
                <View  style={styles.locationinputView}> 
                  <TextInput  style={styles.input}
                    onChangeText={(text) => {
                      setNewDeliveryChallan(prevState => ({
                        ...prevState,
                        BillingAddress: {
                          ...prevState.BillingAddress,
                          City: text
                        }
                      }));
                    }
                  }
                    value={newDeliveryChallan.BillingAddress.City}
                     placeholder='City'
                     >   
                  </TextInput>
                </View>
                </View>
                <View>
                <View style={styles.locationinputView}>
                <TextInput  style={styles.input}
                    onChangeText={(text) => {
                      setNewDeliveryChallan(prevState => ({
                        ...prevState,
                        BillingAddress: {
                          ...prevState.BillingAddress,
                          State: text
                        }
                      }));
                    }
                  }
                    value={newDeliveryChallan.BillingAddress.State}
                     placeholder='State'
                     >   
                  </TextInput>
                </View>
                </View>
                </View>
                <View  style={styles.inputView}>
                  <TextInput  style={styles.input}
                    onChangeText={(text) => {
                      setNewDeliveryChallan(prevState => ({
                        ...prevState,
                        BillingAddress: {
                          ...prevState.BillingAddress,
                          Address: text
                        }
                      }));
                    }
                  }
                    value={newDeliveryChallan.BillingAddress.Address}
                     placeholder="Enter Address"
                     >   
                  </TextInput>
                </View>   
               </View>
            </ProgressStep>
            <ProgressStep label="Items"  onPrevious={onPreviousStep} errors={errors[2]} {...progressBarButtonStyle} finishBtnText="Submit "  onSubmit={onSubmit}>
                <View style={styles.modalContainer}>
                <View style={styles.modalBodyView}>
                    {errors[2] && <Text style={styles.errorText}>Please complete this step correctly.</Text>}
                    <Text style={styles.modalLable}>Items</Text>
                    {items.map((item, index) => (
                    <View key={index}>
                        {items.length >= 2 ? <Text style={styles.modalLable}>Item {index + 1}</Text> : <></>}
                        <DropdownComponent
                        dropdownProps={CategoryDropdownProps}
                        onValueChange={(value) => handleCategoryChange(value, index)}
                        />
                        <DropdownComponent
                        dropdownProps={ProductsdropdownProps}
                        onValueChange={(value) => handleProductChange(value, index)}
                        />
                        <DropdownComponent
                        dropdownProps={VendorsDropdownProps}
                        onValueChange={(value) => handleVendorChange(value, index)}
                        />
                       
                        <TouchableOpacity  style={styles.productImageview}>
                                <View  style={{alignItems:'center'}}>
                                    <IonIcon name="images-outline" color={Appstyles.colors.PRIMARY_LIGHT_COLOR} size={60}/>
                                    <Text style={{color:Appstyles.colors.COLOR_LIGHT_GREY}}>Upload Product Images </Text>
                                </View>
                        </TouchableOpacity> 
                        <View style={styles.priceQuantityContainer}>
                        <View style={styles.priceQuantityInputView}>
                            <TextInput style={styles.input}
                            value={item.price}
                            onChangeText={(text) => handlePriceChange(text, index)}
                            placeholder='₹ Price'
                            >
                            </TextInput>
                        </View>
                        <View>
                            <View style={styles.priceQuantityInputView}>
                            <TextInput style={styles.input}
                                value={item.quantity}
                                onChangeText={(text) => handleQuantityChange(text, index)}
                                placeholder='Quantity'
                            >
                            </TextInput>
                            </View>
                        </View>
                        </View>
                         <View style={styles.removeButtonView}>
                        <TouchableOpacity onPress={() => handleRemoveItem(index)} style={styles.removeButton}>
                            <Text style={{ color: Appstyles.colors.COLOR_BLACK }}>Remove</Text>
                        </TouchableOpacity>
                        </View>

                    </View>
                    ))}
                    <TouchableOpacity onPress={handleAddItem} style={styles.addItemButton}>
                    <Text style={{ color: Appstyles.colors.COLOR_BLACK }}>Add Items </Text>
                    </TouchableOpacity>
                </View>
                </View>
            </ProgressStep>
        </ProgressSteps>
            
        </View>
        </>
    
    );
};
export default AddDeliveryChallan;