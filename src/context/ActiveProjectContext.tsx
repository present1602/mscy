import React from 'react';
// import { IProject } from '../interfaces';

type IActiveLayer = {
  key: string,
  title : string,
  videoLink : string,
  active : false | string,
  images : Array<string>
}


const ActiveLayerContext = React.createContext<IActiveLayer | any>(null);

export default ActiveLayerContext;