import React from "react";
import { View, Text,TouchableOpacity, FlatList, PixelRatio } from "react-native";
import {styles} from './Style';
import Icon from 'react-native-vector-icons/Entypo';

function AddButton(props) {

    return (
        <>
        <View style={[styles.floatingActionButton, {flexDirection: 'row'}]}>
              <TouchableOpacity
              onPress={props.addButtonProrps.openAddModal}
                style={[styles.roundButton]}>
                <Icon name="plus" color="white" size={36}/>
              </TouchableOpacity>
          </View>
        </>
    );
}
export default AddButton;