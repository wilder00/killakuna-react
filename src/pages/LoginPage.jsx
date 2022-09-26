import { useState } from "react"
import LoginCard from "../components/cards/LoginCard"
import authService from "../services/auth.service"
import './LoginPage.css'

const { login } = authService()

const toLogin = async ({username, password}, setLoginError)=>{
  try {
    const response = await login({username, password})
    if(response?.data?.ok){
      const {access_token, user, uid} = response.data
      localStorage.setItem('auth_token', access_token)
      localStorage.setItem('auth_user', JSON.stringify(user))
      localStorage.setItem('auth_uid', uid)
    }
    console.log("Login response: ",{response});
  } catch (error) {
    if(error.response?.data?.message){
      setLoginError(error.response?.data?.message)
    }
    console.log("Error en el login: ", {error});
  }
}

const LoginPage = ()=>{
  const [loginError, setLoginError] = useState("");

  return (
    <section id="LoginPage">
        <LoginCard 
          onLogin={ (form)=>toLogin(form,setLoginError)} 
          error={loginError}
          onLoginFormChange={()=>setLoginError('')}
        />
    </section>
  )
}

export default LoginPage