
import DefaultLayout from "./layouts/DefaultLayout"
import PublicLayout from "./layouts/PublicLayout"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import SignInPage from "./pages/SignInPage"


function App() {
  /* return (
    <DefaultLayout>
      <HomePage/>
    </DefaultLayout>
  ) */

  return (
    <PublicLayout>
      {/* <SignInPage/> */}
      <LoginPage/>
    </PublicLayout>
  )
}

export default App
