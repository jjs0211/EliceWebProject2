import React from 'react'
import { useNavigate, useParams } from "react-router-dom";
import '../../css/register/Register.css'
import RegisterHeader from './RegisterHeader'
import RegisterMiddle1_id from './RegisterMiddle1_id'
import RegisterMiddle2_password from './RegisterMiddle2_password';
import RegisterMiddle3_name from './RegisterMiddle3_name';
import RegisterMiddle4_birth from './RegisterMiddle4_birth';
import RegisterMiddle5_sex from './RegisterMiddle5_sex';
import RegisterMiddle6_phone from './RegisterMiddle6_phone';
import RegisterTail from './RegisterTail';

function Register() {
  return (
    <div className='RegisterContainer'>
      <RegisterHeader />
      <RegisterMiddle1_id/>
      <RegisterMiddle2_password/>
      <RegisterMiddle3_name/>
      <RegisterMiddle4_birth/>
      <RegisterMiddle5_sex/>
      <RegisterMiddle6_phone/>
      <RegisterTail/>
    </div>


  )


}

export default Register