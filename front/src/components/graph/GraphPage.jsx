import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import '../../css/graph/GraphPage.css'


const GraphPage = () => {
  return (
    <div className='GraphPage'>
      <div className="GraphPageGlass">
        <Sidebar></Sidebar>
        <div>Graph</div>
        
        </div>
    </div>
  )
}

export default GraphPage