import React, { Component, useState, useContext } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { Appstyles } from '../../config/styles';
import { styles } from './Style';
import NavigationHeaderComponent from '../NavigationHeaderComponent/NavigationHeaderComponent';
import { screeNames } from '../../utils/ScreenNames';
import DropdownComponent from '../DropdownComponent/DropdownComponent';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { QuotationsDispatchContext } from '../../contexts/QuotationsContext';
import { QuotationListContext } from '../../contexts/QuotationsContext';
import { useToast } from 'react-native-toast-notifications';




const AddQuatation = ({ navigation }, props) => {
  var { width, height } = Dimensions.get('window');
  const toast = useToast();
  const [currentStep, setCurrentStep] = useState(0);
  const [errors, setErrors] = useState([false, false, false, false]);
  const [items, setItems] = useState([{ product: null, price: '', quantity: '' }]);
  const [payments, setPayments] = useState([{ paymentMode: null, amount: '' }]);
  const [newQuotation, setNewQuotation] = useState({
    QuotationId: '#16786',
    CustomerName: 'Samcyril',
    EnquiryNo: '',
    PaymentTerms: '',
    QuotationDate: '',
    TotalAmount: '1000',
    DeliveryDate: '',
    Contact: '',
    ProuctImages: [],
    Requirements: '',
    Items: [],
    Payments: []
  })
  const setQuotationList = useContext(QuotationsDispatchContext);
  const quotationList = useContext(QuotationListContext);



  navigation['IsDrawer'] = false;
  navigation['title'] = 'New Quotation'
  navigation['OnDrawerPress'] = OnDrawerPress = () => {
  navigation.navigate(screeNames.QuatationsScreen)
  }
  navigation['isSearchIcon'] = false;

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

  const paymentTerms = [{ label: 'IMMEDIATE', value: '1' },
  { label: '15 DAYS', value: '2' },
  { label: '30 DAYS', value: '3' },
  { label: '45 DAYS', value: '4' },
  { label: '60 DAYS', value: '5' }]

  const products = [{ label: 'Sofa', value: '1' },
  { label: 'Table', value: '2' },
  { label: 'King size bed', value: '3' },
  { label: 'Queen size bed', value: '4' },
  { label: 'Chair', value: '5' },
  { label: 'Desk', value: '6' },
  { label: 'Cot', value: '7' },
  { label: 'Window', value: '8' },]

  const paymentModes = [{ label: 'Cash', value: '1' },
  { label: 'Cheque', value: '2' },
  { label: 'Credit Card', value: '3' },
  { label: 'UPI', value: '3' }]


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
    setItems([...items, { product: null, price: '', quantity: '' }]);
  };

  const handleRemoveItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };


  const handleProductChange = (value, index) => {
    const newItems = [...items];
    newItems[index].product = value;
    setItems(newItems);
    console.log(newItems);
  };

  const handlePriceChange = (text, index) => {
    const newItems = [...items];
    newItems[index].price = text;
    setItems(newItems);
  };

  const handleQuantityChange = (text, index) => {
    const newItems = [...items];
    newItems[index].quantity = text;
    setItems(newItems);
    console.log(newItems)
  };

  const handleAddPayment = () => {
    setPayments([...payments, { paymentMode: null, amount: '' }]);
  };

  const handleRemovePayment = (index) => {
    const newPayments = [...payments];
    newPayments.splice(index, 1);
    setPayments(newPayments);
  };

  const handleAmountChange = (text, index) => {
    const newPayments = [...payments];
    newPayments[index].amount = text;
    setPayments(newPayments);
  };

  const handlePaymentModeChange = (value, index) => {
    const newPayments = [...payments];
    newPayments[index].paymentMode = value;
    setPayments(newPayments);
    console.log(payments);
  };


  const onSubmit = () => {
    setNewQuotation({ ...newQuotation, Items: items, Payments: payments });
    setQuotationList([...quotationList, newQuotation]);
    console.log(quotationList);
    navigation.navigate(screeNames.QuatationsScreen);
    toast.show("Submitted successfully", { type: "success" });

  }

  return (
    <>
      <NavigationHeaderComponent navigation={navigation} />
      <View style={styles.container}>
        <ProgressSteps {...progressBarStyle}>
          <ProgressStep label="Basic" onNext={onNextStep} errors={errors[0]} nextBtnStyle={styles.footerBtnStyle} nextBtnTextStyle={{ color: Appstyles.colors.COLOR_BLACK, fontSize: 17 }} nextBtnText="Next ">
            <View style={styles.modalContainer}>
              <View style={styles.modalBodyView}>
                {errors[0] && <Text style={styles.errorText}>Please complete this step correctly.</Text>}
                <View>
                  <Text style={styles.modalLable}>Reference Number</Text>
                  <View style={styles.inputView}>
                    <TextInput style={styles.input}
                      onChangeText={(text) => setNewQuotation({ ...newQuotation, EnquiryNo: text })}
                      value={newQuotation.EnquiryNo}
                      placeholder="#123456"
                    >
                    </TextInput>
                  </View>
                </View>
                <Text style={styles.modalLable}>Payment Terms</Text>
                <DropdownComponent dropdownProps={PaymentTermsdropdownProps} onValueChange={(value) => setNewQuotation({ ...newQuotation, PaymentTerms: value })} />
                <View>
                  <Text style={styles.modalLable}>Quotation Date</Text>
                  <View style={styles.inputView}>
                    <TextInput style={styles.input}
                      onChangeText={(text) => setNewQuotation({ ...newQuotation, QuotationDate: text })}
                      value={newQuotation.QuotationDate}
                      placeholder="DD/MM/YYYY"
                    >
                    </TextInput>
                  </View>
                </View>
                <View>
                  <Text style={styles.modalLable}>Delivery Date</Text>
                  <View style={styles.inputView}>
                    <TextInput style={styles.input}
                      onChangeText={(text) => setNewQuotation({ ...newQuotation, DeliveryDate: text })}
                      value={newQuotation.DeliveryDate}
                      placeholder="DD/MM/YYYY"
                    >
                    </TextInput>
                  </View>
                </View>
                <View>
                  <Text style={styles.modalLable}>Product Images</Text>
                  <TouchableOpacity style={styles.productImageview}>
                    <View style={{ alignItems: 'center' }}>
                      <IonIcon name="images-outline" color={Appstyles.colors.PRIMARY_LIGHT_COLOR} size={60} />
                      <Text style={{ color: Appstyles.colors.COLOR_LIGHT_GREY }}>Upload Images</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={styles.modalLable}>Subject</Text>
                  <View style={styles.subjectView}>
                    <Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent eget dictum urna. Quisque est ipsum, consequat vehicula mollis ac,
                      dignissim quis nulla. Nam a metus quam. Etiam pulvinar, ex non efficitur eleifend,
                      purus erat dignissim tellus, in hendrerit libero urna vel elit. Sed sit amet vestibulum nunc,
                      vitae blandit enim.
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </ProgressStep>


          <ProgressStep label="Items" onNext={onNextStep} onPrevious={onPreviousStep} errors={errors[1]} {...progressBarButtonStyle}>
            <View style={styles.modalContainer}>
              <View style={styles.modalBodyView}>
                {errors[0] && <Text style={styles.errorText}>Please complete this step correctly.</Text>}
                <Text style={styles.modalLable}>Items</Text>
                {items.map((item, index) => (
                  <View key={index}>
                    {items.length >= 2 ? <Text style={styles.modalLable}>Item {index + 1}</Text> : <></>}
                    <DropdownComponent
                      dropdownProps={ProductsdropdownProps}
                      onValueChange={(value) => handleProductChange(value, index)}
                    />
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
                    {index >= 1 ? <View style={styles.removeButtonView}>
                      <TouchableOpacity onPress={() => handleRemoveItem(index)} style={styles.removeButton}>
                        <Text style={{ color: Appstyles.colors.COLOR_BLACK }}>Remove</Text>
                      </TouchableOpacity>
                    </View> : <></>}

                  </View>
                ))}
                <TouchableOpacity onPress={handleAddItem} style={styles.addItemButton}>
                  <Text style={{ color: Appstyles.colors.COLOR_BLACK }}>Add Item </Text>
                </TouchableOpacity>
                <View>
                </View>
              </View>
            </View>
          </ProgressStep>


          <ProgressStep label="Payments" onNext={onNextStep} onPrevious={onPreviousStep} errors={errors[2]} {...progressBarButtonStyle}>
            <View style={styles.modalContainer}>
              <View style={styles.modalBodyView}>
                {errors[2] && <Text style={styles.errorText}>Please complete this step correctly.</Text>}
                <Text style={styles.modalLable}>Payments</Text>
                {payments.map((item, index) => (
                  <View key={index}>
                    {payments.length >= 2 ? <Text style={styles.modalLable}>Payment {index + 1}</Text> : <></>}
                    <DropdownComponent
                      dropdownProps={PaymentModeDropdownProps}
                      onValueChange={(value) => handlePaymentModeChange(value, index)}
                    />
                    <View>
                      <View style={styles.inputView}>
                        <TextInput style={styles.input}
                          onChangeText={(text) => handleAmountChange(text, index)}
                          value={item.amount}
                          placeholder="₹ Enter amount paid"
                        >
                        </TextInput>
                      </View>
                    </View>
                    {index >= 1 ? <View style={styles.removeButtonView}>
                      <TouchableOpacity onPress={() => handleRemovePayment(index)} style={styles.removeButton}>
                        <Text style={{ color: Appstyles.colors.COLOR_BLACK }}>Remove</Text>
                      </TouchableOpacity>
                    </View> : <></>}

                  </View>
                ))}
                <TouchableOpacity onPress={handleAddPayment} style={styles.addItemButton}>
                  <Text style={{ color: Appstyles.colors.COLOR_BLACK }}>Add Payment </Text>
                </TouchableOpacity>
                <View>
                </View>
              </View>
            </View>
          </ProgressStep>


          <ProgressStep label="Review " onPrevious={onPreviousStep}  {...progressBarButtonStyle} finishBtnText="Submit " onSubmit={onSubmit}>
            <View style={styles.reviewHeader}>
              <Text style={styles.modalLable}>Basic</Text>
            </View>
            <View style={styles.reviewViewBasicContainer}>
              <View >
                <Text style={styles.reviewViewBasicItem}>Enquiry No : {newQuotation.EnquiryNo} </Text>
                <Text style={styles.reviewViewBasicItem}>Payment Term : {newQuotation.PaymentTerms} </Text>
              </View>
              <View>
                <Text style={styles.reviewViewBasicItem}>Quotation Date : {newQuotation.QuotationDate} </Text>
                <Text style={styles.reviewViewBasicItem}>Delivery Date : {newQuotation.DeliveryDate} </Text>
              </View>
            </View>
            <View>
              <View style={styles.reviewHeader}>
                <Text style={styles.modalLable}>Items</Text>
              </View>
              {items.length > 0 ? <View style={styles.reviewViewOtherContainer}>
                {items.map((item, index) => (
                  <View key={index} style={styles.reviewViewOtherContainerItem}>
                    <Text style={styles.reviewViewBasicItem}>Item {index + 1} </Text>
                    <Text style={styles.reviewViewBasicItem}>Product : {item.product} </Text>
                    <Text style={styles.reviewViewBasicItem}>Price : {item.price} </Text>
                    <Text style={styles.reviewViewBasicItem}>Quantity : {item.quantity} </Text>
                  </View>
                ))}
              </View> : <Text>No Items Added</Text>}
            </View>
            <View>
              <View style={styles.reviewHeader}>
                <Text style={styles.modalLable}>Payments</Text>
              </View>
              {payments.length > 0 ? <View style={styles.reviewViewOtherContainer}>
                {payments.map((item, index) => (
                  <View key={index} style={styles.reviewViewOtherContainerItem}>
                    <Text style={styles.reviewViewBasicItem}>Payment {index + 1} </Text>
                    <Text style={styles.reviewViewBasicItem}>Mode : {item.paymentMode} </Text>
                    <Text style={styles.reviewViewBasicItem}>Amount : {item.amount} </Text>
                  </View>
                ))}
              </View> : <Text>No Payments Added</Text>}
            </View>
          </ProgressStep>
        </ProgressSteps>
      </View>
    </>

  );
};

export default AddQuatation;

