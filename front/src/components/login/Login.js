import React from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { useState } from 'react'
import LoginHeader from './LoginHeader';
import LoginBottom from './LoginBottom';
import LoginBottomAd from './LoginBottomAd';
import '../../css/login/Login.css'

function Login() {
  
  const [ id, setId ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ alert, setAlert ] = useState('')
  
  //id가 공백인지 확인함
  const isIdBlank = () => id.length <= 0

  //위 isIdBlank 함수를 통해 Id가 입력이 되었는지를 확인함.
  const isIdValid = isIdBlank(id)

  //password가 공백인지 확인함
  const isPasswordBlank = () => password.length <= 0

  //위 isPasswordBlank 함수를 통해 Password가 입력이 되었는지를 확인함.
  const isPasswordValid = isPasswordBlank(password)


const handleSubmit = (e) => {
    e.preventDefault()
    if (isIdValid) {
      setAlert('아이디를 입력해 주세요.')
    }
    else if (isPasswordValid) {
      setAlert('비밀번호를 입력해 주세요.')
    }
  }

  return (
    <div className='container'>
      <LoginHeader />
      <div className='middleContainer'>
        <input className='idBox' type='text' name='email' placeholder='이메일' value={id} onChange={(e) => setId(e.target.value)} />
        <input className="passwordBox" type='password' name='password' placeholder='패스워드' value={password} onChange={(e) => setPassword(e.target.value)} />
        <div className='alertBox'>{alert}</div>
        <button className="loginButton" name="loginButton" onClick={handleSubmit}>Login</button>
      </div>
      <LoginBottom />
      <LoginBottomAd />
    </div>
  )
}

export default Login