const portfolioData = [
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
    video_url : 'https://mspro20201115.s3.ap-northeast-2.amazonaws.com/ms_video/djmk_video.mov',
  },
  { 
    abbr: 'tzone',
    title : 'TZONE',
    thumbImg : 'thumb_tzone.png',
    intro_description : '택시동승메이트찾기',
    description: '· 출발지와 목적지가 유사한 승객 간 동승객매칭서비스',
    basic_info : [
      {'name': '기간', 'value': '2018.7~9'},
      {'name': '형태', 'value': '모바일웹(SPA)'},
      {'name': 'Git', 'value': 'github.com/present1602/tzone'},
    ],    
    video_url : 'https://mspro20201115.s3.ap-northeast-2.amazonaws.com/ms_video/tzone_video.mov',
  },
  { 
    abbr: 'tmmk',
    title : 'Time Market',
    thumbImg : 'thumb_tmmk.png',
    intro_description : 
      '· 위치기반 심부름 중개서비스 \n · 청소, 심부름 등 간단한 노동을 필요로 하는 요청자와 이를 도와줄 헬퍼들을 중개\n· 참고 앱 : 애니맨',
    description: '· 토큰기반인증\n· 채팅 : socket.io\n· 비밀번호암호화: crypto 모듈\n· 검색 : 카테고리 검색, 내주변 검색, 지도상에서 범위 설정 검색\n· 배포 : AWS, docker, nginx(ssl 적용)',
    basic_info : [
      {'name': '기간', 'value': '2018.2~2018.5'},
      {'name': '형태', 'value': '모바일웹'},
      {'name': 'Git', 'value': 'github.com/present1602/tmmk'},
    ],
    period : '2018.9',
    video_url : 'https://mspro20201115.s3.ap-northeast-2.amazonaws.com/ms_video/tmmk_video.mov',
  },
  
]

const basicData = {
skills : ["css", "javascript", "react"],
introduction : "hihihi cyworld"
}

export { portfolioData, basicData };



