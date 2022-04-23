import React from 'react'
import { useNavigate, useParams } from "react-router-dom";
import '../../css/register/RegisterMiddle6_phone.css'

function RegisterMiddle6_phone() {
  return (
    <div className="phoneNumberContainer">
    <div className="phoneNumberTitle">휴대전화</div>
    <input className='phoneNumberBox'></input>
    <div className='phoneNumberChecker'></div>
  </div>

  )

}

export default RegisterMiddle6_phone