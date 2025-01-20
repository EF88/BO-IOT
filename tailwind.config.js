export const corePlugins = {
  preflight: false,
};
export const darkMode = 'class';
export const mode = 'jit';
export const content = { relative: true, files: ['./src/**/*.{js,jsx,ts,tsx}'] };
export const theme = {
  extend: {
    colors: {
      'vodafone-red': '#e60000',
      'dark-vodafone-red': '#ea1a1a',
      'vodafone-grey': '#4a4d4e',
      'dark-vodafone-grey': '#25282b',
      'dove-grey': '#666666',
      'aluminium': '#ebebeb',
      'mineshaft': '#333333',
      'white-two': '#e6e6e6',
      'silver-chalice': '#cccccc',
      'white-smoke': '#F9F9F9',
      'info': '#007E92',
      'lemon-yellow': '#FEC800',
      'fresh-orange': '#eb9700',
      'dark-red': '#bd0000',
      'darker-red': '#f06666',
      'success': '#428200',
      'spring-green': '#a8b400',
      'aqua-blue': '#00b0ca',
      'dark-aqua-blue': '#00D5F5',
      'caribbean-splash': '#00697c',
      'munsell-blue': '#0096AD',
      'dusty-grey': '#999999',
      'platinum': '#afafaf',
      'salmon': '#fef2f2',
    },
    fontFamily: {
      'VodafoneRg': ["'VodafoneRg'", 'sans-serif'],
      'VodafoneRg-Bold': ["'VodafoneRg-Bold'", 'sans-serif'],
    },
    fontSize: {
      xs: '0.625rem',
      sm: '0.75rem',
      base: '1rem',
      large: '1.25rem',
      xl: '1.5rem',
      '2xl': '1.75em',
      '3xl': '2.5rem',
    },
    brightness: {
      100: '1',
      75: '.75',
      60: '.6',
    },
    padding: {
      'vf-1': '0.20rem',
    },
    lineHeight: {
      16: '16px',
      18: '18px',
      20: '20px',
      22: '22px',
      24: '24px',
      26: '26px',
      28: '28px',
      32: '32px',
      36: '36px',
      40: '40px',
      48: '48px',
      64: '64px',
    },
    minWidth: {
      52: '13rem',
      56: '14rem',
    },
    boxShadow: {
      bottom: '0 4px 2px -2px rgb(0 0 0 / 0.1)',
      'center-xs': '0 0 2px 0 rgb(0 0 0 / 0.05)',
      'center-sm': '0 0 4px 0 rgb(0 0 0 / 0.56)',
      center: '0 0 3px 0 rgb(0 0 0 / 0.1), 0 0 2px 0 rgb(0 0 0 / 0.06)',
      'center-md': '0 0 6px -1px rgb(0 0 0 / 0.1), 0 0 4px -1px rgb(0 0 0 / 0.06)',
      'center-lg': '0 0 15px -3px rgb(0 0 0 / 0.1), 0 0 6px -2px rgb(0 0 0 / 0.05)',
      'center-xl': '0 0 25px -5px rgb(0 0 0 / 0.1), 0 0 10px -5px rgb(0 0 0 / 0.04)',
      right: '2px 0 4px -2px rgb(0 0 0 / 0.75)',
      left: '-2px 0 4px -2px rgb(0 0 0 / 0.75)',
    },
    animation: {
      'fade-in': 'fadeIn 0.75s ease-in',
      'fade-out': 'fadeout 0.75s ease-out',
    },
    keyframes: {
      fadeIn: {
        '0%': { transform: 'translateX(-30%)' },
        '100%': { transform: 'translateX(0)' },
      },
      fadeOut: {
        '100%': { transform: 'translateX(-30%)' },
        '0%': { transform: 'translateX(0)' },
      },
    },
  },
};
