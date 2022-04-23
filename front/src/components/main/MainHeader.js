import React from "react";
import '../../css/main/MainHeader.css'
import { useNavigate, useParams } from "react-router-dom";

function MainHeader() {
  return (
    <div className="MainHeader">
      <div className="HeaderTitle">Daily Health</div>
      <div className="HeaderTitle2">빅데이터 기반으로 한 식품 영양소와 관련 기사 </div>
      {/* <div className="HeaderTitle3">데일리 헬스</div> */}
      <div className="imageBox">
        <img className="image1" 
          src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAzMjlfMTc3%2FMDAxNjQ4NDg5ODQxMDEx.iGzbGfIygbDnGY6ZFPpL4fWmrvOMmnfnujyynyWKOqIg.FZS6nnR7NFceNZayGYOfNIi1h855gYIsIDCTJf64xQ0g.PNG.yoyo361%2Fimage.png&type=sc960_832" alt="토마토" />
        
        <img className="image2" 
          src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAzMTJfMTgw%2FMDAxNjQ3MDcxNjMxNDM5.wEqavm48S1bg6r44luBdNWXBOL0oL8qFT6RIYW7PUqAg.b-Fim_o_C13NwlN4RfwaX65p1VXFzacnXJ44WPgiFn8g.JPEG.hello30509%2F%25C1%25A6%25B8%25F1%25C0%25BB_%25C0%25D4%25B7%25C2%25C7%25CF%25BC%25BC%25BF%25E4_5.jpg&type=sc960_832" alt="아몬드" />
        
        <img className="image3" 
          src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAxMjJfOTcg%2FMDAxNjExMzE3MjYyMzM4.gFhZt0SjD5Vp5pLaIMHykcxuYbrnD118vPoaXdM8A7og.1cDwLlSF-SgqNtdW55HohttxNcBbmgLVURhyCDqmJiog.PNG.kdy5474%2F2.PNG&type=sc960_832" alt="연어" />   
      </div>
      <button className="linkButton">블로그 링크 보러가기</button>
    </div>
    
    )
}

export default MainHeader