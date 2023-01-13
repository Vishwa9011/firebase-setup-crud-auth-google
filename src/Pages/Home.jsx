import { Box, Button } from '@chakra-ui/react';
import { collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../Firebase/firebase';
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer, } from '@chakra-ui/react';


const Home = () => {
     const [products, setProducts] = useState([])
     console.table(products);

     const UpdateProduct = async (id) => {
          const productRef = doc(db, 'products', id);
          const temp = window.prompt("Please Enter the New Product Name");
          const data = { productName: temp }
          await updateDoc(productRef, data)
          getData()
          alert('Updated the document')
     }

     const DeleteProduct = async (id) => {
          const productRef = doc(db, 'products', id);
          await deleteDoc(productRef);
          getData();
          alert('Deleted the document')
     }

     const getData = async () => {
          const productsRef = collection(db, 'products')
          getDocs(productsRef).then((res) => {
               const data = res.docs.map((doc) => {
                    return { ...doc.data(), id: doc.id }
               })
               setProducts(data)
          }).catch(err => console.log(err))
     }

     useEffect(() => {
          getData();
     }, [])

     return (
          <Box>
               <TableContainer>
                    <Table variant='simple'>
                         <TableCaption>Imperial to metric conversion factors</TableCaption>
                         <Thead>
                              <Tr>
                                   <Th>Id</Th>
                                   <Th>Product Name</Th>
                                   <Th>Product Brand</Th>
                                   <Th>Product Price</Th>
                                   <Th>Product Image</Th>
                                   <Th>Update</Th>
                                   <Th>Delete</Th>
                              </Tr>
                         </Thead>
                         <Tbody>
                              {products.map((item) => (
                                   <Tr key={item.id}>
                                        <Td>{item.id}</Td>
                                        <Td>{item.productName}</Td>
                                        <Td>{item.productBrand}</Td>
                                        <Td>{item.productPrice}</Td>
                                        <Td>{item.productImg.slice(0, 20)}</Td>
                                        <Td>
                                             <Button onClick={() => UpdateProduct(item.id)}>Update</Button>
                                        </Td>
                                        <Td>
                                             <Button onClick={() => DeleteProduct(item.id)}>Delete</Button>
                                        </Td>
                                   </Tr>
                              ))
                              }
                         </Tbody>
                    </Table>
               </TableContainer>
          </Box>
     )
}

export default Home;