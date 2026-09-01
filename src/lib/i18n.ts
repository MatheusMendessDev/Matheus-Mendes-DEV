import type { Lang } from './schemas';

export const ui = {
  pt: {
    nav: {
      home: 'Início',
      contact: 'Contato',
    },
    hero: {
      cta: 'Falar sobre um projeto',
    },
    footer: {
      note: 'Matheus Mendes — soluções WordPress',
    },
    sections: {
      howIWorkWithAi: 'Um processo focado na solução',
      services: 'Serviços',
      skills: 'Stack',
      projects: 'Projetos',
      contact: 'Contato',
    },
    alsoWorksWith: 'Também trabalho com',
    switchLang: 'EN',
  },
  en: {
    nav: {
      home: 'Home',
      contact: 'Contact',
    },
    hero: {
      cta: 'Discuss a project',
    },
    footer: {
      note: 'Matheus Mendes — WordPress solutions',
    },
    sections: {
      howIWorkWithAi: 'A process built around the solution',
      services: 'Services',
      skills: 'Stack',
      projects: 'Projects',
      contact: 'Contact',
    },
    alsoWorksWith: 'Also works with',
    switchLang: 'PT',
  },
} as const;

export function t(lang: Lang) {
  return ui[lang];
}
