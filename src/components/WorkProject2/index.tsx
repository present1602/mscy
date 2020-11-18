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
        <h2>KB카드 QR관리시스템</h2>
      </div>
      <div className="projectBox">
        <div className="descriptionBox">
          <h2>담당파트</h2>
          <p className="roleTitle">관리자페이지</p>
          <p className="description">- QR가맹점통합관리자페이지 화면 기획, 디자인, DB설계, 개발</p>

          <p className="roleTitle">QR코드관리시스템</p>
          <p className="description">- QR코드 발급, 검증, 폐기, 조회 등 QR코드관리시스템 DB설계, 개발 및 관리자페이지 연동</p>

          <p className="languages">자바, jsp, 오라클</p>
        </div>
        <div id="workProjectImgBox2" className="workProjectImgBox"/>
      </div>
    </div>
  );
}

export default WorkProject;