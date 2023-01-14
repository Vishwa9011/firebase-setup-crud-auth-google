import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer, Image, } from '@chakra-ui/react';
import { Box, Button, useToast } from '@chakra-ui/react';
import { collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../Firebase/firebase-config';


const Home = () => {
     const [products, setProducts] = useState([])
     const toast = useToast();
     console.table(products);

     // todo: update the product
     const UpdateProduct = async (id) => {
          try {
               const productRef = doc(db, 'products', id);
               const temp = window.prompt("Please Re-enter the Product_name");
               await updateDoc(productRef, { productName: temp })
               getData();

               // * optional
               toast({ title: "Product Updated", status: 'success', isClosable: true, position: 'top-right', })
          } catch (error) {
               console.log('error: ', error);
          }

     }
     // todo: Delete the Product
     const DeleteProduct = async (id) => {
          try {
               const productRef = doc(db, 'products', id);
               await deleteDoc(productRef);
               getData();
               // * optional
               toast({ title: "Product Deleted", status: 'success', isClosable: true, position: 'top-right', })
          } catch (error) {
               console.log('error: ', error);
          }
     }

     // * TO get the data from database
     const getData = async () => {
          try {
               const productsRef = collection(db, "products")
               const res = await getDocs(productsRef);

               // * making an readable array for the data
               const data = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }))

               setProducts(data) //* storing the data into state
          } catch (error) {
               console.log('error: ', error);
          }
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
                              {products.map((product) => (
                                   <Tr key={product.id}>
                                        <Td>{product.id}</Td>
                                        <Td>{product.productName}</Td>
                                        <Td>{product.productBrand}</Td>
                                        <Td>{product.productPrice}</Td>
                                        <Td><Image src={product.productImg} alt='' boxSize={100} /></Td>
                                        <Td>
                                             <Button onClick={() => UpdateProduct(product.id)}>Update</Button>
                                        </Td>
                                        <Td>
                                             <Button onClick={() => DeleteProduct(product.id)}>Delete</Button>
                                        </Td>
                                   </Tr>
                              ))}
                         </Tbody>
                    </Table>
               </TableContainer>
          </Box>
     )
}

export default Home;