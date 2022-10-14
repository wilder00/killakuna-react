import { memo, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginCard.css'

const LoginCard = ({onLogin,onLoginFormChange, error})=>{

  const [loginForm, setLoginForm] = useState({username: "", password: ""})
  const submitHandler = (event)=>{ 
    event.preventDefault();
    console.log(loginForm)
    onLogin(loginForm)
  }
  const usernameHandler = (val)=>{ 
    setLoginForm((form)=> ({ 
      ...form,  
      username: val.target.value
    }))
    onLoginFormChange()
  }
  const passwordHandler = (val)=>{ 
    console.log(val.target.value);
    setLoginForm((form)=> ({ 
      ...form,  
      password: val.target.value
    }) )
    onLoginFormChange()
  }
  return (
    <div id="loginCard">
      <form onSubmit={submitHandler}>
        <div className="form-field">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" onChange={usernameHandler} value={loginForm.username}/>
          {/* <span class="form-field__error-message">Aquí hay un error</span> */}
        </div>
        
        <div className="form-field">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" onChange={passwordHandler} value={loginForm.password}/>
          { error && <span className="form-field__error-message">{error}</span>}
        </div>
        
        <div className="actions">
          <button className="form-submit" type="submit">
            Login
          </button>
        </div>
      </form>
      
      <div className="login-card__bottom-message">
        <p> no account yet? <Link to="/Register">Sign up</Link></p>
      </div>
    </div>
  )
}

export default LoginCard