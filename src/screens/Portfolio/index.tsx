import React, { useState, useReducer } from 'react';
import './Portfolio.css';
import { RootContext } from '../../screens/Context';
import Project from '../../components/Project';
import WorkProject from '../../components/WorkProject';
import { IProject } from '../../interfaces';

console.log("Portfolio.tsx load")
const Portfolio = (): any => {
  console.log("Portfolio() load")
  const { state } = React.useContext(RootContext);
  const pfDataList = state.portfolio;

  console.log("in portfolio.js, state.portfolio : ", state.portfolio)
  return (
    <>
      <div id="portfolioWrap">
        <div className="portfolioTop">포트폴리오</div>
        {pfDataList.map((project: IProject) => {
            return (
              <Project {...project} key={project.abbr}/>
            );
          })
        }
      </div>
      <div id="workPortfolioWrap">
        <div className="portfolioTop">포트폴리오 work</div>
        <WorkProject />
      </div>

    </>
  )

}

export default Portfolio;