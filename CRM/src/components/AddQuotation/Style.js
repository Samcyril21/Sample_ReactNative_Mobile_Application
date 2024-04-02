import { StyleSheet,Dimensions, PixelRatio } from "react-native";
import metrics from "../../config/metrics";
import { Appstyles } from "../../config/styles";

var {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 10,
      },
      stepContent: {
        alignItems: 'center',
      },
      errorText: {
        color: 'red',
        marginBottom: 10,
      },
      modalContainer:{
        padding:30,
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
      subjectView:{
        marginTop: 10,
        borderWidth: 0.5,
        padding: 10,
        borderColor:Appstyles.colors.COLOR_LIGHT_GREY,
        borderRadius: 8,
        justifyContent:'center' 
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
      reviewHeader:{
        alignItems:'center',
        justifyContent:'center',
      },
      
      reviewViewBasicContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop:10,
        padding:10,
        borderWidth: 0.8,
        borderColor:Appstyles.colors.PRIMARY_LIGHT_COLOR,
        borderRadius: 8,
      },
      reviewViewOtherContainer:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10,
        borderWidth: 0.8,
        borderColor: Appstyles.colors.PRIMARY_LIGHT_COLOR,
        borderRadius: 8,
        padding: 10,
      },
      reviewViewBasicItem:{
       color:Appstyles.colors.COLOR_BLACK,
       margin:10,
       
      },
      reviewViewOtherContainerItem:{
        width: '48%', // Adjust the width as needed for responsiveness
        borderWidth: 0.8,
        borderColor: Appstyles.colors.PRIMARY_LIGHT_COLOR,
        borderRadius: 8,
        marginBottom: 10,
        padding: 10,
        marginHorizontal:3
       }
})