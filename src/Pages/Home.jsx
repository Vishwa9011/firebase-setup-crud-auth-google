import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer, } from '@chakra-ui/react';
import { Box, Button, useToast } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'


const Home = () => {
     const [products, setProducts] = useState([])
     // const toast = useToast();
     // console.table(products);

     const UpdateProduct = async (id) => {

     }

     const DeleteProduct = async (id) => {

     }

     const getData = async () => {
          
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
                              <Tr>
                                   <Td>id</Td>
                                   <Td>productName</Td>
                                   <Td>productBrand</Td>
                                   <Td>productPrice</Td>
                                   <Td>productImg</Td>
                                   <Td>
                                        <Button onClick>Update</Button>
                                   </Td>
                                   <Td>
                                        <Button onClick>Delete</Button>
                                   </Td>
                              </Tr>
                         </Tbody>
                    </Table>
               </TableContainer>
          </Box>
     )
}

export default Home;