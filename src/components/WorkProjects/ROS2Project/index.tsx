import React from 'react';
// import './WorkProject.css';

const WorkProject = () => {
  return (
    <>
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
            {/* <p>LG전자 Cloi 길안내로봇 프론트엔드 개발</p> */}
            <p>기간 : 2019.8~2019.11</p>
            <p>React, Redux, styled-componnent</p>
            <p className="descriptionLine">개발환경 : ubuntu 데스크탑, cordova</p>

            <div>
              <p className="roleTop">담당파트</p>
              <p className="roleMainText"> · 로봇스크린 화면개발
              사용자 인터랙티브 및 로봇 이벤트들에 대한 UI 동적 업데이트</p>
              <p className="roleMainText"> · 시설물 POI data 연동</p>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkProject;