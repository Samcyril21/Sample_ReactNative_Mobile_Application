import React, { useState } from 'react';
import { View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import {styles} from './Style'
import { TouchableOpacity } from 'react-native-gesture-handler';
import IonIcon from 'react-native-vector-icons/Ionicons';




function DateMode(props){
     
    const [date,setDate] = useState(new Date())

    return (
            <DatePicker
                modal
                mode="date"
                open={props.open}
                date={date}
                onConfirm={(date) => {
                    props.onConfirm(date)
                }}
                onCancel={() => {
                    props.onCancel()
                }}
                onDateChange={(date) => {
                    setDate(date)
                }}
            />   
    )
};

export default DateMode;