export const SECTION_HEADINGS = {
  about: {
    number: '01',
    label: 'ABOUT',
  },
  skills: {
    number: '02',
    label: 'SKILLS',
    title: '기술 스택',
  },
  projects: {
    number: '03',
    label: 'PROJECTS',
    title: '주요 프로젝트',
  },
  subProjects: {
    number: '04',
    label: 'SUB PROJECTS',
    title: '서브 프로젝트',
  },
  contact: {
    number: '05',
    label: 'CONTACT',
    title: '함께 만들어봐요',
    desc: '새로운 인연을 환영합니다🚀',
  },
}

export const getSectionEyebrow = ({ number, label }) => `${number} · ${label}`
