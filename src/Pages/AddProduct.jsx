import { Box, Button, Input } from '@chakra-ui/react'
import React, { useState } from 'react'

// * Initial State;
const initialState = { "productName": "", "productBrand": "", "productPrice": 0, "productImg": "", }

const AddProduct = () => {

     const [product, setProduct] = useState(initialState);

     // * Add new Product into firebase Database;
     const AddProduct = async () => {

     }

     // * to upadate state with product-details
     const HandleChange = (e) => {

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