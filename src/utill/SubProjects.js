export const DEFAULT_SUB_PROJECTS = [
  {
    id: 'sp1',
    icon: '💬',
    title: '끝말잇기 게임',
    desc: '입력값 검증과 상태 갱신 흐름을 익히기 위해 만든 미니 단어 게임. 마지막 글자 매칭 로직과 즉각적인 피드백 UI로 React의 단방향 데이터 흐름을 체득했습니다.',
    tags: ['React', 'Vite', 'JavaScript', 'SCSS', 'ESLint'],
  },
  {
    id: 'sp2',
    icon: '⏰',
    title: '스톱워치 타이머',
    desc: '시작·일시정지·초기화 동작을 갖춘 타이머 앱. setInterval과 useRef로 타이머 ID를 관리하고 useEffect로 클린업을 보장해 정확한 1초 단위 측정을 구현했습니다.',
    tags: ['React', 'Vite', 'JavaScript', 'SCSS'],
  },
  {
    id: 'sp3',
    icon: '🧭',
    title: '멀티 페이지 SPA',
    desc: '홈·소개·회사·게시판으로 구성된 라우팅 실습 프로젝트. React Router의 동적 경로와 중첩 라우트, 컴포넌트 분리 패턴을 적용했고 Swiper 슬라이더로 메인 비주얼을 구성했습니다.',
    tags: ['React', 'Vite', 'React Router DOM', 'Swiper', 'SCSS'],
  },
  {
    id: 'sp4',
    icon: '🌤️',
    title: '날씨 대시보드',
    desc: '도시명을 입력하면 OpenWeather API로 좌표를 받아 현재 기온·습도·아이콘을 보여주는 웹 앱. Axios 비동기 요청과 에러 처리, 날씨 코드별 동적 배경 전환을 다뤘습니다.',
    tags: ['React', 'Vite', 'OpenWeather API', 'Axios', 'SCSS'],
  },
  {
    id: 'sp5',
    icon: '📶',
    title: '공공 WiFi 지도',
    desc: '카카오맵 SDK 위에 공공 와이파이 위치 데이터를 시각화한 지도 서비스. 검색 필터·정보창·즐겨찾기를 Context API와 커스텀 훅으로 구조화하고 localStorage로 영속화했습니다.',
    tags: ['React 19', 'Vite', 'Kakao Maps SDK', 'Tailwind CSS', 'React Router'],
  },
  {
    id: 'sp6',
    icon: '📖',
    title: '감정 일기장',
    desc: '날짜별 감정과 일기를 기록하는 SPA. Context API + useReducer로 전역 상태를 정리하고 작성·수정·삭제·정렬, localStorage 영속화까지 CRUD 흐름을 처음부터 끝까지 구현했습니다.',
    tags: ['React', 'Vite', 'Context API', 'useReducer', 'localStorage'],
  },
  {
    id: 'sp7',
    icon: '📋',
    title: 'Todo List',
    desc: '추가·완료 토글·삭제·검색 필터링이 가능한 할 일 관리 앱. useState로 목록 상태를 관리하고 useRef로 입력 포커스와 ID를 다루며 React 기본기를 다졌습니다.',
    tags: ['React', 'Vite', 'JavaScript', 'CSS'],
  },
  {
    id: 'sp8',
    icon: '🚗',
    title: 'TOCOBO × TESLA 클론',
    desc: 'TOCOBO 사이트 구조를 기반으로 TESLA 비주얼을 입혀 재구성한 반응형 클론 프로젝트. Swiper 슬라이드와 AOS 스크롤 애니메이션으로 인터랙션을 강화하고 컴포넌트 단위로 화면을 모듈화했습니다.',
    tags: ['React', 'Vite', 'SCSS', 'Swiper', 'AOS', 'Vercel'],
  },
]

export const SUB_PROJECTS_HEADER = {
  eyebrow: '04 · SUB PROJECTS',
  title: '서브 프로젝트',
  desc: '',
}

export const SUB_PROJECT_LINK_PLACEHOLDER = '링크 준비중'
