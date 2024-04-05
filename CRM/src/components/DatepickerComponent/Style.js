import { StyleSheet,Dimensions, PixelRatio } from "react-native";
import metrics from "../../config/metrics";
import { Appstyles } from "../../config/styles";

var {width, height} = Dimensions.get('window');


export const styles = StyleSheet.create({
   
    container: {
        position: 'absolute',
        right: 0,
        top: 0,
        // Adjust width and height as needed
        width: 300,
        height: 300,
        // Add any other styles you need
        backgroundColor: 'white',
    },
});