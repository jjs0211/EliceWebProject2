import React, { useState, useEffect } from 'react'
import Radar from '../../Apex/Radar';
import SampleR from '../../Apex/SampleR';
import Sidebar from './../../Sidebar/Sidebar';
import * as Api from '../../../../api';
import './NavSelect.css'
import axios from "axios";
import qs from 'qs';


const RadarNav = () => {
  const [categories, setCategories] = useState("")  // sidebar에 보여질 선택지들
  const [selectedCategroy, setSelectedCategory] = useState("")  // 실제 선택한거
  const [foods, setFoods] = useState("")
  const [selectedFood, setSelectedFood] = useState("")
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
  useEffect(() =>{
      // const params = {category :'desserts'}; //categpry=카테고리명
  
    if(selectedCategroy){
      axios.get(`http://localhost:5001/food/foodname?category=${selectedCategroy}`)
      .then((res) => {
        console.log('2번째 사이드바_예제 디저트')
        console.log(res.data)
        setFoods(res.data)
        setSelectedFood('')
      })
    }
  }, [selectedCategroy])

  useEffect(() => {
    if(selectedFood){
      // const params = {food :'cocoa'}; //food=음식이름
      axios.get(`http://localhost:5001/nutrients?food=${selectedFood}`)
      .then((res) => {
        // console.log(res.data)
        console.log('axios Test')
        console.log(res.data)
        // console.log(res.data)
        setData(res.data)
      });
    }
  },[selectedFood])


  
  // useEffect(() => {
  //   if(selectedCategroy){(res)=>{
  //     setSelectedCategory(res.data)
  //     console.log('되괴있어!!!!')}
  //   }
  // }, [selectedCategroy])

  // useEffect(() => {
  //   const params = {category :'desserts'}; //categpry=카테고리명
  //   if(selectedCategroy){
  //     axios.get(`http://localhost:5001/food/foodname?category=${qs.stringify(params)}`)
  //     .then((res) => {
  //       console.log('2번째 사이드바_예제 디저트')
  //       console.log(res.data)
  //       setFoods(res.data)
  //     })
  //   }
  // }, [])

  // useEffect(() => {
  //   if(selectedFood){(res) => {
  //     setSelectedFood(res.data)
  //   }}
  // }, [selectedFood])

  // useEffect(()=> {
  //   if(selectedCategroy){
  //     const params = {food :'cocoa'}; //food=음식이름
  //     axios.get(`http://localhost:5001/nutrients?${qs.stringify(params)}`)
  //     .then((res) => {
  //       // console.log(res.data)
  //       console.log('axios Test')
  //       console.log(res.data)
  //       // console.log(res.data)
  //     });
  //   }
  // }, [])

  

  return (
    <div className='content'>
      <div className='Aside'>
        {categories && <Sidebar data = {categories} setData={setSelectedCategory}></Sidebar>}
        {foods && <Sidebar data = {foods.map(food => {return food.foodName})} setData={setSelectedFood}></Sidebar>}
      </div>

      <div className='Graph'>
        {data && <Radar data={data}></Radar>}
        {/* <SampleR></SampleR> */}
      </div>
    </div>
  )
}

export default RadarNav