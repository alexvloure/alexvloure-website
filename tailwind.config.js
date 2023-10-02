/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      typography: (theme) => {
        return {
          DEFAULT: {
            css: {
              'code::before': {
                content: 'none',
              },
              'code::after': {
                content: 'none',
              },
              code: {
                padding: '0.2rem',
                backgroundColor: theme('colors.gray.500'),
                color: theme('colors.gray.100'),
                borderRadius: '0.4rem',
                fontWeight: '500',
                fontSize: '0.8rem',
              },
            },
          },
        };
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
