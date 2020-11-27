import React, { useReducer } from 'react';
import { IState, IAction } from '../interfaces';

console.log("Context.tsx load")

const initialState: IState = {
  skills: {
      frontend : ['css', 'javascript', 'react', 'react-native', 'typescript'],
      backend : ['python', 'nodejs', 'java'],
      dbs : ['oracle', 'mysql', 'mongodb'],
      servers : ['aws', 'ubuntu', 'docker'],
  },

  portfolio: [
      { 
        abbr: 'djmk',
        title : '장고마켓',
        thumbImg : 'thumb_djmk.png',
        intro_description : '패션상품 오픈마켓',
        description: '· Django\n· 회원정보, 상품정보 CRUD\n · 상품문의 & 답글 \n· 카트에 상품담기\n· 배포 : heroku, AWS S3',
        basic_info : [
          {'name': '기간', 'value': '2019.5'},
          {'name': '형태', 'value': '웹(반응형)'},
          {'name': 'Git', 'value': 'github.com/present1602/djmk'},
        ],    
        period : '2019.5',
        video_url : 'https://mspro20201115.s3.ap-northeast-2.amazonaws.com/ms_video/djmk_video.mp4',
      },
      { 
        abbr: 'tzone',
        title : '택시동승메이트찾기',
        thumbImg : 'thumb_tzone.png',
        intro_description : '출발지와 목적지가 유사한 승객 간 동승객매칭서비스',
        description: '· Nodejs & Monbodb\n· Single Page App - History api, ajax \n· 비밀번호암호화 : bcrypt 모듈 \n· 채팅저장 : Monbodb, WebDatabase\n· 배포 : AWS, nginx(ssl 적용) ',
        basic_info : [
          {'name': '기간', 'value': '2018.7~9'},
          {'name': '형태', 'value': '모바일웹(SPA)'},
          {'name': 'Git', 'value': 'github.com/present1602/tzone'},
        ],    
        period : '2018.7~9',
        video_url : 'https://mspro20201115.s3.ap-northeast-2.amazonaws.com/ms_video/tzone_video.mp4',
      },
      { 
        abbr: 'tmmk',
        title : 'Time Market',
        thumbImg : 'thumb_tmmk.png',
        intro_description : 
          '· 위치기반 심부름 중개서비스 \n · 청소, 심부름 등 간단한 노동을 필요로 하는 요청자와 이를 도와줄 헬퍼들을 중개\n· 참고 앱 : 애니맨',
        description: '· Nodejs & Monbodb\n· 비밀번호암호화 : crypto 모듈\n· 검색 : 카테고리 검색, 내주변 검색, 지도상에서 범위 설정 검색\n· 배포 : AWS, docker, nginx(ssl 적용)',
        basic_info : [
          {'name': '기간', 'value': '2018.2~2018.5'},
          {'name': '형태', 'value': '모바일웹'},
          {'name': 'Git', 'value': 'github.com/present1602/tmmk'},
        ],
        period : '2018.9',
        video_url : 'https://mspro20201115.s3.ap-northeast-2.amazonaws.com/ms_video/tmmk_video.mp4',
      },
  ],
  layerScreen: {
    openLayer: false,
    layer: '',
    activeProject: ''
  },
}

function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    // case 'FETCH_BASIC_DATA':
    //   return {...state, basicInfo: action.payload }
    // case 'FETCH_PORTFOLIO_DATA':
    //   console.log("in setcontentdata action.payload : ", action.payload);
    //   return {...state, portfolio: action.payload }
    case 'HANDLE_LAYER':
      return {...state, layerScreen: action.payload }  
    default:
      return state;
  }
}

export const RootContext = React.createContext<IState | any>(initialState);

export function StoreProvider(props: any): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <RootContext.Provider value={{ state, dispatch }}>{props.children}</RootContext.Provider>
} 
