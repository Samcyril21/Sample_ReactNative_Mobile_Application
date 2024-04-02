import { StyleSheet,Dimensions, PixelRatio } from "react-native";
import metrics from "../../config/metrics";
import { Appstyles } from "../../config/styles";

var {width, height} = Dimensions.get('window');


export const styles = StyleSheet.create({
   
      modalContainer:{
        padding:30,
        height:height,
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
        marginTop:-20,
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
        justifyContent:'center'
      },
      locationinputView:{
        height: 50,
        width:120,
        maxWidth:120,
        marginTop: 15,
        borderWidth: 0.5,
        padding: 10,
        borderColor:Appstyles.colors.COLOR_LIGHT_GREY,
        borderRadius: 8,
        justifyContent:'center'
      },
      input:{
        height:60
      },
      productImageview:{
        height: 130,
        marginTop: 10,
        borderWidth: 0.5,
        padding: 10,
        borderColor:Appstyles.colors.COLOR_LIGHT_GREY,
        borderRadius: 8,
        justifyContent:'center',
        alignItems:'center'
      },
      descriptionView:{
        height: 80,
        marginTop: 10,
        borderWidth: 0.5,
        padding: 10,
        borderColor:Appstyles.colors.COLOR_LIGHT_GREY,
        borderRadius: 8,
        justifyContent:'center'
      },
      modalFooterView:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop:40,
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
      dropdown: {
        height: 50,
        paddingHorizontal:6,
    
      },
      placeholderStyle: {
        fontSize: 15,
      },
      selectedTextStyle: {
        fontSize: 15,
      },
      iconStyle: {
        width: 25,
        height: 25,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
        borderRadius:10
      },

      locationContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }
});