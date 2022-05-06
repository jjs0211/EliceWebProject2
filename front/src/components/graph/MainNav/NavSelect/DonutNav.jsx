import React, { useState, useEffect} from 'react'
import MainDash from '../../MainDash/MainDash';
import Sidebar from './../../Sidebar/Sidebar';
import * as Api from '../../../../api';
import Donut from '../../Apex/Donut';
import SampleD from '../../Apex/SampleD';



const DonutNav = () => {
    const [categories, setCategories] = useState("")  // sidebar에 보여질 선택지들
    const [selectedCategroy, setSelectedCategory] = useState("")  // 실제 선택한거
    // const [foods, setFoods] = useState("")
    // const [selectedFood, setSelectedFood] = useState("")
    // const [data, setData] = useState("")

    useEffect(() => {
      Api.get("food/category")
      .then((res) => {
        // console.log(res.data)
        setCategories(res.data)
      })
    }, [])
   

  return (
    <div>
      <span>도넛네비게이션</span>
      {/* <div> {category} </div> */}
      {/* <button onClick={Test2_2}>gg</button> */}
      <Sidebar data={categories} setData={setSelectedCategory}></Sidebar>
      <div>
        <Donut></Donut>
        <SampleD></SampleD>
      </div>
      {/* <MainDash></MainDash> */}
      {/* <Test2_2></Test2_2> */}
      
    </div>
  )
}

export default DonutNav