import React, { useState, useEffect } from 'react'
import * as Api from '../../../../api';
import axios from "axios";
import Sample1 from '../../Apex/Sample';

const GuideNav = () => {//   const Test2_2 = () => {
  fetch('http://localhost:5001/nutrients?food=cocoa')
    .then(response => {
      return response.json()
    })
    .then(json => {
      console.log('fetch')
      console.log('body : ', json)
    })

  const [categories, setCategories] = useState("")  // sidebar에 보여질 선택지들

  useEffect(() => {
    Api.get('food/category')
    .then((res) => {
      console.log(res.data)
      console.log('가이드네비')
      // console.log(res.data.data)
      setCategories(res.data)
    })

  }, [])

  return (
    <div>
      <span>가이드네비</span>
      <Sample1 />
      <p data = {categories}>차트에 대한 가벼운 설명 부분 {categories}</p>
      
    </div>
  )
}

export default GuideNav