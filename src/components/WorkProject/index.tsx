import React from 'react';
// import './WorkProject.css';
import '../common.css';

const WorkProject = () => {
  return (
    <div style={{
      padding: '5%', margin: '5% 0', backgroundColor: '#fff',
      outline: '1px solid rgba(212,212,212)',
      // textAlign:'center' 
    }}>

      <div className="workProjectTitleBox">
        <h2>LG CLOI 로봇 프론트엔드</h2>
      </div>
      <div className="projectBox">

        {/* <projectImg image = "kb_qr.jpg" /> */}
        <div id="workProjectImgBox1" className="workProjectImgBox"/>
        <div className="descriptionBox">
          <p>LG전자 Cloi 길안내로봇 프론트엔드 개발</p>
          <p>- 개발환경 : ubuntu 데스크탑, cordova</p>
          <h2>담당파트</h2>
          <p>로봇스크린 화면 퍼블리싱</p>
          <p>사용자 인터랙티브 및 로봇 이벤트들에 대한 UI 동적 업데이트</p>
          <p>시설물 POI data 연동</p>
        </div>
      </div>
    </div>
  );
}

export default WorkProject;