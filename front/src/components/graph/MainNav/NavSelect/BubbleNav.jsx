import React, { useState, useEffect } from 'react'
import Bubble from '../../Apex/Bubble';
import Sidebar from './../../Sidebar/Sidebar';
import './NavSelect.css'
import * as Api from '../../../../api';
import axios from "axios";
import qs from 'qs';

const BubbleNav = () => {
  const [nutrients, setNutrients] = useState("")
  const [selectedNutrient, setSelectedNutrient] = useState("")
  const [data, setData] = useState("")
  
  useEffect(() => {
    Api.get("food/nutrients")
    .then((res) => {
      setNutrients(res.data)
    })
  }, [])


  return (
    <div className='content'>
      <div className='Aside'>
        {nutrients && <Sidebar data={nutrients} setData={setSelectedNutrient}></Sidebar>}
        {nutrients && <Sidebar data={nutrients} setData={setSelectedNutrient}></Sidebar>}
      </div>
      <div className='Graph'>
        <Bubble></Bubble>
      </div>     
    </div>
  )
}

export default BubbleNav