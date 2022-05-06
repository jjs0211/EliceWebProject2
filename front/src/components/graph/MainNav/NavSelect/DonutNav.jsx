import React, { useState, useEffect} from 'react'
import MainDash from '../../MainDash/MainDash';
import Sidebar from './../../Sidebar/Sidebar';
import * as Api from '../../../../api';
import Donut from '../../Apex/Donut';
import './NavSelect.css'


const DonutNav = () => {
  const [categories, setCategories] = useState("")  // sidebar에 보여질 선택지들
  const [selectedCategroy, setSelectedCategory] = useState("")  // 실제 선택한거
    // const [foods, setFoods] = useState("")
    // const [selectedFood, setSelectedFood] = useState("")
  const [data, setData] = useState("")

  useEffect(() => {
    Api.get("food/category")
    .then((res) => {
      // console.log(res.data)
      setCategories(res.data)
    })
  }, [])
  // useEffect(() => {
  // if(selectedCategroy){
  //   Api.get("food/category")
  // .then((res) => {
  //   setSelectedCategory(res.data)
  // })
  // }}, [selectedCategroy])
  useEffect(()=> {
    Api.get("nutrients-agv?category=desserts")
    .then((res)=> {
      console.log('디저트선택')
      console.log(res.data)
      setData(res.data)
    })
  }, []) 


  return (
    <div className='content'>
      <div className='Aside'>
        <Sidebar data={categories} setData={setSelectedCategory}></Sidebar>
      </div>
      <div className="Graph">
        <Donut data={data}></Donut>
      </div>
    </div>
  )
}

export default DonutNav