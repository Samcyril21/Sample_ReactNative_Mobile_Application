import { StyleSheet,Dimensions, PixelRatio } from "react-native";
import metrics from "../../config/metrics";
var {width, height} = Dimensions.get('window');


export const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: "center",
        justifyContent: "center",
    },
});