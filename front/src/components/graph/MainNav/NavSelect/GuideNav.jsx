import React, { useState, useEffect } from 'react'
import * as Api from '../../../../api';

const GuideNav = () => {//   const Test2_2 = () => {
//   fetch('http://localhost:5001/food/category')
//     .then(response => {
//       return response.json()
//     })
//     .then(json => {
//       console.log('body : ', json)
//     })
// }  

  const [categories, setCategories] = useState("")  // sidebar에 보여질 선택지들

  useEffect(() => {
    Api.get("/nutrients?food=rice")
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
      <p data = {categories}>차트에 대한 가벼운 설명 부분 {categories}</p>
    </div>
  )
}

export default GuideNav