import React from 'react'
import { useNavigate, useParams } from "react-router-dom";
import '../../css/blog/BlogHeader.css'


function BlogHeader() {
  const navigate = useNavigate()

  return (
    <div className="blogHeaderContainer">
      <div className="blogHeader">
        <div className='naviBar'>
          <div className='navi1' />
          <div className='naviTitle'>FoodLog</div>
          <div className='navi2' />
          <div className='naviContent'>
            <button onClick={() => navigate('/register')}>회원가입</button>
            <button onClick={() => navigate('/login')}>로그인</button> 
            <button onClick={() => navigate('/graph')}>그래프</button> 
            <button onClick={() => navigate('/main')}>메인화면</button>
          </div>
          <div className='navi3' />
        </div>

      </div>
    </div>
  )

}

export default BlogHeader