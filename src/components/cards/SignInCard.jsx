import './SignInCard.css'

const SignInCard = ()=>{
  return (
    <div id="signInCard">
      <div className="form-field">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        <span className="form-field__error-message">Aquí hay un error</span>
      </div>
      
      <div className="form-field">
        <label htmlFor="last-name">Last name</label>
        <input type="text" name="last-name" id="last-name" />
        <span className="form-field__error-message">Aquí hay un error</span>
      </div>

      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <span className="form-field__error-message">Aquí hay un error</span>
      </div>

      <div className="form-field">
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" placeholder="eg. Wilder_trujillo"/>
        <span className="form-field__error-message">Aquí hay un error</span>
      </div>
      
      <div className="form-field">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <span className="form-field__error-message">Aquí hay un error</span>
      </div>
      
      <div className="form-field">
        <label htmlFor="confirm-password">Confirm password</label>
        <input type="password" name="confirm-password" id="confirm-password" />
        <span className="form-field__error-message">Aquí hay un error</span>
      </div>
      
      <div className="actions">
        <button className="form-submit">
          Login
        </button>
      </div>

      <div className="login-card__bottom-message">
        <p> already have an account? <a>Login</a></p>
      </div>
    </div>
  )
}

export default SignInCard