import React from 'react';
import {View, Text,Image} from 'react-native';
import {styles} from './Style';
import {TouchableOpacity } from 'react-native-gesture-handler';
import {screeNames} from '../../utils/ScreenNames';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {Appstyles} from '../../config/styles';
import {ImageSources} from '../../utils/ImageSources';



function DrawerComponent({navigation}) {
    const OnProductPress = () => {
        navigation.navigate(screeNames.ProductsScreen)
        navigation.closeDrawer()
    }
    const OnDashBoardPress = () => {
        navigation.navigate(screeNames.DashboardScreen)
        navigation.closeDrawer()
    }
    const OnEnquiryPress = () => {
        navigation.navigate(screeNames.EnquiryScreen)
        navigation.closeDrawer()
    }
    const OnAccessMngtPress = () => {
        navigation.navigate(screeNames.AccessManagementScreen)
        navigation.closeDrawer()
    }
    const OnQuotationPress = () => {
        navigation.navigate(screeNames.QuatationsScreen)
        navigation.closeDrawer()
    }
    const OnDeliveryChallanPress = () => {
        navigation.navigate(screeNames.DeliveryChallanScreen)
        navigation.closeDrawer()
    }
    const OnJobCardsPress = () => {
        navigation.navigate(screeNames.JobCardsScreen)
        navigation.closeDrawer()
    }
    const OnComplaintsPress = () => {
        navigation.navigate(screeNames.ComplaintsScreen)
        navigation.closeDrawer()
    }
    const OnLogoutPress = () => {
        navigation.navigate(screeNames.LoginScreen)
        navigation.closeDrawer()
    }

    return (
        <>
        <View style={styles.navLogoContainer}>
            <Image  style={styles.navLogo}source={ImageSources.AppImages.AppLogo}></Image>
        </View>
        <View style={styles.navHeader}>
        <Text style={{color:Appstyles.colors.COLOR_BLACK,marginHorizontal:20,fontSize:17}} >Menu</Text>
        </View>
        <View style={styles.navContainer}>
            <TouchableOpacity onPress={OnDashBoardPress} style={styles.navItem}>
                <MaterialCommunityIcons name="view-dashboard" color={Appstyles.colors.COLOR_BLACK} size={26} />
                <Text style={styles.navItemText}>Dashboard </Text>
                <View style={{marginLeft:'auto'}}>
                <MaterialCommunityIcons name="chevron-right" color={Appstyles.colors.COLOR_BLACK} size={26} />
                </View>
            </TouchableOpacity>
           <TouchableOpacity  onPress={OnProductPress} style={styles.navItem}>
                <MaterialCommunityIcons name="home-variant" color={Appstyles.colors.COLOR_BLACK} size={26} />
                <Text style={styles.navItemText}>Products </Text>
                <View style={{marginLeft:'auto'}}>
                <MaterialCommunityIcons name="chevron-right" color={Appstyles.colors.COLOR_BLACK} size={26} />
                </View>
            </TouchableOpacity>   
            <TouchableOpacity  onPress={OnEnquiryPress} style={styles.navItem}>
                <FontAwesome name="users" color={Appstyles.colors.COLOR_BLACK} size={24} />
                <Text style={styles.navItemText}>Enquiries </Text>
                <View style={{marginLeft:'auto'}}>
                <MaterialCommunityIcons name="chevron-right" color={Appstyles.colors.COLOR_BLACK} size={26} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={OnQuotationPress} style={styles.navItem}>
                <MaterialCommunityIcons name="clipboard-text-multiple" color={Appstyles.colors.COLOR_BLACK} size={26} />
                <Text style={styles.navItemText}>Quotations </Text>
                <View style={{marginLeft:'auto'}}>
                <MaterialCommunityIcons name="chevron-right" color={Appstyles.colors.COLOR_BLACK} size={26} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={OnDeliveryChallanPress} style={styles.navItem}>
            <IonIcons name="receipt" color={Appstyles.colors.COLOR_BLACK} size={26} />
                <Text style={styles.navItemText}>Delivery Challan </Text>
                <View style={{marginLeft:'auto'}}>
                <MaterialCommunityIcons name="chevron-right" color={Appstyles.colors.COLOR_BLACK} size={26} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={OnJobCardsPress} style={styles.navItem}>
                <MaterialCommunityIcons name="toolbox" color={Appstyles.colors.COLOR_BLACK} size={26} />
                <Text style={styles.navItemText}>Job Cards </Text>
                <View style={{marginLeft:'auto'}}>
                <MaterialCommunityIcons name="chevron-right" color={Appstyles.colors.COLOR_BLACK} size={26} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={OnComplaintsPress} style={styles.navItem}>
                <MaterialCommunityIcons name="clipboard-alert" color={Appstyles.colors.COLOR_BLACK} size={26} />
                <Text style={styles.navItemText}>Complaints </Text>
                <View style={{marginLeft:'auto'}}>
                <MaterialCommunityIcons name="chevron-right" color={Appstyles.colors.COLOR_BLACK} size={26} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity  onPress={OnAccessMngtPress} style={styles.navItem}>
                <FontAwesome name="tasks" color={Appstyles.colors.COLOR_BLACK} size={24} />
                <Text style={styles.navItemText}>Access Management </Text>
                <View style={{marginLeft:'auto'}}>
                <MaterialCommunityIcons name="chevron-right" color={Appstyles.colors.COLOR_BLACK} size={26} />
                </View>  
            </TouchableOpacity>
            <TouchableOpacity onPress={OnLogoutPress} style={styles.navItem}>
                <AntDesign name="logout" color={Appstyles.colors.COLOR_BLACK} size={26} />
                <Text style={styles.navItemText}>Logout </Text>
                <View style={{marginLeft:'auto'}}>
                {/* <MaterialCommunityIcons name="chevron-right" color={Appstyles.colors.COLOR_BLACK} size={26} /> */}
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.footer}>
            <IonIcons name="logo-android" color={Appstyles.colors.COLOR_BLACK} size={20} />
            <Text style={styles.footerText}>  Powered By Coleague Solutions  </Text>
        </View>
        </>
        
    );
}


export default DrawerComponent;