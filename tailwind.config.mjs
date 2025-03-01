/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'deep-blue': '#0D47A1',   // Deep Ocean Blue - Main backgrounds
        'ocean-blue': '#2196F3',  // Bright Pepe Blue - Nav, headers
        'bright-blue': '#4FC3F7', // Tropical Aqua - Cards, info boxes
        'light-blue': '#90CAF9',  // Light background blue
        
        // Accent Colors
        'coral': '#FF7043',       // Coral Reef - CTAs, important links
        'sunny': '#FFD54F',       // Golden Coin - Highlights, crypto references
        'bioluminescent': '#64FFDA', // Success messages, hover states
        
        // Neutral Colors
        'abyssal': '#121212',     // Text over light backgrounds
        'sand-light': '#FAFAFA',  // Light text color
        'sand': '#F5F5F5',        // Background accent
      },
      fontFamily: {
        'bubblegum': ['Bubblegum Sans', 'cursive'],
        'comic': ['Comic Neue', 'sans-serif'],
        'fredoka': ['Fredoka One', 'cursive'],
        'quicksand': ['Quicksand', 'sans-serif'],
        'comfortaa': ['Comfortaa', 'sans-serif'],
        'varela': ['Varela Round', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'bubble': 'bubble 2s ease-in-out infinite',
        'sway': 'sway 4s ease-in-out infinite',
        'scroll': 'scroll 20s linear infinite',
        'rotate': 'rotate 8s linear infinite',
        'wave': 'wave 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        bubble: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        rotate: {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' }
        },
        wave: {
          '0%': { transform: 'translateX(0) translateY(0)' },
          '25%': { transform: 'translateX(-5px) translateY(-5px)' },
          '50%': { transform: 'translateX(0) translateY(0)' },
          '75%': { transform: 'translateX(5px) translateY(-5px)' },
          '100%': { transform: 'translateX(0) translateY(0)' },
        }
      },
      textShadow: {
        'lg': '2px 2px 4px rgba(0, 0, 0, 0.5)',
        'sm': '1px 1px 2px rgba(0, 0, 0, 0.5)',
        'glow': '0 0 5px rgba(79, 195, 247, 0.7), 0 0 10px rgba(33, 150, 243, 0.5)',
        'deep': '2px 2px 0 #0D47A1, 4px 4px 8px rgba(79, 195, 247, 0.6)',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.text-shadow-lg': {
          'text-shadow': '2px 2px 4px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-sm': {
          'text-shadow': '1px 1px 2px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-glow': {
          'text-shadow': '0 0 5px rgba(79, 195, 247, 0.7), 0 0 10px rgba(33, 150, 243, 0.5)',
        },
        '.text-shadow-deep': {
          'text-shadow': '2px 2px 0 #0D47A1, 4px 4px 8px rgba(79, 195, 247, 0.6)',
        },
        '.text-gradient': {
          'background': 'linear-gradient(to bottom, #FFD54F, #2196F3)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
      });
    },
  ],
}