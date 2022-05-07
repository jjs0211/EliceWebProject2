import React, { Component } from "react";
import Chart from "react-apexcharts";

const BarLine = (state) => {
  // constructor(props) {
    // super(props);
    console.log(state.data)
    // console.log(obj)
    let obj = state.data
    let temp = []
        console.log('objobjJJ!!!!111')
    console.log(obj)

    console.log('정렬!!')
    // console.log(sortResult)
        console.log('objobjJJ!!!!222')

    let tempName = []
    for (var i =0; i<obj.length; i++){
      tempName.push(obj[i].foodKorName)
    }
    console.log(tempName)

    let tempperGrams = []
    for (var i =0; i<obj.length; i++){
      tempperGrams.push(obj[i].perGrams)
    }
    console.log(tempperGrams)    
    state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: tempName
        },
          plotOptions: {
         bar: {
          distributed: true
        }
        } 
        },
      series: [
        {
          name: "series-1",
          data: tempperGrams
        }
      ],
        chart: {
    events: {
      zoomed: function(chartContext, { xaxis, yaxis }) {
      }}}
  }
  // series : y축
  // 줌 이벤트 바 차트의 경우 안됨

// type bar 와 line 으로 변경 테스트 가능

    return (
      <div className="barline">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={state.options}
              series={state.series}
              type="bar" 
              width="500"
            />
          </div>
        </div>
      </div>
    );
}

export default BarLine;