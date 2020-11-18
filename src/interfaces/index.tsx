
export interface IState {
  layerScreen: {
    openLayer: boolean,
    layer: string,
    activeProject: string
  },
  skills: {
    frontend: Array<string>
    backend: Array<string>
    dbs: Array<string>
    servers: Array<string>
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
  thumbImg : string,
  intro_description : string,
  description: string,
  basic_info: Array<any>
  period : string,
  video_url : string
}

