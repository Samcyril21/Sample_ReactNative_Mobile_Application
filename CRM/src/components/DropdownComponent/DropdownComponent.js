import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {styles} from './Style'
import { Appstyles } from '../../config/styles';


const DropdownComponent = (props) => {
  const [value, setValue] = useState(props.value);
  const [isFocus, setIsFocus] = useState(false);

  // const renderLabel = () => {
  //   if (value || isFocus) {
  //     return (
  //       <Text style={[styles.label, isFocus && { color: Appstyles.colors.PRIMARY_COLOR }]}>
  //         {props.dropdownProps.dropdownLable} </Text>
  //     );
  //   }
  //   return null;
  // };

  return (
    <View style={props.dropdownProps.container}>
      {/* {renderLabel()} */}
      <Dropdown
        style={[props.dropdownProps.dropdown, isFocus && { borderColor:Appstyles.colors.PRIMARY_COLOR}]}
        placeholderStyle={props.dropdownProps.placeholderStyle}
        selectedTextStyle={props.dropdownProps.selectedTextStyle}
        inputSearchStyle={props.dropdownProps.inputSearchStyle}
        iconStyle={props.dropdownProps.iconStyle}
        data={props.dropdownProps.data}
        search = {props.dropdownProps.search}
        maxHeight={props.dropdownProps.maxHeight}
        labelField={props.dropdownProps.labelField}
        valueField={props.dropdownProps.valueField}
        placeholder={!isFocus ?  props.dropdownProps.placeholder : '...'}
        searchPlaceholder= {props.dropdownProps.searchPlaceholder}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value);
          setIsFocus(false);
          if (props.onValueChange) {
              props.onValueChange(item.label);
          }
        }}/>
    </View>
  );
};

export default DropdownComponent;