import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth } from '../Firebase/firebase';

const UseAuth = () => {
     const [currentUser, setCurrentUser] = useState(null);

     useEffect(() => {
          onAuthStateChanged(auth, (user) => {
               if (user) {
                    setCurrentUser(user)
               } else {
                    setCurrentUser(null)
               }
          })
     }, [])

     return currentUser;
}

export default UseAuth