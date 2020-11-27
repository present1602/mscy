import React from 'react';
// import './WorkProject.css';
// import '../common.css';

const KBProject = () => {
  return (
    <div style={{
      padding: '5%', margin: '5% 0', backgroundColor: '#fff',
      outline: '1px solid rgba(212,212,212)',
      // textAlign:'center' 
    }}>

      <div className="workProjectTitleBox">
        <h2>KB카드 QR관리시스템</h2>
      </div>
      <div className="projectBox">
        <div className="descriptionBox">
          {/* <p>KB카드 QR코드관리시스템구축</p> */}
          <p>기간 : 2020.1~2020.5</p>
          <p className="languages">자바, jsp, 오라클</p>

          <div>
            <p className="roleTop">담당파트</p>
            
            <div className="roleSubBox">
              <p className="roleMainText">· 관리자페이지</p>
              <p className="subDescription">- 구축요건정의서에 따라 QR가맹점통합관리자페이지 기획 및 화면설계서 작성, DB설계</p>
              <p className="subDescription">- 관리자페이지 프론트엔드, 백엔드 개발</p>
            </div>
            <div className="roleSubBox">
              <p className="roleMainText">· QR코드관리시스템</p>
              <p className="subDescription">- 구축요건정의서, EMV QR코드표준규격 및 KB QR코드규격서에 따라 QR코드 관련 DB설계</p>
              <p className="subDescription">- 고정형과 변동형 QR코드의 발급, 검증, 폐기, 조회 등 QR코드 관리시스템 개발 및 관리자페이지 연동</p>
            </div>
          </div>

        </div>
        <div id="workProjectImgBox2" className="workProjectImgBox"/>
      </div>
    </div>
  );
}

export default KBProject;