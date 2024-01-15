import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div>   <section className="signup-area login-page">
    <div className="flex-box">
      <div className="signup-form">
        <div className="title">
          <h4>Welcome to Shathee</h4>
          <p>Your partner in preventive healthcare</p>
        </div>
        <form action>
          <span>
            <input type="email" placeholder="Email address" />
          </span>
          <span>
            <input type="password" placeholder="Set up your password (Minimum 8 characters)" />
            <img src="../assets/image/login/Group.png" alt="hide" />
          </span>
          <span>
            <input type="checkbox" name id /> <label htmlFor>Remember me <span><a to="">Forgot
                  Password?</a></span></label>
          </span>
          <div className="button">
            <button>Login</button>
          </div>
        </form>
        <div className="login-option">
          <p>Don't have an Account? <Link to="/Signup">Singup</Link></p>
        </div>
        <br />
        <div className="login-other-way">
          <span>
            <hr />
            <p>
              Or Continue with
            </p>
          </span>
          <div className="google">
            <button> <img src="../assets/image/login/google.png" alt="google" /><span>Google</span></button>
            <button> <img src="../assets/image/login/facebook.png" alt="facebook" /><span>Facebook</span></button>
          </div>
        </div>
      </div>
      <div className="login-img">
        <img src="../assets/image/login/BG.png" alt="img" />
        <div className="blur-text">
          <div>
            <button> <img src="../assets/image/login/thumbs.png" alt /> Enables Proactive
              Care</button>
            <p>Proactive care empowers me to make a real difference in my patients' lives, helping them
              avoid
              complications and enjoy a better quality of life.</p>
          </div>
        </div>
      </div>
    </div>
  </section></div>

  )
}
