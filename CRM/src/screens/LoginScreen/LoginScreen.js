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
import {styles} from './Style';
import { screeNames } from '../../utils/ScreenNames';





const LoginScreen = ({navigation}) => {

    const OnSignInPress = () => {
         navigation.navigate(screeNames.ProductsScreen)
         console.log("Sign In Pressed")
    }
    return (
        <SafeAreaView>
        <StatusBar backgroundColor={Appstyles.colors.STATUS_BAR_COLOR}></StatusBar>
        <ScrollView>
        <View>
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
              <TouchableOpacity style={styles.loginButton} onPress={OnSignInPress}>
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

export default LoginScreen