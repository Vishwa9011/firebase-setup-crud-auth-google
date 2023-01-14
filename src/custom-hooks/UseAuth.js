import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth } from '../Firebase/firebase';

const UseAuth = () => {
     const [currentUser, setCurrentUser] = useState(null);

     useEffect(() => {
          const unsubscribe = onAuthStateChanged(auth, (user) => {
               if (user) {
                    setCurrentUser(user)
               } else {
                    setCurrentUser(null)
               }
          })

          //todo: cleanpup function to prevent the memory leakage
          return unsubscribe;
     }, [])

     return currentUser;
}

export default UseAuth