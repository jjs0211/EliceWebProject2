import React from 'react'
import { useNavigate, useParams } from "react-router-dom";
import '../../css/login/LoginMiddle.css'

function LoginMiddle() {
  return (
    <div className='middleContainer'>
      <input className='idBox'></input>
      <input className="passwordBox"></input>
      <button className="loginButton" name="loginButton">Login</button>
    </div>
  )
}

export default LoginMiddle