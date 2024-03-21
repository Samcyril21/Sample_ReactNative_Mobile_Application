import React from 'react';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Dimensions,
    TextInput,
    Image,
    Alert
  } from 'react-native';
  import {Colors} from 'react-native/Libraries/NewAppScreen';
  import {ImageSources} from '../utils/ImageSources';
  import { TouchableOpacity } from 'react-native-gesture-handler';
  import { screeNames } from '../utils/ScreenNames';
  import {Appstyles} from '../config/styles';
  import { literals } from '../utils/Strings';


  var {width, height} = Dimensions.get('window');

  const InitialScreen = ({navigation}) => {

    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    function getStarted(){
      navigation.navigate(screeNames.LoginScreen);
     }

    return (
        <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}/>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <View style={styles.screenContainer}>
          <View
            style={styles.header}>
            <Text style={styles.headerText}>{literals.initialScreen.WELCOMETEXT}</Text>
          </View>
          <Image style={styles.bannerImage} source={ImageSources.initialScreen.Banner}>
          </Image>
          <TouchableOpacity style={styles.getStartedButton} onPress={getStarted}>
            <Text style={styles.getStartedText}>{literals.initialScreen.GETSTARTED}</Text>
          </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
const styles = StyleSheet.create({
  screenContainer:{
    height:height,
    alignItems:'center',
  },
  header:{
    flex:0.5,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'trasparent',
  },
  headerText:{
    color:Appstyles.colors.PRIMARY_COLOR,
    fontSize:25,
    fontWeight:'bold'
  },
  bannerImage:{
    height:height*0.55,
    width:width/1.1,
  },
  getStartedButton:{
    justifyContent:'center',
    alignItems:'center',
    color:Appstyles.colors.COLOR_WHITE,
     backgroundColor:Appstyles.colors.PRIMARY_COLOR,
     borderRadius:10,
     padding:10,
     marginTop:100,
     width:width/1.3,
     height:60
  },
  getStartedText:{
    color:Appstyles.colors.COLOR_WHITE,
    fontSize:18,
    fontWeight:'bold'
  }
});
export default InitialScreen;