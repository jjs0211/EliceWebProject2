import React from 'react'
import MainDash from '../../MainDash/MainDash';
import Sidebar from './../../Sidebar/Sidebar';

const RadarNav = () => {
  return (
    <div>
      <span>방사형네비게이션</span>
      <Sidebar></Sidebar>
      <Sidebar></Sidebar>
      <MainDash></MainDash>
    </div>
  )
}

export default RadarNav