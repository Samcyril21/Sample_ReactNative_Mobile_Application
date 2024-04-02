import { StyleSheet,Dimensions, PixelRatio } from "react-native";
import metrics from "../../config/metrics";
import { Appstyles } from "../../config/styles";

var {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
    floatingActionButton: {
        position: 'absolute',
        bottom: 16,
        right: 20,
      },
      roundButton:{
        height: 60,
        width: 60,
        borderRadius:35,
        overflow: 'hidden',
        backgroundColor: Appstyles.colors.PRIMARY_COLOR,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
});