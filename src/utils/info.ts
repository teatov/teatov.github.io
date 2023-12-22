import { github, socialLink, twitter, vk } from './social';
import imgCookery from '@assets/images/cookery.png';
import imgGeoproj from '@assets/images/geoproj.png';
import imgUniver from '@assets/images/univer.png';
import imgQuesta from '@assets/images/questa.png';
import type { i18nKey } from '@i18n/utils';

export const pageTitle: i18nKey = 'page.title';

export const socialLinks = [
  socialLink(github, 'teatov'),
  socialLink(twitter, 'ateatov'),
  socialLink(vk, 'ateatov'),
];

export const email = {
  user: 'hlebpoimenigleb',
  domain: 'gmail.com',
};

export type Project = {
  title: i18nKey;
  image: ImageMetadata;
  alt: i18nKey;
  url: string;
};

export const projects: Project[] = [
  {
    title: 'project1.title',
    url: 'https://univer.dvfu.ru/',
    image: imgUniver,
    alt: 'project1.alt',
  },
  {
    title: 'project3.title',
    url: 'https://github.com/teatov/cookery',
    image: imgCookery,
    alt: 'project3.alt',
  },
  {
    title: 'project4.title',
    url: 'https://github.com/teatov/questa',
    image: imgQuesta,
    alt: 'project4.alt',
  },
  {
    title: 'project2.title',
    url: 'https://github.com/teatov/geodesy-project',
    image: imgGeoproj,
    alt: 'project2.alt',
  },
];

export type Skill = {
  name: string;
  love?: boolean;
};

export type SkillSet = {
  title: i18nKey;
  icon: string;
  skills: Skill[];
};

export const skills: SkillSet[] = [
  {
    title: 'skill1.title',
    icon: 'braces',
    skills: [
      { name: 'TypeScript', love: true },
      { name: 'PHP' },
      { name: 'Rust', love: true },
      { name: 'Python' },
      { name: 'Java' },
      { name: 'C#' },
      { name: 'C/C++' },
    ],
  },
  {
    title: 'skill2.title',
    icon: 'frame',
    skills: [
      { name: 'Svelte + SvelteKit', love: true },
      { name: 'Vue.js' },
      { name: 'Astro' },
      { name: 'jQuery' },
      { name: 'Yii2' },
      { name: 'Tailwind CSS' },
    ],
  },
  {
    title: 'skill3.title',
    icon: 'baguette',
    skills: [
      { name: 'HTML + CSS' },
      { name: 'Git' },
      { name: 'SQL' },
      { name: 'Docker' },
    ],
  },
  {
    title: 'skill4.title',
    icon: 'dots-circle-horizontal',
    skills: [
      { name: 'Linux' },
      { name: 'Figma' },
      { name: 'LaTeX', love: true },
      { name: 'Unity' },
      { name: 'Cinema 4D' },
    ],
  },
];

export type Experience = {
  title: i18nKey;
  job: i18nKey;
  timeSpan: i18nKey;
  description: i18nKey;
  bullets?: i18nKey[];
};

export const experiences: Experience[] = [
  {
    title: 'experience1.title',
    job: 'experience1.job',
    timeSpan: 'experience1.timeSpan',
    description: 'experience1.description',
    bullets: [
      'experience1.bullet1',
      'experience1.bullet2',
      'experience1.bullet3',
    ],
  },
];

export type Education = {
  university: i18nKey;
  title: i18nKey;
  timeSpan: string;
  description: i18nKey;
};

export const education: Education = {
  university: 'education.university',
  title: 'education.title',
  timeSpan: '2021 - 2026...',
  description: 'education.description',
};
