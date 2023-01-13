import { Box, Button, Input } from '@chakra-ui/react'
import React from 'react'
import { addDoc, collection } from 'firebase/firestore';
import { db } from "../Firebase/firebase.js"

const AddProduct = () => {

     const AddProduct = async () => {
          const productRef = collection(db, 'products/glass/glass');
          const data = {
               "productName": "Glass",
               "productBrand": "Vishwa",
               "productPrice": 1200,
               "productImg": "https://www.bigbasket.com/media/uploads/p/l/40183531-4_1-yera-teacoffee-glass-mug-set.jpg",
          }
          await addDoc(productRef, data);
          alert("Product Added")
     }

     const HandleChange = () => {

     }

     return (
          <Box>
               <Input placeholder='product-name' name='product-name' onChange={HandleChange} />
               <br />
               <br />
               <Input placeholder='product-name' name='product-brand' onChange={HandleChange} />
               <br />
               <br />
               <Input placeholder='product-name' name='product-price' onChange={HandleChange} />
               <br />
               <br />
               <Input placeholder='product-name' name='product-img' onChange={HandleChange} />
               <br />
               <br />
               <Button onClick={AddProduct}>Add Product</Button>
          </Box>
     )
}

export default AddProduct