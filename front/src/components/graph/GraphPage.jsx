import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import '../../css/graph/GraphPage.css'
import MainDash from './MainDash/MainDash'
import LogoPart from './Header/LogoPart'
import NavPart from './Header/NavPart';
import GraphFooter from './Footer/GraphFooter';
import GraphHeader from './Header/GraphHeader';
import MainNav from './MainNav/MainNav'
import MainNav2 from './MainNav/MainNav2';


const GraphPage = () => {
  return (
    <div className="GraphPageWrap">
      <div className="graphHeaderContainer">
        {/* <div className="graphHeaderImg">
        </div> */}
        <GraphHeader></GraphHeader>
      </div>

      {/* <div className="Header">
        <div className="HeaderGlass">
          <LogoPart></LogoPart>
          <div>
            <div id = "JustBlankBlock"></div>
          </div>
          <div>
            <div>TEAMPAGE Button</div>
          </div>
        </div>
      </div>
      <div className="GraphPageNav">
        <div className="GraphPageNavGlass">
          <NavPart></NavPart>
        </div>
      </div>

      <div className="DashboardSelect">
        <div>
          <div>Guide</div>
          <div>Donut</div>
          <div>Bar</div>
          <div>Radar</div>
          <div>Bubble</div>
        </div>
      </div> */}
      <div>
        <div>
          {/* <MainNav></MainNav> */}
        </div>
      </div>
      <div className='GraphPage'>
        <div className="GraphPageGlass">
          {/* <Sidebar></Sidebar>
          <Sidebar></Sidebar>
          <MainDash></MainDash> */}
          <MainNav2></MainNav2>

        </div>
      </div>

      {/* <div className='GraphPageFooter'>
        <div className='GraphPageFooterImg'>
          <GraphFooter></GraphFooter>
        </div>
      </div> */}
      <div className="GraphPageFooter">
        <div className="GraphPageFooterImg">
        </div>
      </div>
    </div>

  )
}

export default GraphPage