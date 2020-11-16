import React, { useReducer } from 'react';
import { IState, IAction } from '../interfaces';

const initialState: IState = {
  basicInfo: {
    skills: [],
    introduction : '',
  },
  portfolio: [],
  layerScreen: {
    openLayer: false,
    layer: '',
    activeProject: ''
  },
}

function setContentData(state: IState, action: IAction): IState {
  switch (action.type) {
    case 'FETCH_BASIC_DATA':
      return {...state, basicInfo: action.payload }
    case 'FETCH_PORTFOLIO_DATA':
      console.log("in setcontentdata action.payload : ", action.payload);
      return {...state, portfolio: action.payload }
    case 'HANDLE_LAYER':
      return {...state, layerScreen: action.payload }  
    default:
      return state;
  }
}

export const RootContext = React.createContext<IState | any>(initialState);

export function StoreProvider(props: any): JSX.Element {
  const [state, dispatch] = useReducer(setContentData, initialState);

  return <RootContext.Provider value={{ state, dispatch }}>{props.children}</RootContext.Provider>
} 
