import React from 'react';
import { Text,
         View,
         ImageBackground,
         Dimensions,
         StyleSheet,
         SafeAreaView,
         ScrollView,
         StatusBar,
         PixelRatio,
         TextInput,
         TouchableOpacity} from 'react-native';
import {ImageSources} from '../../utils/ImageSources';
import metrics from "../../config/metrics";
import { Appstyles } from '../../config/styles';
import { literals } from '../../utils/Strings';




var {width, height} = Dimensions.get('window');
const LoginScreen = () => {
    return (
        <SafeAreaView>
        <StatusBar backgroundColor={Appstyles.colors.PRIMARY_COLOR}></StatusBar>
        <ScrollView>
        <View >
           <ImageBackground style={styles.backgroundImage} source={ImageSources.loginScreen.LoginBackgroundImage}>
           <View style={styles.socialLoginView}>
             <View style={[styles.signinContainer]}>
                <Text style={[styles.signinheadertext]}>{literals.login.SIGNINHEADER}</Text>
             </View>
              <View style={styles.textInputCotainer}>
                <TextInput
                  style={styles.textInput}
                  placeholder={literals.login.USERNAME}
                  autoCapitalize="none"
                />
              </View>
              <View style={styles.textInputCotainer}>
                <TextInput
                  style={styles.textInput}
                  placeholder={literals.login.PASSWORD}
                  secureTextEntry={true}
                  autoCapitalize="none"
                />
              </View>
              <View style={styles.loginView}>
              <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.btnText}>{literals.login.SIGNIN} </Text>
              </TouchableOpacity>
              </View>
              <View style={styles.orView}>
                <View style={styles.line} />
                <Text style={[{marginHorizontal:5,color:Appstyles.colors.COLOR_LIGHT_GREY,}]}>{literals.login.OR}</Text>
                <View style={styles.line} />
              </View>
              <View style={styles.socialBtnGroup}>
                <TouchableOpacity
                  style={styles.socialBtn}>
                  <Text style={styles.socialBtnText}>
                    {literals.login.GOOGLESIGNIN}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
           </ImageBackground>
        </View>
        </ScrollView>
        </SafeAreaView>
        
        
    );
}

const styles = StyleSheet.create({
   backgroundImage: {
    height:height
  },
  socialLoginView: {
    flex: 0.6,
    backgroundColor:Appstyles.colors.COLOR_WHITE,
    marginTop:120,
    marginHorizontal:15,
    marginBottom:-600,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
  },
  textInputCotainer: {
    height: 55,
    marginTop:35,
    marginHorizontal: 4,
    alignItems:'center'
  },
  textInput: {
    width:metrics.screenWidth / 1.23,
    height: metrics.screenHeight/13,
    padding: 12,
    borderRadius: 8,
    fontSize: PixelRatio.roundToNearestPixel(15),
    borderWidth:1,
    borderColor:Appstyles.colors.COLOR_LIGHT_GREY,
  },
  loginView: {
    justifyContent: "center",
    alignItems: "center",
  },
  loginButton: {
    justifyContent: "center",
    alignItems: "center",
    height:metrics.screenHeight/15.1,
    marginBottom: 6,
    borderRadius: 6,
    backgroundColor: Appstyles.colors.PRIMARY_COLOR,
    marginTop: 60,
    width: metrics.screenWidth / 1.23,
  },

  btnText: {
    color: Appstyles.colors.COLOR_WHITE,
    fontSize: PixelRatio.roundToNearestPixel(18),
  },
  signinContainer:{
    marginTop: 40,
    marginHorizontal: 30,
  },
  signinheadertext:{
    color:'black',
    fontSize: 20,
  },
  orView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 34,
    marginVertical: 8,
    marginTop: 25,
    
  },
  socialBtnGroup: {
    marginTop: 16,
    alignItems:'center',
  },
  socialBtn: {
    marginHorizontal: 12,
    height:metrics.screenHeight/15.1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    width:metrics.screenWidth / 1.23,
    backgroundColor:Appstyles.colors.COLOR_WHITE,
    borderWidth:1,
    borderColor:Appstyles.colors.PRIMARY_COLOR,
  },
  socialBtnText: {
    color: Appstyles.colors.PRIMARY_COLOR,
    fontWeight: 'bold',
    fontSize: PixelRatio.roundToNearestPixel(18),
  },
  scrollView: {
    flex: 1,
  },
  line: {
    backgroundColor:Appstyles.colors.COLOR_LIGHT_GREY,
    height: 1,
    width: metrics.screenWidth / 2.8,
  },
  socialButtonView: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 8,
  },


})
export default LoginScreen