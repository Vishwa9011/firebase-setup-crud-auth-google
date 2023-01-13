import { Box, Button, Heading, Input } from '@chakra-ui/react'
import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth, db, provider } from '../Firebase/firebase'
import React, { useState } from 'react'
import { doc, setDoc } from 'firebase/firestore'

const signInWithGoogle = () => {
     signInWithPopup(auth, provider)
          .then((res) => {
               console.log('res: ', res);
               const name = res.user.displayName;
               console.log('name: ', name);
               const profilePic = res.user.photoURL;
               console.log('profilePic: ', profilePic);
               const email = res.user.email;
               console.log('email: ', email);
               const phone = res.user.phoneNumber;
               console.log('phone: ', phone);
          }).catch((err) => {
               console.log('err: ', err);
          })
}


const Login = () => {

     // * signup with password variables
     const [emailSignUp, setEmailSignUp] = useState('')
     const [passwordSignUp, setPasswordSignUp] = useState('')

     // * signin with password variables
     const [emailSignIn, setEmailSignIn] = useState('')
     const [passwordSignIn, setPasswordSignIn] = useState('')

     // * Signup function
     const Signup = async () => {
          try {
               const email = emailSignUp;
               const password = passwordSignUp;
               const userCredential = await createUserWithEmailAndPassword(auth, email, password);
               const user = userCredential.user;

               // * Storing the details of user inside of our firebase database;
               const UserCollectionRef = doc(db, "users", user.uid);
               await setDoc(UserCollectionRef, { email, password })

               setEmailSignUp("")
               setPasswordSignUp("")
               console.log('user: ', user);
          } catch (error) {
               console.log('error: ', error);
          }
     }

     const SignIn = async () => {
          try {
               const email = emailSignIn;
               const password = passwordSignIn;
               const userCredential = await signInWithEmailAndPassword(auth, email, password);
               const user = userCredential.user;
               console.log('user: ', user);

               setPasswordSignIn("")
               setEmailSignIn("")
               alert("successfully Login")
          } catch (error) {
               console.log('error: ', error);
          }
     }

     const logout = async () => {
          try {
               await signOut(auth);
               alert("successfully logout")
          } catch (error) {
               console.log('error: ', error);
          }
     }

     return (
          <Box display={'flex'}>
               <Heading textAlign={'center'}>Sign Up</Heading>
               <Box w='30%' m='auto'>
                    <Input type='email' placeholder='Email' value={emailSignUp} my='2' onChange={e => setEmailSignUp(e.target.value)} />
                    <br />
                    <Input type='password' placeholder='Password' my='2' value={passwordSignUp} onChange={e => setPasswordSignUp(e.target.value)} />
                    <Button onClick={Signup}>Sign Up</Button>
                    <br />
                    <Button my='2' onClick={signInWithGoogle}>Sign In Google</Button>
               </Box>
               <Heading textAlign={'center'}>Sign In</Heading>
               <Box w='30%' m='auto'>
                    <Input type='email' placeholder='Email' value={emailSignIn} my='2' onChange={e => setEmailSignIn(e.target.value)} />
                    <br />
                    <Input type='password' placeholder='Password' my='2' value={passwordSignIn} onChange={e => setPasswordSignIn(e.target.value)} />
                    <Button onClick={SignIn}>Sign In</Button>
                    <br />
                    <Button my='2' onClick={signInWithGoogle}>Sign In Google</Button>
                    <Button my='2' onClick={logout}>Logout</Button>
               </Box>
          </Box>
     )
}

export default Login