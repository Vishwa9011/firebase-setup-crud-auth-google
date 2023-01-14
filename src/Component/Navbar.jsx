import { Box, Flex, Avatar, Button, Menu, MenuButton, useDisclosure, useColorModeValue, Stack, useColorMode, Center, Text, } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import UseAuth from '../custom-hooks/UseAuth';

export default function Navbar() {

     const currentUser = UseAuth();
     console.log('currentUser: ', currentUser);

     // * color mode switch
     const { colorMode, toggleColorMode } = useColorMode();
     return (
          <>
               <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                    <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                         <Flex gap='20px'>
                              <Link to='/'>Home</Link>
                              <Link to='/newproduct'>Add New Product</Link>
                              <Link to='/login'>Login</Link>
                         </Flex>

                         <Flex alignItems={'center'}>
                              <Stack direction={'row'} spacing={7}>
                                   <Text>{currentUser ? currentUser?.email : "Person"}</Text>
                                   <Button onClick={toggleColorMode}>{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}</Button>
                                   <Menu>
                                        <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
                                             <Avatar size={'sm'} src={'https://avatars.dicebear.com/api/male/username.svg'} />
                                        </MenuButton>
                                   </Menu>
                              </Stack>
                         </Flex>
                    </Flex>
               </Box>
          </>
     );
}