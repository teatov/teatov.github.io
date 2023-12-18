import { github, socialLink, twitter, vk } from './social';
import imgCookery from '@assets/images/cookery.png';
import imgGeoproj from '@assets/images/geoproj.png';
import imgUniver from '@assets/images/univer.png';

export const socialLinks = [
  socialLink(github, 'teatov'),
  socialLink(twitter, 'ateatov'),
  socialLink(vk, 'ateatov'),
];

export type Project = {
  title: string;
  image: ImageMetadata;
  url: string;
};

export const projects: Project[] = [
  {
    title: "My Univer: FEFU's personal account service.",
    url: 'https://univer.dvfu.ru/',
    image: imgUniver,
  },
  {
    title:
      'A geodesy survey card generator/database for FEFU. Made as a study project.',
    url: 'https://github.com/teatov/geodesy-project',
    image: imgGeoproj,
  },
  {
    title:
      'Cookery: a website for sharing food recipes. Made as a study project.',
    url: 'https://github.com/teatov/cookery',
    image: imgCookery,
  },
];

export type Skill = {
  name: string;
  love?: boolean;
};

export type SkillSet = {
  title: string;
  icon: string;
  skills: Skill[];
};

export const skills: SkillSet[] = [
  {
    title: 'languages',
    icon: 'braces',
    skills: [
      { name: 'JavaScript' },
      { name: 'TypeScript', love: true },
      { name: 'PHP' },
      { name: 'Python' },
      { name: 'C#' },
      { name: 'C/C++' },
    ],
  },
  {
    title: 'frameworks',
    icon: 'frame',
    skills: [
      { name: 'Tailwind CSS' },
      { name: 'Svelte + SvelteKit', love: true },
      { name: 'Yii' },
    ],
  },
  {
    title: 'obvious',
    icon: 'baguette',
    skills: [
      { name: 'HTML + CSS' },
      { name: 'Git'},
      { name: 'SQL' },
    ],
  },
  {
    title: 'misc',
    icon: 'dots-circle-horizontal',
    skills: [
      { name: 'Unity' },
      { name: 'Cinema 4D'},
      { name: 'LaTeX', love: true },
      { name: 'Figma'},
    ],
  },
];

export const email = {
  user: 'hello',
  domain: 'teatov.com'
}