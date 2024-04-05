import { StyleSheet,Dimensions, PixelRatio } from "react-native";
import {Appstyles} from '../../config/styles'
import metrics from "../../config/metrics";
var {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
    navContainer: {
        margin:20,
    },
    navLogoContainer:{
        justifyContent:'center'
    },
    navLogo:{
        width:130,
        height:130
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
        marginVertical: 0,
        marginRight:15,
        marginLeft:15,
        justifyContent: 'center',
        backgroundColor:Appstyles.colors.PRIMARY_LIGHT_COLOR,
        borderBottomRightRadius:20,
        height:40
    },
    footer:{
        position:'absolute',
        bottom:0,
        left:0,
        right:0,
        alignItems:'center',
        justifyContent:'center',
        height:80,
        flexDirection:'row'
    },
    footerText:{
        color:Appstyles.colors.COLOR_BLACK,
        textAlign:'center',
        fontSize:12.5,
        fontWeight:'300'
    }
    
});

