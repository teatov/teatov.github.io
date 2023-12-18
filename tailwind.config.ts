import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      white: '#F4F1DE',
      red: '#E07A5F',
      purple: '#1b1d2e',
      green: '#81B29A',
      yellow: '#F2CC8F',
    },
    fontFamily: {
      sans: ['Ubuntu', ...fontFamily.sans],
      mono: ['Ubuntu Mono', ...fontFamily.mono],
    },
  },
} satisfies Config;
