import React from 'react'
import MainDash from '../../MainDash/MainDash';
import Sidebar from './../../Sidebar/Sidebar';

const BubbleNav = () => {
  return (
    <div>
      <span>버블네비게이션</span>
      <Sidebar></Sidebar>
      <Sidebar></Sidebar>
      <MainDash></MainDash>      
    </div>
  )
}

export default BubbleNav