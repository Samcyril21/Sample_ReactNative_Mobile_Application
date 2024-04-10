import {React,useState} from "react";
import { View,Text } from "react-native";
import styles from './Style';
import { TouchableOpacity } from "react-native-gesture-handler";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcons from 'react-native-vector-icons/Ionicons';




const NavigationHeaderComponent = (props) => {

    return (
        <>
           <View style={styles.container}>
            {props.navigation.IsDrawer?<TouchableOpacity onPress={props.navigation.OnDrawerPress}>
            <MaterialCommunityIcons name="menu" size={30} color="#000" style={{marginLeft:20}}/>
            </TouchableOpacity>:<TouchableOpacity onPress={props.navigation.OnDrawerPress}>
            <MaterialCommunityIcons name="chevron-left" size={33} color="#000" style={{marginLeft:20}}/>
            </TouchableOpacity>} 
            <View>
              <Text style={styles.titleText}>{props.navigation.title}</Text>
                 {props.navigation.date ? (
                 <View>
                   <Text style={styles.dateText}>{props.navigation.date}</Text>
                 </View> ) : (<></>)}
            </View>
            <View style={styles.searchIconContainer}>
             {props.navigation.isSearchIcon && (
            <TouchableOpacity style={styles.searchIcon} onPress={props.navigation.searchBarToggle}>
                <IonIcons name="search" size={25} color="#000"/>
            </TouchableOpacity>
            )}
            </View>    
            
        </View>
        {/* <View style={styles.line}></View> */}
        </>
     
    );
};

export default NavigationHeaderComponent;