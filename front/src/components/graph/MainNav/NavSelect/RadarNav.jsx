import React, { useState, useEffect } from 'react'
import Radar from '../../Apex/Radar';
import SampleR from '../../Apex/SampleR';
import Sidebar from './../../Sidebar/Sidebar';
import * as Api from '../../../../api';


const RadarNav = () => {
  const [categories, setCategories] = useState("")  // sidebar에 보여질 선택지들
  const [selectedCategroy, setSelectedCategory] = useState("")  // 실제 선택한거
  const [data, setData] = useState("")

  useEffect(() => {
    Api.get("food/category")
    .then((res) => {
      console.log('방사형누름')
      // console.log(res.data)
      // console.log(res.data.data)
      setCategories(res.data)
    })
  }, [])
  
  // useEffect(() => {
  //   if(selectedCategroy){
  //     //
  //   .then((res) => {
  //     setSelectedCategory(res.data)
  //   })
  //   }
  // }, [selectedCategroy])
  

  return (
    <div>
      <span data = {categories}>방사형네비게이션{categories}</span>
      <Sidebar data = {categories} setData={setSelectedCategory}></Sidebar>
      <Sidebar></Sidebar>
      <div>
        <Radar></Radar>
        <SampleR></SampleR>
      </div>
    </div>
  )
}

export default RadarNav