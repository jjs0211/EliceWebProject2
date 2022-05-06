import React, { useState, useEffect } from 'react'
import Radar from '../../Apex/Radar';
import SampleR from '../../Apex/SampleR';
import Sidebar from './../../Sidebar/Sidebar';
import * as Api from '../../../../api';


const RadarNav = () => {
  const [categories, setCategories] = useState("")  // sidebar에 보여질 선택지들
  const [selectedCategroy, setSelectedCategory] = useState("")  // 실제 선택한거
  const [foods, setFoods] = useState("")
  const [selectedFood, setSelectedFood] = useState("")
  const [data, setData] = useState("")

  useEffect(() => {
    Api.get("/food/foodname?category=Beverages")
    .then((res) => {
      console.log('방사형누름')
      // console.log(res.data)
      // console.log(res.data.data)
      setCategories(res.data)
    })
  }, [])
  
  useEffect(() => {
    if(selectedCategroy){
      Api.get("food/category")
    .then((res) => {
      setSelectedCategory(res.data)
    })
    }
  }, [selectedCategroy])

  useEffect(() => {
    if(selectedCategroy){
      Api.get("/food/foodname?category=Fish")
      .then((res) => {
        console.log('2번째 사이드바_예제 디저트')
        console.log(res.data)
        setFoods(res.data)
      })
    }
  }, [])

  

  return (
    <div>
      <span data = {categories}>방사형네비게이션{categories}</span>
      {categories && <Sidebar data = {categories} setData={setSelectedCategory}></Sidebar>}
      {foods && <Sidebar data = {foods} setData={setSelectedFood}></Sidebar>}
      <div>
        <Radar></Radar>
        <SampleR></SampleR>
      </div>
    </div>
  )
}

export default RadarNav