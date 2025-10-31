/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#121212',
        
        // 👇 요청하신 보라색 테마 추가
        'brand-purple': '#7E57C2',      // 기본 상태
        'brand-purple-dark': '#5E35B1', // 호버 상태
        'brand-purple-light': '#B39DDB',// 포커스 상태
      }
    },
  },
  plugins: [],
}