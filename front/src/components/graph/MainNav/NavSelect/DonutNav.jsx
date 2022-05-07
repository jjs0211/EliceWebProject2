import React, { useState, useEffect} from 'react'
import MainDash from '../../MainDash/MainDash';
import Sidebar from './../../Sidebar/Sidebar';
import * as Api from '../../../../api';
import Donut from '../../Apex/Donut';
import './NavSelect.css'
import axios from "axios";
import qs from 'qs';


const DonutNav = () => {
  const [categories, setCategories] = useState("")  // sidebar에 보여질 선택지들
  const [selectedCategroy, setSelectedCategory] = useState("")  // 실제 선택한거
    // const [foods, setFoods] = useState("")
    // const [selectedFood, setSelectedFood] = useState("")
  const [data, setData] = useState("")

  useEffect(() => {
    Api.get("food/category")
    .then((res) => {
      console.log('도넛차트누름')
      setCategories(res.data)
    })
  }, [])

  // useEffect(() => {
  //   if(selectedCategroy){(res)=>{
  //     // setSelectedCategory(res.data)
  //     // console.log('up')
  //     // console.log(res.data)
  //     // console.log('down')
  //     console.log('되괴있어!!!!')}
  //   }
  // }, [selectedCategroy])

  useEffect(()=> {
    // const params = {category :'desserts'}; //category=카테고리이름  
    if(selectedCategroy){
      axios.get(`http://localhost:5001/nutrients-avg?category=${selectedCategroy}`)
      .then((res) => {
        // console.log(res.data)
        console.log('도넛 사이드바 선택')
        console.log(res.data)
        // console.log(res.data)
        setData(res.data);
      });
    }
  }, [selectedCategroy])


  return (
    <div className='content'>
      <div className='Aside'>
        {categories && <Sidebar data={categories} setData={setSelectedCategory}></Sidebar>}
      </div>
      <div className="Graph">
        {data && <Donut data={data}></Donut>}
      </div>
    </div>
  )
}

export default DonutNav