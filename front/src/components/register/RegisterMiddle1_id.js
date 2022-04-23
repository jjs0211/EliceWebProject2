import React from 'react'
import { useNavigate, useParams } from "react-router-dom";
import '../../css/register/RegisterMiddle1_id.css'

function RegisterMiddle1_id() {
  return (
    <div className="idContainer">
      <div className="idTitle">아이디</div>
      <input className='idBox'></input>
      <div className='idChecker'></div>
    </div>

  )

}

export default RegisterMiddle1_id