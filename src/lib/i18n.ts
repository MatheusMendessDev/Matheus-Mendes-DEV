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
      note: 'Matheus Mendes — engenharia de software',
    },
    sections: {
      howIWorkWithAi: 'Um processo focado na solução',
      services: 'Serviços',
      skills: 'Stack',
      projects: 'Projetos',
      contact: 'Contato',
    },
    alsoWorksWith: 'Também trabalho com',
    projects: {
      eyebrow: 'Cases selecionados',
      intro: 'Alguns projetos recentes. Nomes e links dos clientes ficam de fora por confidencialidade.',
      confidential: 'Cliente confidencial',
    },
    contact: {
      title: 'Vamos tirar seu projeto do papel?',
      text: 'Conte o que você precisa. Respondo em até 24h.',
    },
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
      note: 'Matheus Mendes — software engineering',
    },
    sections: {
      howIWorkWithAi: 'A process built around the solution',
      services: 'Services',
      skills: 'Stack',
      projects: 'Projects',
      contact: 'Contact',
    },
    alsoWorksWith: 'Also works with',
    projects: {
      eyebrow: 'Selected work',
      intro: 'A few recent projects. Client names and links are left out for confidentiality.',
      confidential: 'Confidential client',
    },
    contact: {
      title: 'Ready to get your project off the ground?',
      text: 'Tell me what you need. I reply within 24h.',
    },
    switchLang: 'PT',
  },
} as const;

export function t(lang: Lang) {
  return ui[lang];
}
