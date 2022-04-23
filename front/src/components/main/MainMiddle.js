import React from "react";
import '../../css/main/MainMiddle.css'
import { useNavigate, useParams } from "react-router-dom";

function MainMiddle () {
  return (
    <div className="MainMiddle">
      <div className="middleBox1">
        <div className="middleBox1-1">
          <div className="row1">빅데이터</div>
          <div className="row2">식품종류 <b>300개</b></div>
          <div className="row3">식품 영양분 정보를 한자리에 모아놨습니다.</div>
          <div className="row4">빅데이터에 기반한 정보들을 확인해보세요.</div>
          <div className="row5">다양한 정보를 아티클에서 확인하고</div>
          <div className="row6">자신의 입력정보를 바탕으로</div>
          <div className="row7">부족한 영양분을 확인해보세요.</div>
        </div>
      </div>
      <div className="middleBox2">
        <div className="middleBox2-1">
          <img className="imageBox" src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTA4MTNfMTk1%2FMDAxNTY1NjgzNDcyNTA5.NxGb8dAQSVuZgafN5x3DK1JBw4bEmvQagMuK0dwipakg.PyJ05gmosfBBeOlfD1mSreZHwKuO1UYAcckIcHI9GzUg.JPEG.boeun0917%2FF6753A78-BF33-4D25-8C2A-5CEA950F4772.jpg&type=sc960_832" alt="비상식량" />
        </div>
      </div>
    </div>
  )
}

export default MainMiddle
