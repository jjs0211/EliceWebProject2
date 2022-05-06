import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from "react-router-dom";
import '../../css/blog/BlogMiddleAritcle.css'
import * as Api from '../../api'
import BlogArticlePreview from '../blog/BlogArticlePreview'


function BlogMiddleArticle({latestArticleList}) {

  return (
  <>
    <p className="mainTitle">최신 기사</p>
    <div className="blogMiddleArticleContainer">
      <div className="blogMiddleAritcleBox">
        {latestArticleList.map((article) => (
          <BlogArticlePreview
            key = {article.id}
            id = {article.id}
            nickname = {article.nickName}
            title = {article.title}
            src = {article.filePath}
          />
        ))} 
      </div>
    </div>
  </>
  )

}

export default BlogMiddleArticle

