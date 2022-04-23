import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import '../../css/main/Main.css'
import MainHeader from './MainHeader'
import MainMiddle from './MainMiddle'
import MainBottom from './MainBottom'

function Main() {  
  return(
    <div className="container">
      <MainHeader />
      <MainMiddle />
      <MainBottom />
    </div>
  
  ) 
}

export default Main