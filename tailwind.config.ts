import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  experimental: {
    optimizeUniversalDefaults: true,
  },
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
    borderWidth: {
      DEFAULT: '1em',
      '0.0625': '0.0625em',
      '0.125': '0.125em',
      '0.5': '0.5em',
    },
    spacing: {
      '0': '0em',
      '0.125': '0.125em',
      '0.5': '0.5em',
      '1': '1em',
      '2': '2em',
      '3': '3em',
      '4': '4em',
      '5': '5em',
      '6': '6em',
      '7': '7em',
      '8': '8em',
      '10': '10em',
      '14': '14em',
      '15': '15em',
      '17': '17em',
      '18': '18em',
      '20': '20em',
      '21': '21em',
      '22': '22em',
      '26': '26em',
      '27': '27em',
      '40': '40em',
    },
    extend: {
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
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('readable', '.readable &');
    }),
  ],
} satisfies Config;
