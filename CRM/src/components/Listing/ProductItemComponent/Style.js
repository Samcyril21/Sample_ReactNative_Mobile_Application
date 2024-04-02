import { StyleSheet,Dimensions, PixelRatio } from "react-native";
import metrics from "../../../config/metrics";
var {width, height} = Dimensions.get('window');
import { Appstyles } from "../../../config/styles";


export const styles = StyleSheet.create({
    container: {
        padding: PixelRatio.roundToNearestPixel(10),
        backgroundColor: 'white',
        borderRadius: PixelRatio.roundToNearestPixel(9),
        borderWidth:0.5,
        borderColor:'#CDD4D9',
        elevation: 1.5,
        flexDirection: 'row',
        justifyContent:'space-between',
        width:'100%',
        marginVertical: 5,
    },
    innerContainer: {
        
    },
    innerContainerText:{
        padding:8,
        color:Appstyles.colors.COLOR_BLACK
    },
    ProductId:{
        padding:8,
        color:Appstyles.colors.PRIMARY_COLOR,
        textDecorationLine:'underline'
    },
    actionContainer:{
        borderWidth:1,
        width:23,
        height:23,
        borderRadius:5,
        borderColor:Appstyles.colors.PRIMARY_COLOR,
        alignItems:'center',
        justifyContent:'center',
        position:'relative',
        left:50
    },
    AddedOn:{
        position:'relative',
        top:20,
        color:Appstyles.colors.COLOR_BLACK,
    }
   
})