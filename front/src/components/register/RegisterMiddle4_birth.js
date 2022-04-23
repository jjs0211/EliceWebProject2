import React from 'react'
import { useNavigate, useParams } from "react-router-dom";
import '../../css/register/RegisterMiddle4_birth.css'

function RegisterMiddle4_birth() {
  return (
  <div className="birthContainer">
    <div className="birthTitle">생년월일</div>
    <input className='yearBox'></input>
    <input className='monthBox'></input>
    <input className='dayBox'></input>
    <div className='birthChecker'></div>
  </div>


  )

}

export default RegisterMiddle4_birth