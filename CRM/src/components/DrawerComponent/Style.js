import { StyleSheet,Dimensions, PixelRatio } from "react-native";
import {Appstyles} from '../../config/styles'
import metrics from "../../config/metrics";
var {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
    navContainer: {
        margin:20,
    },
    navItem:{
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
    },
    navItemText:{
        color: Appstyles.colors.COLOR_BLACK,
        marginLeft:10,
    },
    navHeader:{
        marginVertical: 20,
        marginRight:15,
        justifyContent: 'center',
        backgroundColor:Appstyles.colors.PRIMARY_LIGHT_COLOR,
        borderBottomRightRadius:20,
        height:40
    }
    
});

