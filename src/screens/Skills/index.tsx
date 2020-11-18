import React, { useEffect, useState } from 'react';
import './Skills.css';
import { RootContext } from '../Context';

const Skills = () => {

  const { state } = React.useContext(RootContext);
  
  const [skills, setSkills] = useState({
    frontend : [],
    backend : [],
    dbs : [],
    servers : [],
  })

  useEffect(() => {
    const skillsData = state.skills
    console.log("skillsData : ",  skillsData)
    setSkills(skillsData);
    // const skills = state.skills.frontend
    // const bks = state.skills.backend
    // const dbs = state.skills.dbs
    // const servers = state.skills.servers
  }, [])


  return (
    <div id='skillsWrap'>
      <div className="skillsTop">프로그래밍 스킬</div>
      <div style={{ padding: '0 5%' }}>
        <div style={{ padding: '30px 10px'}}>
          <p className="langGroupTitle">Frontend</p>
          <div className="gridbox-5col">
            { skills.frontend.map( (el: string) => {
              return ( 
                <div className="proLangImgBox" key={Math.random()}>
                  <img src={ require('../../assets/images/langlogo/frontend/' + el + '.png') }/>
                </div>
              );
            })}
          </div>

          <p className="langGroupTitle">Backend</p>
          <div className="gridbox-3col">
            { skills.backend.map( (el: string) => {
              return ( 
                <div className="proLangImgBox" key={Math.random()}>
                  <img src={ require('../../assets/images/langlogo/backend/' + el + '.png') }/>
                </div>
              );
            })}
          </div>

          <p className="langGroupTitle">Database</p>
          <div className="gridbox-3col">
            { skills.dbs.map( (el: string)=> {
              return ( 
                <div className="proLangImgBox" key={Math.random()}>
                  <img src={ require('../../assets/images/langlogo/db/' + el + '.png') }/>
                </div>
              );
            })}
          </div>

          <p className="langGroupTitle">Server</p>
          <div className="gridbox-3col">
            { skills.servers.map( (el: string) => {
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