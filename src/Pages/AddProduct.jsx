import { Box, Button, Input, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../Firebase/firebase-config'
// * Initial State;
const initialState = { "productName": "", "productBrand": "", "productPrice": 0, "productImg": "", }

const AddProduct = () => {

     const toast = useToast();
     const [product, setProduct] = useState(initialState);
     console.log('product: ', product);

     // * Add new Product into firebase Database;
     const AddProduct = async () => {
          try {
               const productRef = collection(db, 'products');
               await addDoc(productRef, product)

               // * Optional;
               toast({ title: "Product Added In the database", status: 'success', isClosable: true, position: 'top-right', })
               setProduct(initialState)
          } catch (error) {
               console.log('error: ', error);
          }
     }

     // * to upadate state with product-details
     const HandleChange = (e) => {
          setProduct(prev => ({ ...prev, [e.target.name]: e.target.value }))
     }

     return (
          <Box>
               <Box w='60%' m='auto' mt='10' border={'2px'} borderRadius='10px' p='5'>
                    <Box my='4'>
                         <Input placeholder='product-name' value={product.productName} name='productName' onChange={HandleChange} border='1px' />
                    </Box>
                    <Box my='4'>
                         <Input placeholder='product-brand' value={product.productBrand} name='productBrand' onChange={HandleChange} border='1px' />
                    </Box>
                    <Box my='4'>
                         <Input placeholder='product-price' value={product.productPrice} name='productPrice' onChange={HandleChange} border='1px' />
                    </Box>
                    <Box my='4'>
                         <Input placeholder='product-img' value={product.productImg} name='productImg' onChange={HandleChange} border='1px' />
                    </Box>
                    <Button onClick={AddProduct} border='1px'>Add Product</Button>
               </Box>
          </Box>
     )
}

export default AddProduct