import React, { useState, useEffect } from 'react'
import '../../../css/graph/Sidebar.css'
// import Logo from '../../../images/graph/logo.png'

import { SidebarData } from '../Data/Data'


const Sidebar = (props) => {
  const [data, setData] = useState('o')
  const [selected, setSelected] = useState(0)
  // let newData = {...props.data}
  // console.log({newData})
  // const dataexam = ['bruits', 'grains', 'meat', 'Seafood', 'Beverage']
  // console.log(dataexam)
  // const dataexam2 = props.data
  useEffect(()=>{
    if(props.data[selected]){
      props.setData(props.data[selected])
    }
  }, [selected])

  useEffect(() => {
    // setSelected(0)
    console.log('!!!!!!!!!!!')
  },[props.data])
  return (
    <div className="Sidebar">
      {/* <p>up</p>
      <div>
        {props.data}
        {dataexam}
        {dataexam2}
      </div>
      <p>down</p> */}


      <div className='menu'>
        {/* {props.data ? (props.data.map((item, index) => {
          return (
            <div className={selected===index?'menuItem active': 'menuItem'}
              key={index}
              onClick={()=>setSelected(index)}
            >
              <span>
                {item}
              </span>
              
            </div>
            )
        })):(<></>)} */}
        
        {props.data && props.data.map((item, index) => {
          return (
            <div className={selected===index?'menuItem active': 'menuItem'}
              key={index}
              onClick={()=>setSelected(index)}
            >
              <span>
                {item}
              </span>
              
            </div>
            )
        })}
        

        </div>
      </div>

  )
}

export default Sidebar
