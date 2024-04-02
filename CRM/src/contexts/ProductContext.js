import React, { createContext, useState } from "react";



const ProductListContext = createContext();
const ProductDispatchContext = createContext();

function ProductProvider({ children }) {
    const [productList, setProductList] = useState([
        {
            ProductId: '#16786',
            title: 'Sofa',
            AddedOn: '01/01/2022',
            AddedBy: 'John Doe',
            ProductPrice:'',
            ProductDescription:'',
            ProductImage:''
          },
          {
              ProductId: '#16787',
              title: 'Table',
              AddedOn: '01/01/2022',
              AddedBy: 'John Doe',
              ProductPrice:'',
              ProductDescription:'',
              ProductImage:''
          },
          {
              ProductId: '#16788',
              title: 'Queen size bed',
              AddedOn: '01/01/2022',
              AddedBy: 'John Doe',
              ProductPrice:'',
              ProductDescription:'',
              ProductImage:''
          },
          {
              ProductId: '#16789',
              title: 'King size bed',
              AddedOn: '01/01/2022',
              AddedBy: 'John Doe',
              ProductPrice:'',
              ProductDescription:'',
              ProductImage:''
          },
          {
            ProductId: '#16790',
            title: 'Iphone 11',
            AddedOn: '01/01/2022',
            AddedBy: 'John Doe',
            ProductPrice:'',
            ProductDescription:'',
            ProductImage:''
        },
    ]);

    return (
        <ProductListContext.Provider value={productList}>
            <ProductDispatchContext.Provider value={setProductList}>
                {children}
            </ProductDispatchContext.Provider>
        </ProductListContext.Provider>
    );
}

export { ProductProvider, ProductListContext, ProductDispatchContext };