import { StyleSheet,Dimensions, PixelRatio } from "react-native";
import metrics from "../../config/metrics";
import { Appstyles } from "../../config/styles";

var {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        marginTop:-20,
      },
      modalContainer:{
        padding:30,
        marginTop:-30,
      },
      modalBodyView:{
        marginTop:-40,
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
      dateInputView:{
        height: 50,
        marginTop: 10,
        borderWidth: 0.5,
        padding: 10,
        borderColor:Appstyles.colors.COLOR_LIGHT_GREY,
        borderRadius: 8,
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center'
      },
      input:{
        height:60
      },
      modalLable:{
        color:Appstyles.colors.COLOR_BLACK,
        fontSize:15,
        fontWeight:'bold',
        marginTop:20,
      },
      modalFooterView:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop:40,
        alignItems:'center'
      },
      footerBtnStyle:{
        backgroundColor:Appstyles.colors.PRIMARY_LIGHT_COLOR,
        borderRadius:5,
        width:width/2.8,
        height:45,
        margin:-30,
        alignItems:'center',
        justifyContent:'center',
        color:Appstyles.colors.COLOR_BLACK
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
      },
      locationinputView:{
        height: 50,
        width:110,
        maxWidth:120,
        marginTop: 15,
        borderWidth: 0.5,
        padding: 10,
        borderColor:Appstyles.colors.COLOR_LIGHT_GREY,
        borderRadius: 8,
        justifyContent:'center'
      },
      removeButtonView:{
        flex:1,
        marginTop: 15,
        marginRight:10,
        justifyContent:'center',
        alignItems:'flex-end'
      },
      removeButton:{
        backgroundColor:Appstyles.colors.PRIMARY_LIGHT_COLOR,
        borderRadius:5,
        width:width/3.9,
        height:35,
        alignItems:'center',
        justifyContent:'center'
      },
      addItemButton:{
        backgroundColor:Appstyles.colors.PRIMARY_LIGHT_COLOR,
        borderRadius:5,
        height:40,
        marginTop:20,
        margin:10,
        alignItems:'center',
        justifyContent:'center'
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
      priceQuantityContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      priceQuantityInputView:{
        height: 50,
        flex:1.5,
        marginTop: 15,
        margin:5,
        borderWidth: 0.5,
        padding: 10,
        borderColor:Appstyles.colors.COLOR_LIGHT_GREY,
        borderRadius: 8,
        justifyContent:'center'
      },
    //   dropdownsContainer:{
    //     flex:5,
    //     flexDirection: 'row',
    //   }
});