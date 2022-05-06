import React from 'react'
import Bubble from '../../Apex/Bubble';
import MainDash from '../../MainDash/MainDash';
import Sidebar from './../../Sidebar/Sidebar';

const BubbleNav = () => {
  return (
    <div>
      <span>버블네비게이션</span>
      <Sidebar></Sidebar>
      <Sidebar></Sidebar>
      <div>
        <Bubble></Bubble>
      </div>     
    </div>
  )
}

export default BubbleNav