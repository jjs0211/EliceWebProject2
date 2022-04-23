import React from "react";
import '../../css/main/MainBottom.css'
import { useNavigate, useParams } from "react-router-dom";

function MainBottom() {
  return (
    <div className="MainBottom">
      <div className="BottomBox1">
        <div className="BottomBox1-1">
          <div className="row1">커뮤니티</div>
          <div className="row2">사용자 <b>300만명</b></div>
          <div className="row3">다양한 건강관련 의견을 공유하세요</div>
          <div className="row4">빅데이터에 기반한 정보들을 공유하세요.</div>
          <div className="row5">다양한 정보를 아티클에서 확인하고</div>
          <div className="row6">자신의 입력정보를 바탕으로</div>
          <div className="row7">부족한 영양분을 확인해보세요.</div>
        </div>
      </div>
      <div className="BottomBox2">
        <div className="BottomBox2-1">
          <img className="imageBox" src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAxMjFfMjgz%2FMDAxNjExMTkxNTU5NzIx.CBV8yJr_AkbaoWzMiEwBX9Adpf7lPwNOguorvaEVMgUg.vKEheF-kWYKvyvaaW2ObNSz-UnjHTgjd2wQme1yMj24g.PNG.liman1239%2F%25B4%25D9%25C0%25CC%25BE%25EE%25C6%25AE%25B4%25C2_%25B3%25BB%25C0%25CF%25BA%25CE%25C5%25CD1.png&type=sc960_832" alt="다이어트" />
        </div>
      </div>
    </div>
  )
}

export default MainBottom