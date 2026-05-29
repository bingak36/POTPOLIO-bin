export const PROJECT_THUMBNAILS = {
  p1: '/main-pro-no1.png',
  p3: '/picstory-img.png',
}

export const DEFAULT_PROJECTS = [
  {
    id: 'p1',
    category: '개인 프로젝트',
    title: 'TOCOBO CLONE',
    desc: 'TOCOBO 웹 사이트를 기반으로 한 테슬라 이미지를 사용한 웹사이트입니다.',
    actions: ['GitHub', 'Demo'],
    tags: ['Next.js'],
    gradient: 'linear-gradient(135deg, #1c283f, #8f2637)',
    link: '',
    thumbnail: PROJECT_THUMBNAILS.p1,
  },
  {
    id: 'p3',
    category: '개인 프로젝트',
    title: 'Picstory',
    desc: '로그인과 글쓰기가 가능한 Spring Boot 시연용 프로젝트 입니다.',
    actions: ['GitHub', 'Spring boot'],
    tags: ['Next.js'],
    gradient: 'linear-gradient(135deg, #341052, #8d6bff)',
    link: '',
    thumbnail: PROJECT_THUMBNAILS.p3,
  },
]

export const PROJECTS_TITLE = '주요 프로젝트'
export const PROJECT_LINK_PLACEHOLDER = '링크 준비중'
