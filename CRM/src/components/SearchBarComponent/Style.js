import { StyleSheet,Dimensions, PixelRatio } from "react-native";
import metrics from "../../config/metrics";
var {width, height} = Dimensions.get('window');


export const styles = StyleSheet.create({
    searchBarContainer: {
       backgroundColor:'transparent',
       borderWidth:0.5,
       borderColor:'gray',
       marginHorizontal:20,
       borderRadius:10,
       height:50,
       justifyContent:'center',
       marginTop:10
    },
    inputContainerStyle:{
        backgroundColor:'transparent',
        width:'100%',
    }
})