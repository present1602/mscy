
export interface IState {
  layerScreen: {
    openLayer: boolean,
    layer: string,
    activeProject: string
  },
  basicInfo : {
    skills: Array<string>,
    introduction: string
  },
  portfolio: Array<IProject>
}

export interface IAction {
  type: string,
  payload: any
}

export interface IProject {
  abbr: string,
  title : string,
  intro_description : string,
  description: string,
  period : string,
  stack : Array<string>
}
