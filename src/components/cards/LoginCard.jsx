import { memo, useCallback, useState } from 'react';
import './LoginCard.css'

const LoginCard = ()=>{

  const [loginForm, setLoginForm] = useState({username: "", password: ""})
  const submitHandler = (event)=>{ 
    event.preventDefault();
    console.log(loginForm)
  }
  const usernameHandler = (val)=>{ 
    console.log(val.target.value); 
    setLoginForm((form)=> ({ 
      ...form,  
      username: val.target.value
    }))
  }
  const passwordHandler = (val)=>{ 
    console.log(val.target.value);
    setLoginForm((form)=> ({ 
      ...form,  
      password: val.target.value
    }) )
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
          <span className="form-field__error-message">Aquí hay un error</span>
        </div>
        
        <div className="actions">
          <button className="form-submit" type="submit">
            Login
          </button>
        </div>
      </form>
      
      <div className="login-card__bottom-message">
        <p> no account yet? <a>Sign in</a></p>
      </div>
    </div>
  )
}

export default LoginCard