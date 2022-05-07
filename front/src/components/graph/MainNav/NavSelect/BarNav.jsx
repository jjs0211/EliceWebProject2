import React, { useState, useEffect } from 'react'
import BarLine from '../../Apex/BarLine';
import Sidebar from './../../Sidebar/Sidebar';
import * as Api from '../../../../api';
import './NavSelect.css'
import axios from "axios";
import qs from 'qs';

const BarNav = () => {
  const [categories, setCategories] = useState("")
  const [selectedCategroy, setSelectedCategory] = useState("")  // 실제 선택한거
  const [nutrients, setNutrients] = useState("")
  const [selectedNutrient, setSelectedNutrient] = useState("")
  const [data, setData] = useState("")



  useEffect(() => {
    Api.get("food/category")
    .then((res) => {
      console.log('바차트누름')
      setCategories(res.data)
    })
  }, [])

  // useEffect(() => {
  //   if(selectedCategroy){(res)=>{
  //     setSelectedCategory(res.data)
  //     console.log('되고있어!!!!')}
  //   }
  // }, [selectedCategroy])

  // useEffect(() => {
  //   Api.get("food/nutrients")
  //   .then((res) => {
  //     // console.log('바차트누름')
  //     setNutrients(res.data)
  //   })
  // }, [])

  // useEffect(() => {
  //   if(selectedNutrient){(res)=>{
  //     setSelectedNutrient(res.data)
  //     console.log('되고있어!!!!')}
  //   }
  // }, [selectedNutrient])


  // useEffect(() => {
  //   if(selectedCategroy && selectedNutrient){
  //     axios.get(`http://localhost:5001/food-rank`,{
  //           params: {
  //             category: 'fruits', //rank1
  //             nutrients: 'fat'     // rank2
  //           }
  //         })
  //         .then((res) => {
  //           // console.log(res.data)
  //           console.log('axios Test')
  //           console.log(res.data)
  //           // console.log(res.data)
  //         });
  //   }
  // }, [])

  
  return (
    <div className='content'>
      <div className='Aside'>
        {categories && <Sidebar data={categories} setData={setSelectedCategory}></Sidebar>}
        {nutrients && <Sidebar data={nutrients} setData={setSelectedNutrient}></Sidebar>}
      </div>

      <div className="Graph">
        <BarLine data={data}></BarLine>
      </div>
    </div>
  )
}

export default BarNav