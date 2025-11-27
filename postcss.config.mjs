// // removed TypeScript-only import because this is a .mjs JavaScript file

// const config = {
//   content: [
//     './pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './components/**/*.{js,ts,jsx,tsx,mdx}',
//     './app/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
//         'gradient-conic':
//           'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
//       },
//       colors: {
//         primary: '#1e40af', // Blue for UAE theme
//         secondary: '#f59e0b', // Amber accent
//       },
//     },
//   },
//   plugins: [],
//   darkMode: 'class', // Enable dark mode
// }
// export default config

const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
