import React from 'react';
// import './WorkProject.css';
import './WorkProjects.css';
import ROS2Project from './ROS2Project';
import KBProject from './KBProject';

const WorkProjects = () => {
  return (
    <>
        <ROS2Project />
        <KBProject />
    </>
  );
}

export default WorkProjects;