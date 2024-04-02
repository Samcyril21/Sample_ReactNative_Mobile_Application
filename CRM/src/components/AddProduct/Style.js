import { StyleSheet,Dimensions, PixelRatio } from "react-native";
import metrics from "../../config/metrics";
import { Appstyles } from "../../config/styles";

var {width, height} = Dimensions.get('window');


export const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal:100,
      },
      modalContainer:{
        margin:10,
        backgroundColor:Appstyles.colors.COLOR_WHITE,
        padding:30,
        borderRadius:20,
        elevation: 3,
        marginTop: 20,
        height:height,
      },
      modalHeaderView:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      modalHeaderText:{
        color:Appstyles.colors.COLOR_BLACK,
        fontSize:18,
        fontWeight:'bold',
      },
      modalBodyView:{
        marginTop:20,
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
        marginTop:100,
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
      }
});