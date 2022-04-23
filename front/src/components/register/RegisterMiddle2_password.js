import React from 'react'
import { useNavigate, useParams } from "react-router-dom";
import '../../css/register/RegisterMiddle2_password.css'

function RegisterMiddle2_password() {
  return (
    <div className="passwordContainer">
    
      <div className="passowrdTitle">비밀번호</div>
      <input className='passwordBox'></input>
      <div className='passwordChecker'></div>
   
      <div className='confirmTitle'>비밀번호 재확인</div>
      <input className="confirmBox"></input>
      <div className="confirmChecker"></div>
   
   </div>


  )

}

export default RegisterMiddle2_password