import React, { createContext, useState } from 'react';
import { useRouter } from 'next/router'
import firebase from './firebase'
export const UserContext = createContext();
const UserContextProvider = (props) => {
  const [ user, setUser ] = useState({});
  const storeUser = (user, ccred) => {
      setUser({
        userName: user.userName,
      })
  }
  
  firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
  })

  const logout = () => {
    setUser({});
  }
  return (
    <UserContext.Provider value={{ user,  storeUser }}>
      {props.children}
    </UserContext.Provider>
  )
}
export default UserContextProvider;