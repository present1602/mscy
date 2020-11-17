import React from 'react';
import './Skills.css';


const Skills = () => {

  const frs = ['css', 'javascript', 'react', 'react-native', 'typescript']
  const bks = ['python', 'nodejs', 'java']
  const dbs = ['oracle', 'mysql', 'mongodb']
  const servers = ['aws', 'ubuntu', 'docker']

  return (
    <div id='skillsWrap'>
      <div className="skillsTop">프로그래밍 스킬</div>
      <div style={{ padding: '0 5%' }}>
        <div style={{ padding: '30px 10px'}}>
          <p className="langGroupTitle">Frontend</p>
          <div className="gridbox-5col">
            { frs.map(el => {
              return ( 
                <div className="proLangImgBox" key={Math.random()}>
                  <img src={ require('../../assets/images/langlogo/frontend/' + el + '.png') }/>
                </div>
              );
            })}
          </div>

          <p className="langGroupTitle">Backend</p>
          <div className="gridbox-3col">
            { bks.map(el => {
              return ( 
                <div className="proLangImgBox" key={Math.random()}>
                  <img src={ require('../../assets/images/langlogo/backend/' + el + '.png') }/>
                </div>
              );
            })}
          </div>

          <p className="langGroupTitle">Database</p>
          <div className="gridbox-3col">
            { dbs.map(el => {
              return ( 
                <div className="proLangImgBox" key={Math.random()}>
                  <img src={ require('../../assets/images/langlogo/db/' + el + '.png') }/>
                </div>
              );
            })}
          </div>

          <p className="langGroupTitle">Server</p>
          <div className="gridbox-3col">
            { servers.map(el => {
              return ( 
                <div className="proLangImgBox" key={Math.random()}>
                  <img src={ require('../../assets/images/langlogo/server/' + el + '.png') }/>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Skills;