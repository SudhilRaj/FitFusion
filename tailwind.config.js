/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'hero-pattern':"linear-gradient(to right bottom, rgba(0, 0, 0, .9), rgba(43, 108, 176, 0.3)), url('assets/hero.webp')",
        'service-pattern':"linear-gradient(to right bottom, rgba(0, 0, 0, .9), rgba(43, 108, 176, 0.9)), url('assets/service.webp')",
        'gallery-pattern1':"url('assets/client5.webp')",
        'gallery-pattern2':"url('assets/gallery2.webp')",
        'gallery-pattern3':"url('assets/gallery3.webp')",
        'gallery-pattern4':"url('assets/gallery4.webp')",
        'gallery-pattern5':"url('assets/gallery5.webp')",
        'footer-pattern':"linear-gradient(to right bottom, rgba(0, 0, 0, .8), rgba(0, 0, 0, 0.8)), url('assets/about.webp')",
        'color-pattern':"linear-gradient(to right, #8a2387, #e94057, #f27121)"
      },
    },
  },
  plugins: [],
}

