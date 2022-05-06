import React, { useState, useEffect } from 'react'
import BarLine from '../../Apex/BarLine';
import Sample1 from '../../Apex/Sample';
import Sidebar from './../../Sidebar/Sidebar';
import * as Api from '../../../../api';


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
    <div>
      <span>바네비게이션</span>
      <Sidebar data={categories} setData={setSelectedCategory}></Sidebar>
      <Sidebar></Sidebar>
      <div>
        <BarLine></BarLine>
        <Sample1></Sample1>
      </div>
    </div>
  )
}

export default BarNav