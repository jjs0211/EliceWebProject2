import React, { useState, useEffect} from 'react'
import Test2_2 from '../../apitest';
import MainDash from '../../MainDash/MainDash';
import Sidebar from './../../Sidebar/Sidebar';
import * as Api from '../../../../api';



const DonutNav = () => {

  // const CategoryAPI = () => {
  //   let [category, setCategory] = useState("")
  //   console.log(category);

  //   useEffect(() => {
  //     Api.get("food/category")
  //     .then((res) => {
  //       console.log(res)
  //       setCategory(res.data.data)
  //     })
  //     CategoryAPI()
  //   }, [])
  // }
  const Test2_2 = () => {
  fetch('http://localhost:5001/food/category')
    .then(response => {
      return response.json()
    })
    .then(json => {
      console.log('body : ', json)
    })
}  
  return (
    <div>
      <span>도넛네비게이션</span>
      {/* <div> {category} </div> */}
      <button onClick={Test2_2}>gg</button>
      <Sidebar></Sidebar>
      <MainDash></MainDash>
      {/* <Test2_2></Test2_2> */}
      
    </div>
  )
}

export default DonutNav