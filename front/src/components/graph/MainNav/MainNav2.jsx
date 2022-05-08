import React, { useState } from 'react'
import MainDash from '../MainDash/MainDash'
import Sidebar from '../Sidebar/Sidebar'
import BarNav from './NavSelect/BarNav';
import DonutNav from './NavSelect/DonutNav';
import RadarNav from './NavSelect/RadarNav';
import { useEffect } from 'react';
import BubbleNav from './NavSelect/BubbleNav';
import GuideNav from './NavSelect/GuideNav';
import './MainNav2.css'

const Guide = (props) => {
  return <div style={{display: 'inline-block'}}>
    <button className='GuideButton'><a href="/" onClick={function (event) {
      event.preventDefault();
      props.onChangeMode();
    }}>{props.title}</a></button>
  </div>
}

const Donut = (props) => {
  return <div>
  <button className='DonutButton'><a href="/" onClick={function (event) {
    event.preventDefault();
    props.onChangeMode();
  }}>{props.title}</a></button>
</div>
}
const Radar = (props) => {
  return <div>
  <button className='RadarButton'><a href="/" onClick={function (event) {
    event.preventDefault();
    props.onChangeMode();
  }}>{props.title}</a></button>
</div>
}

const Bar = (props) => {
  return <div>
  <button className='BarButton'><a href="/" onClick={function (event) {
    event.preventDefault();
    props.onChangeMode();
  }}>{props.title}</a></button>
</div>
}

const Bubble = (props) => {
  return <div>
  <button className='BubbleButton'><a href="/" onClick={function (event) {
    event.preventDefault();
    props.onChangeMode();
  }}>{props.title}</a></button>
</div>
}

/////////////////////////////
const MainNav2 = () => {
  const [mode, setMode] = useState('GUIDE');
  // const [id, setId] = useState(null);
  // const [c1, setC1] = useState('firstC');
  // const [c2, setC2] = useState('secondC');
  // useEffect(() => {

  // },)
  // const navigate = [
  //   { id: 1, title: {c1} , chart: {c2}},
  //   { id: 2, title: 'category1_2', chart: 'radar'}
  // ]

  let content = null;
  if (mode === 'GUIDE') {
    content = <GuideNav></GuideNav>
  }else if (mode === 'DONUT') {
    content = <DonutNav></DonutNav>;
  }else if (mode === 'RADAR') {
    content = <RadarNav></RadarNav>
  }else if (mode === 'BAR') {
    content = <BarNav></BarNav>
  }else if (mode === 'BUBBLE') {
    content = <BubbleNav></BubbleNav>
  }

  return (
    <div className='MainNav' >
      <div className='MainNavButton'>
        <div className='MainNavGlass1'>
          <Guide title="GuideB" onChangeMode={() => {
            setMode((mode) => 'GUIDE');
          }}></Guide>
          <Donut title="DonutB" onChangeMode={() => {
            setMode((mode) => 'DONUT');
          }}></Donut>
          <Radar title="RadarB" onChangeMode={() => {
            setMode((mode) => 'RADAR');
          }}></Radar>       
          <Bar title="BarB" onChangeMode={() => {
            setMode((mode) => 'BAR');
          }}></Bar>
          <Bubble title="BubbleB" onChangeMode={() => {
            setMode((mode) => 'BUBBLE');
          }}></Bubble>
        </div>
      </div>

      <div className='MainNavGlass2'>
        {content}
      </div> 
    </div>


  )
}

export default MainNav2