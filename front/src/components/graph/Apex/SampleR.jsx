import React, { Component } from 'react';
import Chart from 'react-apexcharts'


class SampleR extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {
      xaxis: {
      categories: ['Carbs', 'Fiber', 'Fat', 'Protein', 'SatFat'],
      labels: {
        show: true,
        style: {
          colors: ["#a8a8a8"],
          fontSize: "20px",
          fontFamily: 'Arial'
  }
}
}

      },
      series: [
    {
      name: "IceCream",
      data: [45, 52, 38, 24, 33]
    },
        //   {
        //   name: "Carb",
        //   data: [33],[33]
        // },
        // {
        //   name: "Fiber",
        //   data: [41]
        // },
        // {
        //   name: "",
        //   data: [45]
        // },
        // {
        //   name: "와플",
        //   data: [49]
        //   },
        // {
        //   name: "초콜릿크림",
        //   data: [55]
        //   },  

  ],
      labels: ['Carbs', 'Fiber', 'Fat', 'Protein', 'SatFat'],

    }
    }
    
  updateCharts() {
    const min = 30;
    const newSeries = [];


    this.state.series.forEach((s) => {
      const data = s.data.map(() => {
        return Math.floor(Math.random() * (60 - min + 1)) + min;
      });
      newSeries.push({ data, name: s.name });
    });      

    this.setState({

        series: newSeries,
    });
  }


  render() {

    return (
        <div className="donut">
            <div>
                <Chart options={this.state.options} series={this.state.series} type="radar" width="700" />
            </div>
            <div>
                <p className="col">
                    <button onClick={this.updateCharts}>UpdateRadar!</button>
                </p>                
            </div>
      </div>
    );
  }
}

export default SampleR;