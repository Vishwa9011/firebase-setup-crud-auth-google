import { Box, Button, Heading, Input } from '@chakra-ui/react'
import React, { useState } from 'react'


const Login = () => {

     // * Signup with email and password States
     const [emailSignUp, setEmailSignUp] = useState('')
     const [passwordSignUp, setPasswordSignUp] = useState('')

     // * Signin with email and password States
     const [emailSignIn, setEmailSignIn] = useState('')
     const [passwordSignIn, setPasswordSignIn] = useState('')

     // * Signup function with email and password
     const Signup = async () => {

     }

     // * SignIn function with email and password
     const SignIn = async () => {

     }

     // * SignIn with Google
     const signInWithGoogle = () => {

     }

     // * Logout
     const logout = async () => {

     }

     return (
          <Box display={'flex'}>
               {/* // * Sign Up part */}
               <Heading textAlign={'center'}>Sign Up</Heading>
               <Box w='30%' m='auto'>
                    <Box>
                         <Input type='email' placeholder='Email' value={emailSignUp} my='2' onChange={e => setEmailSignUp(e.target.value)} />
                    </Box>
                    <Box>
                         <Input type='password' placeholder='Password' my='2' value={passwordSignUp} onChange={e => setPasswordSignUp(e.target.value)} />
                    </Box>

                    <Button onClick={Signup}>Sign Up</Button>
                    <Button my='2' onClick={signInWithGoogle}>Sign In Google</Button>
               </Box>

               {/* // * Sign In part */}
               <Heading textAlign={'center'}>Sign In</Heading>
               <Box w='30%' m='auto'>
                    <Box>
                         <Input type='email' placeholder='Email' value={emailSignIn} my='2' onChange={e => setEmailSignIn(e.target.value)} />
                    </Box>
                    <Box>
                         <Input type='password' placeholder='Password' my='2' value={passwordSignIn} onChange={e => setPasswordSignIn(e.target.value)} />
                    </Box>

                    <Button onClick={SignIn}>Sign In</Button>
                    <Button my='2' onClick={signInWithGoogle}>Sign In Google</Button>
                    <Button m='2' onClick={logout}>Logout</Button>
               </Box>
          </Box>
     )
}

export default Login