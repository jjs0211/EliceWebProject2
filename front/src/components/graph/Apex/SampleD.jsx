import React, { Component } from "react";
import Chart from "react-apexcharts";

class SampleD extends Component {
  constructor(props) {
    super(props);

    this.updateCharts = this.updateCharts.bind(this);

    this.state = {


      // upBAR
      optionsRadial: {
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 225,
            hollow: {
              margin: 0,
              size: "70%",
              background: "#fff",
              image: undefined,
              imageOffsetX: 0,
              imageOffsetY: 0,
              position: "front",
              dropShadow: {
                enabled: true,
                top: 3,
                left: 0,
                blur: 4,
                opacity: 0.24
              }
            },
            track: {
              background: "#fff",
              strokeWidth: "67%",
              margin: 0, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.35
              }
            },

            dataLabels: {
              showOn: "always",
              name: {
                offsetY: -20,
                show: true,
                color: "#888",
                fontSize: "13px"
              },
              value: {
                formatter: function (val) {
                  return val;
                },
                color: "#111",
                fontSize: "30px",
                show: true
              }
            }
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "horizontal",
            shadeIntensity: 0.5,
            gradientToColors: ["#ABE5A1"],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
          }
        },
        stroke: {
          lineCap: "round"
        },
        labels: ['Carbs', 'Fiber', 'Fat', 'Protein', 'SatFat']
      },
      seriesRadial: 
      [76,44,52,31,15],
      
    
    };
  }

    
    
  updateCharts() {
    const max = 90;
    const min = 30;
    const newRadialSeries = [];

    // this.state.seriesMixedChart.forEach((s) => {
    //   const data = s.data.map(() => {
    //     return Math.floor(Math.random() * (max - min + 1)) + min;
    //   });
    //   newMixedSeries.push({ data: data, type: s.type });
    // });

    this.state.seriesRadial.forEach((s) => {
      const data = s.data.map(() => {
        return Math.floor(Math.random() * (180 - min + 1)) + min;
      });
      newRadialSeries.push({ data });
    });      

    this.setState({
    //   seriesRadial: newRadialSeries
      seriesRadial: [Math.floor(Math.random() * (90 - 50 + 1)) + 50]
    });
  }

  render() {
    return (
        <div className="app">
        
        <div className="row">


                       
            <div className="upDonutChart">
            <Chart
              options={this.state.optionsRadial}
              series={this.state.seriesRadial}
              type="donut"
              width="380"
            />
          </div>


        </div>

        <div className="row">


          <p className="col">
            <button onClick={this.updateCharts}>UpdateSampelD!</button>
          </p>
        </div>
      </div>
    );
  }
}

export default SampleD;
