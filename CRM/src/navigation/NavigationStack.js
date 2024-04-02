import React from 'react';
import {StatusBar,useColorScheme,} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {screeNames} from '../utils/ScreenNames';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ProductsScreen from '../screens/ProductsScreen/ProductsScreen';
import DashboardScreen from '../screens/DashboardScreen/DashboardScreen';
import EnquiryScreen from '../screens/EnquiriesScreen/EnquiriesScreen';
import DrawerComponent from '../components/DrawerComponent/DrawerComponent'; 
import AccessManagementScreen from '../screens/AccessMngntScreen/AccessManagementScreen';   
import QuotationsScreen from '../screens/QuotationsScreen/QuotationsScreen';
import DeliveryChallanScreen from '../screens/DeliveyChallanScreen/DeliveyChallanScreen';
import JobCardsScreen from '../screens/JobCardsScreen/JobCardsScreen';
import ComplaintsScreen from '../screens/ComplaintsScreen/ComplaintsScreen';
import AddEnquiries from '../components/AddEnquiries/AddEnquiries';
import AddQuatation from '../components/AddQuotation/AddQuatation';
import { ProductProvider } from "../contexts/ProductContext";
import {EnquiryListProvider} from '../contexts/EnquiriesContext';
import { QuotationListProvider } from '../contexts/QuotationsContext';
import {ComplaintListProvider} from '../contexts/ComplaintsContext';
import AddComplaints from '../components/AddComplaints/AddComplaints';
import AddDeliveryChallan from '../components/AddDeliveryChallan/AddDeliveryChallan';
import {DeliveryChallanListProvider} from '../contexts/DeliveryChallansContext';


const {Navigator, Screen} = createStackNavigator();
const Drawer = createDrawerNavigator();

function AppNavigator() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };


function DrawerNavigator() {
  return (
    <Drawer.Navigator 
    initialRouteName={screeNames.LoginScreen}
    screenOptions={{headerShown: false}}
    drawerType='fade'
    drawerContent={props => <DrawerComponent {...props} />}
    >
      <Drawer.Screen name={screeNames.LoginScreen} component={LoginScreen} />
      <Drawer.Screen name={screeNames.ProductsScreen} component={ProductsScreen}/>
      <Drawer.Screen name={screeNames.DashboardScreen} component={DashboardScreen}/>
      <Drawer.Screen name={screeNames.EnquiryScreen} component={EnquiryStackNavigator}/>
      <Drawer.Screen name={screeNames.QuatationsScreen} component={QuationStackNavigator}/>
      <Drawer.Screen name={screeNames.DeliveryChallanScreen} component={DeliveryChallanStackNavigator}/>
      <Drawer.Screen name={screeNames.JobCardsScreen} component={JobCardsScreen}/>
      <Drawer.Screen name={screeNames.ComplaintsScreen} component={ComplaintStackNavigator}/>
      <Drawer.Screen name={screeNames.AccessManagementScreen} component={AccessManagementScreen}/>
    </Drawer.Navigator>
  );
}
function QuationStackNavigator() {
  return (
    <Navigator
      initialRouteName={screeNames.QuatationsScreen}
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name={screeNames.QuatationsScreen} component={QuotationsScreen} />
      <Screen name={screeNames.AddQuotationScreen} component={AddQuatation} />
    </Navigator>
  );
}
function EnquiryStackNavigator() {
  return (
    <Navigator
      initialRouteName={screeNames.EnquiryScreen}
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name={screeNames.EnquiryScreen} component={EnquiryScreen} />
      <Screen name={screeNames.AddEnquiriesScreen} component={AddEnquiries} />
    </Navigator>
  );
}

function DeliveryChallanStackNavigator() {
  return (
    <Navigator
      initialRouteName={screeNames.DeliveryChallanScreen}
      screenOptions={{
        headerShown: false,
      }}>
      <Screen
        name={screeNames.DeliveryChallanScreen}
        component={DeliveryChallanScreen}
      />
      <Screen
        name={screeNames.AddDeliveryChallan}
        component={AddDeliveryChallan}
      />


    </Navigator>
  );
}

function ComplaintStackNavigator() {
  return (
    <Navigator
      initialRouteName={screeNames.ComplaintsScreen}
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name={screeNames.ComplaintsScreen} component={ComplaintsScreen} />
      <Screen name={screeNames.AddComplaintScreen} component={AddComplaints} />
    </Navigator>
  );
}
  return (
 <NavigationContainer>
    <ProductProvider>
      <EnquiryListProvider>
        <QuotationListProvider>
          <ComplaintListProvider>
            <DeliveryChallanListProvider>
            <DrawerNavigator/>
            </DeliveryChallanListProvider>
          </ComplaintListProvider>
        </QuotationListProvider>
      </EnquiryListProvider> 
    </ProductProvider>
 </NavigationContainer>
  );
}


export default AppNavigator;