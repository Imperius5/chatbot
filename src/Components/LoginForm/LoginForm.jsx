import React from 'react'
import './LoginForm.css';
const LoginForm = () => {
  return (
    <div className="container">
    <div className="main">
        <input type = "checkbox" id = "check" aria-hidden = "true"/>

        <div className="signup">
            <form action="/">
                <label htmlFor="check" aria-hidden = "true">Sign up</label>
                <input type="text" name="txt" placeholder='Username' required />
                <input type="email" name="email" placeholder='Email' required />
                <input type="password" name="pass" placeholder = 'Password' required />
                <button>Sign up</button>
            </form>
        </div>

        <div className="login">
            <form action="/">
                <label htmlFor="check" aria-hidden = 'true'>Login</label>
                <input type="email" name="email" placeholder = "Email" required />
                <input type="password" name="pass" placeholder='Password' required />
                <button>Login</button>
            </form>
        </div>
        </div>
    </div>
  )
}

export default LoginForm;
