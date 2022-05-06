import React from 'react'
import Donut from './../Apex/Donut';
import BarLine from './../Apex/BarLine';
import Radar from './../Apex/Radar';
import Bubble from './../Apex/Bubble';
import Test2_2 from '../apitest';
import Sample1 from './../Apex/Sample';
import Sample2 from './../Apex/Sample2';
import SampleD from './../Apex/SampleD';
import SampleR from './../Apex/SampleR';


const MainDash = () => {
  return (
      <div>
      <h1>Dashboard</h1>
          {/* <SampleR></SampleR> */}
          {/* <Sample1></Sample1> */}
          {/* <Donut></Donut> */}
          {/* <SampleD></SampleD> */}
          {/* <Sample2></Sample2> */}

          {/* <Test2_2></Test2_2> */}
          <Radar></Radar>
     
          {/* <BarLine></BarLine> */}
          {/* <Bubble></Bubble> */}
    </div>
  )
}

export default MainDash