import { Box, Button, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore';
import { db } from "../Firebase/firebase.js"

const AddProduct = () => {

     const [product, setProduct] = useState({ "productName": "", "productBrand": "", "productPrice": 0, "productImg": "", })

     const AddProduct = async () => {
          const productRef = collection(db, 'products');
          await addDoc(productRef, product);
          alert("Product Added")
     }

     const HandleChange = (e) => {
          setProduct(prev => ({ ...prev, [e.target.name]: e.target.value }))
     }

     return (
          <Box>
               <Box w='60%' m='auto' mt='10' border={'2px'} borderRadius='10px' p='5'>
                    <Box my='4'>
                         <Input placeholder='product-name' name='product-name' onChange={HandleChange} border='1px' />
                    </Box>
                    <Box my='4'>
                         <Input placeholder='product-brand' name='product-brand' onChange={HandleChange} border='1px' />
                    </Box>
                    <Box my='4'>
                         <Input placeholder='product-price' name='product-price' onChange={HandleChange} border='1px' />
                    </Box>
                    <Box my='4'>
                         <Input placeholder='product-img' name='product-img' onChange={HandleChange} border='1px' />
                    </Box>
                    <Button onClick={AddProduct} border='1px'>Add Product</Button>
               </Box>
          </Box>
     )
}

export default AddProduct