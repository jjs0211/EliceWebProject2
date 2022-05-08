import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar';
import MainDash from './../MainDash/MainDash';

function Header(props) {
  return <div>
    <button><a href="/" onClick={function (event) {
      event.preventDefault();
      props.onChangeMode();
    }}>{props.title}</a></button>
  </div>

}


function SideTabs(props) {
  const lis = []
  for (let i=0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <button id={t.id} href={"/read/" + t.id} onClick={event => {
        event.preventDefault();
        props.onChangeMode(Number(event.target.id));
      }}>{t.title}</button>
    </li>)
  }
  return <nav>
    <div>
      {lis}
    </div>
  </nav>
}

function Article(props) {
  return (<div>
      <article>
        <h2>{props.title }</h2>
          {props.body}
        <br />
        <br />

      </article>
      {props.chart}
      <div>
          <div>
              <MainDash></MainDash>
          </div>
      </div>
      

  </div>)
}
function Article2(props) {
  return (<div>
      <article>
        <h2>{props.title }</h2>
          {props.body}
        <br />
        <br />

      </article>
      {props.chart}
      <div>
          <div>
              <Sidebar></Sidebar>
              <MainDash></MainDash>
          </div>
      </div>
      

  </div>)
}



//////////////////////////////////////////////
const MainNav = () => {
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const topics = [
    { id: 1, title: 'Donut category1', body: 'Donut categroy2' },
    { id: 2, title: 'Radar categroy1', body: 'Radar categroy2' },
    { id: 3, title: 'Bar categroy1', body: 'Bar categroy2' },
    { id: 4, title: 'Bubble categroy1', body: 'Bubble categroy2'}
    ]
    const charts = [
        { id: 1, chart: 'BCNF' },
        { id: 2, chart: 'SAPC' },
        { id: 3, chart: 'SRPC' },
        { id: 4, chart: 'TSPC' }
    ]
  let content = null;
  if (mode === 'WELCOME') {
    content = <Article title="Welcome" body = "Hello, Graphpage"></Article>

  } else if (mode === 'READ') {
    let title, body, chart = null;
    for (let i = 0; i < topics.length; i++){
      if (topics[i].id === id) {
        title = topics[i].title;
          body = topics[i].body;
          chart = charts[i].chart;
        }
    }   
    content = <Article2 title={title} body = {body} chart = {chart}></Article2>
  }
    

    
  return (
    <div>
      <div>
        <div>
          <Header title="Guide" onChangeMode={() => {
            setMode('WELCOME');
          }}></Header>
        </div>
      </div>
  
      <div>
        <div>
          <SideTabs topics={topics} onChangeMode={(_id) => {
            setMode('READ');
            setId(_id);
          }}></SideTabs>
        </div>
        <span>{content}</span>
      </div>

          
  </div>
  )
}

export default MainNav