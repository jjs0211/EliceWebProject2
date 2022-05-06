import React from 'react'
import Bubble from '../../Apex/Bubble';
import Sidebar from './../../Sidebar/Sidebar';
import './NavSelect.css'

const BubbleNav = () => {
  return (
    <div className='content'>
      <div className='Aside'>
        <Sidebar ></Sidebar>
        <Sidebar ></Sidebar>
      </div>
      <div className='Graph'>
        <Bubble></Bubble>
      </div>     
    </div>
  )
}

export default BubbleNav