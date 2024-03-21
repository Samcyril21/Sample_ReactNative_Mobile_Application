/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {useEffect} from 'react';
import {StatusBar,useColorScheme,} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {screeNames} from './src/utils/ScreenNames';
import SplashScreen from 'react-native-splash-screen';
import InitialScreen from './src/screens/initialscreen';
import LoginScreen from './src/screens/loginscreen/LoginScreen';



const {Navigator, Screen} = createStackNavigator();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
    <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <NavigationContainer>
        <Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Screen name={screeNames.InitialScreen} component={InitialScreen} />
          <Screen name={screeNames.LoginScreen} component={LoginScreen} />
        </Navigator>
      </NavigationContainer>
    </>      
  );
}


export default App;
