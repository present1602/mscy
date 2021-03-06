import React, { useState, useReducer, useEffect } from 'react';
import './Portfolio.css';
import { RootContext } from '../../screens/Context';
import Project from '../../components/Project';
import WorkProjects from '../../components/WorkProjects';
import { IProject } from '../../interfaces';

console.log("Portfolio.tsx load")
const Portfolio = (): any => {
  console.log("Portfolio() load")
  const { state } = React.useContext(RootContext);
  const [pfData, setPfData] = useState([])
  
  useEffect(() => {
    const pfData = state.portfolio;  
    console.log("pfData : ", pfData);
    setPfData(pfData)

  }, [])
  // console.log("in portfolio.js, state.portfolio : ", state.portfolio)
  
  return (
    <>
      <div id="portfolioWrap">
        <div className="portfolioTop">포트폴리오</div>
        {pfData.map((project: IProject) => {
            return (
              <Project {...project} key={project.abbr}/>
            );
          })
        }
      </div>
      <div id="workPortfolioWrap">
        <div className="portfolioTop">
          포트폴리오 
          <span style={{ color: "gray",fontFamily: "monospace", fontStyle: "italic" }}>Work</span>
        </div>
        <WorkProjects />
      </div>

    </>
  )

}

export default Portfolio;