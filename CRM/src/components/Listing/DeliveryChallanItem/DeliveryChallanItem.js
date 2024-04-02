import React from "react";
import { Text, View } from "react-native";
import {styles} from "./Style";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from "react-native-gesture-handler";


const DeliveryChallanItem = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.DeliveryChallanId}>{props.item.DeliveryChallantId}</Text>
                <Text style={styles.innerContainerText}>{props.item.CustomerName} </Text>
            </View>
            <View>
                <TouchableOpacity style={styles.actionContainer}>
                    <MaterialCommunityIcons name="dots-horizontal" size={20} color="#000" />
                </TouchableOpacity>
                <Text style={styles.PaymentDate}>{props.item.PaymentDate} </Text>
            </View>
        </View>
    );
}
export default DeliveryChallanItem;