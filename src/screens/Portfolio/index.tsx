import React, { useState, useReducer } from 'react';
import './Portfolio.css';
import { RootContext } from '../../screens/Context';
import Project from '../../components/Project';
import { IProject } from '../../interfaces';

const Portfolio = (): any => {
  const { state } = React.useContext(RootContext);
  const pfDataList = state.portfolio;

  return (
    <div id="portfolioWrap">
      <div className="portfolioTop">포트폴리오</div>
      {pfDataList.map((project: IProject) => {
          return (
            <Project {...project} key={project.abbr}/>
          );
        })
      }
    </div>
  )

}

export default Portfolio;