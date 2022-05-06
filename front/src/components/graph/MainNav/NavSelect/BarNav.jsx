import React, { useState, useEffect } from 'react'
import BarLine from '../../Apex/BarLine';
import Sidebar from './../../Sidebar/Sidebar';
import * as Api from '../../../../api';
import './NavSelect.css'


const BarNav = () => {
  const [categories, setCategories] = useState("")
  const [selectedCategroy, setSelectedCategory] = useState("")  // 실제 선택한거
  
  useEffect(() => {
    Api.get("food/category")
    .then((res) => {
      // console.log(res.data)
      setCategories(res.data)
    })
  }, [])
  
  return (
    <div className='content'>
      <div className='Aside'>
        <Sidebar data={categories} setData={setSelectedCategory}></Sidebar>
        <Sidebar></Sidebar>
      </div>

      <div className="Graph">
        <BarLine></BarLine>
      </div>
    </div>
  )
}

export default BarNav