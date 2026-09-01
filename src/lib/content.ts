import resumePt from '../../content/resume.pt.json';
import resumeEn from '../../content/resume.en.json';
import servicesFile from '../../content/services.json';
import skillsFile from '../../content/skills.json';
import {
  ResumeSchema,
  ServicesFileSchema,
  SkillsFileSchema,
  type Lang,
  type Resume,
  type Service,
  type SkillsFile,
  type UiStack,
} from './schemas';

const skillsData: SkillsFile = SkillsFileSchema.parse(skillsFile);
const services = ServicesFileSchema.parse(servicesFile).services;

function uiStackToStackGroups(uiStack: UiStack) {
  return {
    wordpress: uiStack.wordpress.items,
    code: uiStack.code.items,
    workflow: uiStack.workflow.items,
  };
}

function enrichResume(raw: unknown): Resume {
  const resume = ResumeSchema.parse(raw);
  return {
    ...resume,
    stackGroups: resume.stackGroups ?? uiStackToStackGroups(skillsData.uiStack),
    skillsDetailed: resume.skillsDetailed ?? skillsData.categories,
    alsoWorksWith: resume.alsoWorksWith ?? skillsData.alsoWorksWith,
  };
}

const resumes: Record<Lang, Resume> = {
  pt: enrichResume(resumePt),
  en: enrichResume(resumeEn),
};

export function getUiStack(): UiStack {
  return skillsData.uiStack;
}

export function getResume(lang: Lang = 'pt'): Resume {
  return resumes[lang];
}

export function getServices(): Service[] {
  return services;
}

