import React from 'react'
import { useNavigate, useParams } from "react-router-dom";
import '../../css/register/RegisterMiddle3_name.css'

function RegisterMiddle3_name() {
  return (
  <div className="nameContainer">
    <div className="nameTitle">이름</div>
    <input className='nameBox'></input>
    <div className='nameChecker'></div>
  </div>


  )

}

export default RegisterMiddle3_name