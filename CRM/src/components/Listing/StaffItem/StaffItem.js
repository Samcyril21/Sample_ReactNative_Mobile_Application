import React from "react";
import { Text, View } from "react-native";
import {styles} from "./Style";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from "react-native-gesture-handler";


const StaffItem = (props) => {
    return (

        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.StaffId}>{props.item.StaffId}</Text>
                
                <Text style={styles.innerContainerText}>{props.item.Name} </Text>
                <Text style={styles.innerContainerText}>{props.item.Accesses}   </Text>
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
export default StaffItem;