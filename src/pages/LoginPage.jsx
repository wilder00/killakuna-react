import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import LoginCard from "../components/cards/LoginCard"
import { LoginContext } from "../contexts/loginContext"
import authService from "../services/auth.service"
import './LoginPage.css'

const { login } = authService()

const toLogin = async ({username, password},setAuth, setLoginError, navigate)=>{
  
  try {
    const response = await login({username, password})
    if(response?.data?.ok){
      const {access_token, user, uid} = response.data
      localStorage.setItem('auth_token', access_token)
      localStorage.setItem('auth_user', JSON.stringify(user))
      localStorage.setItem('auth_uid', uid)

      setAuth({token:access_token, user, uid})
      navigate('/', {replace: true})
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
  const {auth, setAuth} = useContext(LoginContext);
  const navigate = useNavigate()
  return (
    <section id="LoginPage">
        <LoginCard 
          onLogin={ (form)=>toLogin(form,setAuth,setLoginError, navigate)} 
          error={loginError}
          onLoginFormChange={()=>setLoginError('')}
        />
    </section>
  )
}

export default LoginPage