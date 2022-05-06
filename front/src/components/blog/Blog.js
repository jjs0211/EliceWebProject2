import React from 'react'
import '../../css/blog/Blog.css'

import BlogHeader from './BlogHeader';
import BlogMiddleArticle from './BlogMiddleArticle';
import BlogTail from './BlogTail';

function Blog() {
  return (
    <div>
      <div className="blogHeaderContainer">
        <BlogHeader />
      </div>
      <div className="blogMiddleContainer">
        <div className='blogMiddleInner'>
          <BlogMiddleArticle />
        </div>
      </div>
      <div className="blogTailContainer">
        <BlogTail />
      </div>
    </div>

  )

}

export default Blog