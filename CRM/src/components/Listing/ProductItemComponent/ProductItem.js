import React from "react";
import { Text, View } from "react-native";
import {styles} from "./Style";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from "react-native-gesture-handler";
import { ProductListContext } from "../../../contexts/ProductContext";


const ProductItem = (props) => {
    return (
  
    <View style={styles.container}>
       <View style={styles.innerContainer}>
        <Text style={styles.ProductId}>{props.item.ProductId}</Text>
        <Text style={styles.innerContainerText}>{props.item.title} </Text>  
       </View> 
       <View>
        <TouchableOpacity style={styles.actionContainer}>
            <MaterialCommunityIcons name="dots-horizontal" size={20} color="#000" />
        </TouchableOpacity>
       <Text style={styles.AddedOn}>{props.item.AddedOn} </Text>  
       </View> 
    </View>

    );
}
export default ProductItem;