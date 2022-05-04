import React from 'react'
import '../../css/blog/BlogArticlePreview.css'
import { useNavigate, useParams } from "react-router-dom";

function BlogArticlePreview(props) {
  const navigate = useNavigate()

  return (

    <div className="PreviewContainer" onClick={() => navigate('/main')}>
      <div className="PreviewimageBox">
        <img src={props.src} alt='사진'></img>
      </div>
      <div className="titleBox">{props.title}</div>
    </div>
  )

}

export default BlogArticlePreview