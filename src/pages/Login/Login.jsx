import React from 'react'
import './Login.css'
import logo from '../../assets/logo.png'

const Login = () => {
  return (
      <div className='login'>
          <img src={logo} alt="" className="login-logo" />
          <div className="login-form">
              <h1 className="">Sign Up</h1>
              <form className="">
                  <input type="text" placeholder="Your Name" className="" />
                  <input type="email" placeholder="Email" className="" />
                  <input type="password" placeholder="Password" className="" />
                  <button className="">Sign Up</button>
                  <div className="form-help">
                    <div className="remember">
                      <input type="checkbox" className="" />
                      <label htmlFor="" className="">Remember Me</label>
                     </div>
                          <p className="">Need Help?</p>
                    </div>
              </form>
              <div className="form-switch">
                  <p className="">New to Netflix? <span className="">Sign Up Now</span></p>
                  <p className="">Already have account? <span className="">Sign In Now</span></p>
              </div>
          </div>
    </div>
  )
}

export default Login