import { StyleSheet,Dimensions, PixelRatio } from "react-native";
import metrics from "../../config/metrics";
import { Appstyles } from "../../config/styles";

var {width, height} = Dimensions.get('window');


export const styles = StyleSheet.create({
   
      modalContainer:{
        padding:30,
    
      },
      modalHeaderView:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
      modalHeaderText:{
        color:Appstyles.colors.COLOR_BLACK,
        fontSize:18,
        fontWeight:'bold',
        marginLeft:15,
      },
      modalBodyView:{
        marginTop:-30,
      },
      modalLable:{
        color:Appstyles.colors.COLOR_BLACK,
        fontSize:15,
        fontWeight:'bold',
        marginTop:20,
      },
      inputView:{
        height: 50,
        marginTop: 10,
        borderWidth: 0.5,
        padding: 10,
        borderColor:Appstyles.colors.COLOR_LIGHT_GREY,
        borderRadius: 8,
        justifyContent:'center',

      },
      
      input:{
        height:60
      },
      modalFooterView:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center'
                 
      },
      modalButton:{
        backgroundColor:Appstyles.colors.PRIMARY_LIGHT_COLOR,
        borderRadius:5,
        margin:15,
        width:width/2.6,
        height:50,
        alignItems:'center',
        justifyContent:'center'
      },
      checkboxView:{
        width:width,
        height: 200,
        margin: 10, 
      }
});