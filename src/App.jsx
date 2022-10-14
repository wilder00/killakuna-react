
import DefaultLayout from "./layouts/DefaultLayout"
import PublicLayout from "./layouts/PublicLayout"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import SignInPage from "./pages/SignInPage"
import {Navigate, Route, Routes, Link, useNavigate} from "react-router-dom"
import { useContext, useEffect } from "react"
import { LoginContext } from "./contexts/loginContext"

function App() {
  /* return (
    <DefaultLayout>
      <HomePage/>
    </DefaultLayout>
  ) */
  const navigate = useNavigate()

  const {auth, setAuth} = useContext(LoginContext);
  
  useEffect(() => {
    if(!auth.user){
      navigate('/login', {replace: true})
    }
    if(auth.user){
      navigate('/', {replace: true})
    }
    /* return () => {
      cleanup
    }; */
  }, [auth]);

  return (
    <Routes>
      
      {/* <Link to="/"></Link> */}
      <Route exact path="/" element={
        <DefaultLayout>
          <HomePage/>
        </DefaultLayout>
      }></Route>
      <Route exact path="/login" element={
        <PublicLayout>
          <LoginPage/>
        </PublicLayout>
      }></Route>
      <Route exact path="/register" element={
        <PublicLayout>
          <SignInPage/>
        </PublicLayout>
      }></Route>
      <Route path="/404" element={
        <>404</>
      }></Route>
      <Route path="/*" element={ <Navigate to={"404"}/> }></Route>
    </Routes>
  )

  return (
    <PublicLayout>
      {/* <SignInPage/> */}
      <LoginPage/>
    </PublicLayout>
  )
}

export default App
