import React from "react";
import { Text, View } from "react-native";
import {styles} from "./Style";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from "react-native-gesture-handler";


const QuotationItem = (props) => {
    return (

        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <TouchableOpacity onPress={props.OnQuotationNumberClick}>
                <Text style={styles.ProductId}>{props.item.QuotationId}</Text>
                </TouchableOpacity>
                <Text style={styles.innerContainerText}>{props.item.CustomerName} </Text>
            </View>
            <View>
                <TouchableOpacity style={styles.actionContainer}>
                    <MaterialCommunityIcons name="dots-horizontal" size={20} color="#000" />
                </TouchableOpacity>
                <Text style={styles.AddedOn}>{props.item.QuotationDate} </Text>
            </View>
        </View>
    );
}
export default QuotationItem;