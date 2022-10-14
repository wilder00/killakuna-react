

import { useState } from 'react'
import { LoginContext } from './loginContext'

export const LoginProvider = ({ children }) => {
  const token = localStorage.getItem('auth_token')
  const user = JSON.parse(localStorage.getItem('auth_user') ?? 'null')
  const uid = localStorage.getItem('auth_uid')
  const [auth, changeAuth] = useState({token, user, uid})

  const setAuth = ({token, user}) => {
    changeAuth((value)=>{
      let newValue = {...value}
      if(token)
        newValue.token = token
      if(user)
        newValue.user = user
      return newValue
    }) 
  }

  return (
    <LoginContext.Provider value={{auth, setAuth}}>
      {children}
    </LoginContext.Provider>
  )
}
