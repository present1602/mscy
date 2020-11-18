import React from 'react';
import './WorkProject.css';


const WorkProject = () => {
  return (
    <div style={{
      padding: '5%', margin: '5% 0', backgroundColor: '#fff',
      outline: '1px solid rgba(212,212,212)',
      // textAlign:'center' 
    }}>
      work project box
      <div className="projectBox">
        <div>1</div>
        <div>2</div>
      </div>
      <div className="projectBox">
        <div>3</div>
        <div>4</div>
      </div>
    </div>
  );
}

export default WorkProject;