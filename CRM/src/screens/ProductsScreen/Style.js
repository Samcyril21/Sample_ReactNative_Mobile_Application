import { StyleSheet,Dimensions, PixelRatio } from "react-native";
import metrics from "../../config/metrics";
import { Appstyles } from "../../config/styles";

var {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex:0,
        alignItems: "center",
        justifyContent: "center",
        width:width,
    },
  
});