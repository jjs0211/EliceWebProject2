import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import '../../css/graph/GraphPage.css'
import MainDash from './MainDash/MainDash'


const GraphPage = () => {
  return (
    <div className='GraphPage'>
      <div className="GraphPageGlass">
        <Sidebar></Sidebar>
        <MainDash></MainDash>

        <div>Foot</div>        
        </div>
    </div>
  )
}

export default GraphPage