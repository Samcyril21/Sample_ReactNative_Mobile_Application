import React,{useContext,useState} from "react";
import { View, Text,TouchableOpacity,PixelRatio,Modal,TextInput } from "react-native";
import {styles} from './Style'
import IonIcon from 'react-native-vector-icons/Ionicons';
import { Appstyles } from "../../config/styles";
import { ProductListContext, ProductDispatchContext} from "../../contexts/ProductContext";
import { Touchable } from "react-native";
import { literals } from "../../utils/Strings";



const AddProduct = (props) => {
  const  existingProducts = useContext(ProductListContext);
  const setProductList = useContext(ProductDispatchContext);
  const [newProduct,setNewProduct] = useState(
    {ProductId:'#16578',
    title:'',
    AddedOn:'26/03/2024',
    AddedBy:'',
    ProductPrice:'',
    ProductDescription:'',
    ProductImage:''});

  const OnCancelPress = () => {
    setNewProduct({
    ProductId:'#16578',
    title:'',
    AddedOn:'26/03/2024',
    AddedBy:'',
    ProductPrice:'',
    ProductDescription:'',
    ProductImage:''})
  }
const OnSavePress = () => {
  if(newProduct.title === ''){
    alert('Enter Product Name');
    return;
  }
  if(newProduct.ProductPrice === ''){
    alert('Enter Product Price');
    return;
  }
  setProductList([...existingProducts,newProduct]);
  setNewProduct({
    ProductId:'#16578',
    title:'',
    AddedOn:'26/03/2024',
    AddedBy:'',
    ProductPrice:'',
    ProductDescription:'',
    ProductImage:''})
  props.setModalVisible(!props.modalVisible);
}

    return (
        <View style={styles.centeredView}>
            <Modal
             animationType="fade"
             transparent={true}
             visible={props.modalVisible}
             >
            <View style={styles.modalContainer}>
              <View style={styles.modalHeaderView}>
                <Text style={styles.modalHeaderText}>{literals.coreApp.NEWPRODUCT} </Text>
                <TouchableOpacity
                onPress={() => {props.setModalVisible(!props.modalVisible)
                  setNewProduct({
                    ProductId:'#16578',
                    title:'',
                    AddedOn:'26/03/2024',
                    AddedBy:'',
                    ProductPrice:'',
                    ProductDescription:'',
                    ProductImage:''})}}>
                <IonIcon name="close-outline" color={Appstyles.colors.COLOR_LIGHT_GREY} size={30}></IonIcon>
                </TouchableOpacity> 
              </View>
              <View style={styles.modalBodyView}>
                <Text style={styles.modalLable}>Product Name</Text>
                <View  style={styles.inputView}>
                  <TextInput style={styles.input}
                     onChangeText={(text) => setNewProduct({...newProduct, title: text})}
                     value={newProduct.title}>
                  </TextInput>
                </View>
                <Text style={styles.modalLable}>Product Price</Text>
                <View  style={styles.inputView}>
                  <TextInput style={styles.input}
                  placeholder="₹"
                   onChangeText={(text) => setNewProduct({...newProduct, ProductPrice: text})}
                   value={newProduct.ProductPrice}>      
                  </TextInput>
                </View>

                <Text style={styles.modalLable}>Description</Text>
                <View  style={styles.descriptionView}>
                  <TextInput  
                     onChangeText={(text) => setNewProduct({...newProduct, ProductDescription: text})}
                     value={newProduct.ProductDescription}>   
                  </TextInput>
                </View>  
                <Text style={styles.modalLable}>Product Images</Text>
                <TouchableOpacity  style={styles.productImageview}>
                  <View  style={{alignItems:'center'}}>
                    <IonIcon name="images-outline" color={Appstyles.colors.PRIMARY_LIGHT_COLOR} size={60}/>
                    <Text style={{color:Appstyles.colors.COLOR_LIGHT_GREY}}>Upload Images</Text>
                  </View>
                </TouchableOpacity>  
              </View>
              <View style={styles.modalFooterView}>
                <TouchableOpacity onPress={OnCancelPress}
                 style={styles.modalButton}>
                <Text style={{color:'black'}} >Cancel </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalButton}
                onPress={OnSavePress}>
                <Text style={{color:'black'}} >Save </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
    );
};
export default AddProduct;