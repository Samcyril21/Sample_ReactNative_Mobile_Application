import { StyleSheet,Dimensions, PixelRatio } from "react-native";
import metrics from "../../config/metrics";
var {width, height} = Dimensions.get('window');
import { Appstyles } from "../../config/styles";
import App from "../../../App";



const styles = StyleSheet.create({
    container: {
        position:'fixed',
        flexDirection: 'row',
        marginLeft:0,
        height:70,
        alignItems:'center',
        paddingRight:20,
    },
    titleText:{
         fontWeight:'bold',
         fontSize:18,
         marginLeft:20,
         color:Appstyles.colors.COLOR_BLACK
    },
    searchIconContainer: {
        position: 'absolute',
        right: 20,
        height: '100%', // Take full height of the container
        justifyContent: 'center', // Center vertically
    },
    searchIcon:{
    margin:'auto',
    }
});

export default styles;