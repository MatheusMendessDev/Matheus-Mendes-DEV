import { z } from 'zod';

export const LangSchema = z.enum(['pt', 'en']);
export type Lang = z.infer<typeof LangSchema>;

export const AvailabilitySchema = z.object({
  available: z.boolean(),
  status: z.string(),
  nextWindow: z.string(),
  timezone: z.string(),
});

export const ExperienceSchema = z.object({
  company: z.string(),
  role: z.string(),
  period: z.string(),
  highlights: z.array(z.string()),
});

/** Projeto de cliente. Sem nome nem URL do cliente: os cases são anônimos por confidencialidade. */
export const ProjectSchema = z.object({
  /** Segmento do cliente, ex.: "Fintech · Meios de pagamento". */
  segment: z.string().optional(),
  name: z.string(),
  description: z.string(),
  highlights: z.array(z.string()).default([]),
  tags: z.array(z.string()).default([]),
});

export const LinksSchema = z.object({
  website: z.string(),
  email: z.string(),
  linkedin: z.string(),
  github: z.string(),
  whatsapp: z.string(),
});

export const StackGroupsSchema = z.object({
  wordpress: z.array(z.string()),
  code: z.array(z.string()),
  workflow: z.array(z.string()),
});

export const StackGroupLabelsSchema = z.object({
  pt: z.string(),
  en: z.string(),
});

export const LabeledStackGroupSchema = z.object({
  label: StackGroupLabelsSchema,
  items: z.array(z.string()),
});

export const UiStackSchema = z.object({
  wordpress: LabeledStackGroupSchema,
  code: LabeledStackGroupSchema,
  workflow: LabeledStackGroupSchema,
});

export const SkillLevelSchema = z.enum(['strong', 'intermediate', 'basic']);

export const SkillCategorySchema = z.object({
  strong: z.array(z.string()),
  intermediate: z.array(z.string()),
  basic: z.array(z.string()),
});

export const SkillsDetailedSchema = z.record(z.string(), SkillCategorySchema);

export const PortfolioPositioningSchema = z.object({
  primary_role: z.string(),
  specialization: z.array(z.string()),
  supporting_skills: z.array(z.string()),
});

export const SkillsFileSchema = z.object({
  portfolio_positioning: PortfolioPositioningSchema,
  categories: SkillsDetailedSchema,
  uiStack: UiStackSchema,
  alsoWorksWith: z.array(z.string()),
});

export type SkillsFile = z.infer<typeof SkillsFileSchema>;
export type SkillsDetailed = z.infer<typeof SkillsDetailedSchema>;
export type UiStack = z.infer<typeof UiStackSchema>;

export const ResumeSchema = z.object({
  lang: LangSchema,
  name: z.string(),
  title: z.string(),
  tagline: z.string(),
  summaryHuman: z.string(),
  summaryMachine: z.string(),
  howIWorkWithAi: z.array(z.string()),
  availability: AvailabilitySchema,
  skills: z.array(z.string()),
  stackGroups: StackGroupsSchema.optional(),
  skillsDetailed: SkillsDetailedSchema.optional(),
  alsoWorksWith: z.array(z.string()).optional(),
  experience: z.array(ExperienceSchema),
  projects: z.array(ProjectSchema),
  links: LinksSchema,
});

export type Resume = z.infer<typeof ResumeSchema>;

export const ServiceSchema = z.object({
  id: z.string(),
  name: z.object({
    pt: z.string(),
    en: z.string(),
  }),
  pitch: z.object({
    pt: z.string(),
    en: z.string(),
  }),
  deliverable: z.object({
    pt: z.string(),
    en: z.string(),
  }),
});

export const ServicesFileSchema = z.object({
  services: z.array(ServiceSchema),
});

export type Service = z.infer<typeof ServiceSchema>;
