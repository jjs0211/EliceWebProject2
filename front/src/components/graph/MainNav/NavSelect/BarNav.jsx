import React from 'react'
import MainDash from '../../MainDash/MainDash';
import Sidebar from './../../Sidebar/Sidebar';

const BarNav = () => {
  return (
    <div>
      <span>바네비게이션</span>
      <Sidebar></Sidebar>
      <Sidebar></Sidebar>
      <MainDash></MainDash>
    </div>
  )
}

export default BarNav