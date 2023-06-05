import React, { createContext, useEffect, useState } from 'react'

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebas.config';


export const AuthContext = createContext(null)
const auth = getAuth(app)


const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser =(email,password)=>{
      return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }



  const logOut = () => {
      setLoading(true);
      return signOut(auth);
  }

  const updateUserProfile = (name) => {
      return updateProfile(auth.currentUser, {
          displayName: name
      });
  }

  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () =>{
    return signInWithPopup(auth, googleProvider)
  }

  useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
          setUser(currentUser);
            setLoading(false);  
      });
      return () => {
          return unsubscribe();
      }
  }, [])

  const authInfo = {
      user,
      loading,
      createUser,
      signIn,
      logOut,
      updateUserProfile,
      signInWithGoogle
  }

    
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider