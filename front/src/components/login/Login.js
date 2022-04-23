import React from 'react'
import { useNavigate, useParams } from "react-router-dom";
import LoginHeader from './LoginHeader';
import LoginMiddle from './LoginMiddle';
import LoginBottom from './LoginBottom';
import LoginBottomAd from './LoginBottomAd';
import '../../css/login/Login.css'

function Login() {
  return (
    <div className='container'>
      <LoginHeader />
      <LoginMiddle />
      <LoginBottom />
      <LoginBottomAd />
    </div>
  )
}

export default Login