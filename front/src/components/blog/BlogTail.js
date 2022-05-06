import React, {useState, useEffect } from 'react'
import * as Api from '../../api'
import '../../css/blog/BlogTail.css'
import BlogSlider from './BlogSlider';

function BlogTail() {

const [articleList, setArticleList] = useState('') 

  useEffect(() => {
    Api.get("articlelist").then((res) => {
      console.log(res.data)
      const articleList = res.data
      articleList.sort((a, b) => {
        if (a.visited > b.visited) return -1;
        if (a.visited < b.visited) return 1;
        return 0  
      })

     
      const newArticleList = articleList.slice(0,5)
      setArticleList(newArticleList)})
    }, [])


  return (
    <div className="blogTailContainer">
      <div className="blogTailTitleBox">
        <p className="blogTailTitle">조회수 Top5</p>
      </div>
      <div className="blogTailSliderBox">
        <div className="blogTailSlider">        
        <BlogSlider articleList={articleList} />
        </div>
      </div>
    </div>
  )

}

export default BlogTail

