import React, { useState, useEffect } from 'react'
import * as Api from '../../../../api';
import axios from "axios";
import Sample1 from '../../Apex/Sample';
import qs from 'qs';

const GuideNav = () => {//   const Test2_2 = () => {
  // fetch('http://localhost:5001/nutrients?food=cocoa')
  //   .then(response => {
  //     return response.json()
  //   })
  //   .then(json => {
  //     console.log('fetch')
  //     console.log('body : ', json)
  //   })

  const [categories, setCategories] = useState("")  // sidebar에 보여질 선택지들


  useEffect(() => {
    // Api.get('food/category')
    // .then((res) => {
    //   // console.log(res.data)
    //   console.log('useEffect')
    //   // console.log(res.data.data)
    //   setCategories(res.data)
    // })

    const params = {food :'rice'};
    axios.get(`http://localhost:5001/nutrients?${qs.stringify(params)}`)
    .then((res) => {
      // console.log(res.data)
      console.log('axios Test')
      console.log(res.data)
      // console.log(res.data)
    });
    
  }, [])
    

  // axios.get(`http://localhost:5001/foodname?category`,{
  //     params: {
  //       category: 'fruits',
  //       nutrients: 'fat'
  //     }
  //   })
  //   .then((res) => {
  //     // console.log(res.data)
  //     console.log('axios Test22')
  //     console.log(res.data)
  //     // console.log(res.data)
  //   });

  //   const rank1 = {category: 'fruits'};
  //   const rank2 = {nutrients: 'fat'};
  //   axios.get(`http://localhost:5001/food-rank?${qs.stringify(rank1)}&${qs.stringify(rank2)}`)
  //   .then((res) => {
  //     // console.log(res.data)
  //     console.log('axios Test11')
  //     console.log(res.data)
  //     // console.log(res.data)
  //   });
    
  // }, [])

  return (
    <div>
      <span>가이드네비</span>
      <Sample1 />
      <p data = {categories}>차트에 대한 가벼운 설명 부분 {categories}</p>
      
    </div>
  )
}

export default GuideNav