import { StyleSheet,Dimensions, PixelRatio } from "react-native";
var {width, height} = Dimensions.get('window');
import { Appstyles } from "../../../config/styles";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      heading: {
        marginLeft: 20,
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 10,
      },
      detailsContainer: {
        margin: 10,
        padding: 10,
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'flex-start',
      },
      detailsContainerTwo:{
        margin: 10,
        padding: 10,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
      },
      AddressContainer:{
        margin: 10,
        padding: 10,
        marginTop: 10,
        justifyContent: 'flex-start',
      },
      phoneContainer: {
          marginLeft: 50
      },
      label: {
        fontWeight: 'bold',
        color:Appstyles.colors.COLOR_BLACK
      },
      tableContainer: {
        marginTop: 10,
      },
      tableHeader: {
        flexDirection: 'row',
        backgroundColor: 'lightgrey',
        paddingVertical: 5,
        paddingHorizontal: 15,
        alignItems: 'center',
      },
      headerText: {
        fontWeight: 'bold',
        color:Appstyles.colors.COLOR_BLACK,
        width: 100,
        textAlign: 'center',
        // flex: 1,
      },
       rowText: {
        width: 100,
        textAlign: 'center',
        // flex: 1,
      },
      tableRow: {
        flexDirection: 'row',
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        alignItems: 'center',

      },
      totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 25,
        padding: 10,
      },
      buttonContainer: {
        flexDirection: 'row',
        marginTop: 10,
        padding: 10,
      },
      buttonWrapper: {
        padding: 8,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#cccccc',
        margin: 5,
        // alignItems: 'center',
        // justifyContent: 'center',
      },
      buttonText:{
        color:Appstyles.colors.PRIMARY_COLOR,
        fontWeight:'400',
        fontSize:13,
        textAlign:'center'
      },
      imageContainer:{
        alignItems: 'center',
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:10,
        padding:10
      },
      image:{
        width: 80,
        height: 80
      },
      line:{
        height:1.5,
        backgroundColor:Appstyles.colors.PLACE_HOLDER_COLOR,
        width:width
      }
});