import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      black: '#000000',
      white: '#ffffff',
      'red-dark': '#813338',
      cyan: '#75cec8',
      purple: '#8e3c97',
      'green-dark': '#56ac4d',
      'blue-dark': '#2e2c9b',
      yellow: '#edf171',
      'brown-light': '#8e5029',
      'brown-dark': '#553800',
      'red-light': '#c46c71',
      'grey-dark': '#4a4a4a',
      'grey-medium': '#7b7b7b',
      'green-light': '#a9ff9f',
      'blue-light': '#706deb',
      'grey-light': '#b2b2b2',
    },
    fontFamily: {
      c64p: ["'C64 Pro Local'", ...fontFamily.sans],
      c64pm: ["'C64 Pro Mono Local'", ...fontFamily.mono],
    },
    fontSize: {
      px8: ['6pt', '8px'],
      px16: ['12pt', '16px'],
      px24: ['18pt', '24px'],
      px34: ['24pt', '32px'],
      px40: ['30pt', '40px'],
    },
    spacing: {
      '0': '0em',
      '1': '1em',
      '2': '2em',
      '3': '3em',
      '4': '4em',
      '5': '5em',
      '6': '6em',
      '15': '15em',
      '18': '18em',
      '20': '20em',
    },
  },
} satisfies Config;
