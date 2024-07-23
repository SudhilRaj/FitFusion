/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'hero-pattern':"linear-gradient(to right bottom, rgba(0, 0, 0, .9), rgba(43, 108, 176, 0.3)), url('assets/hero.jpg')",
        'service-pattern':"linear-gradient(to right bottom, rgba(0, 0, 0, .9), rgba(43, 108, 176, 0.9)), url('assets/service.jpg')",
        'gallery-pattern1':"url('assets/client5.jpg')",
        'gallery-pattern2':"url('assets/gallery2.jpg')",
        'gallery-pattern3':"url('assets/gallery3.jpg')",
        'gallery-pattern4':"url('assets/gallery4.jpg')",
        'gallery-pattern5':"url('assets/gallery5.jpg')",
        'footer-pattern':"linear-gradient(to right bottom, rgba(0, 0, 0, .8), rgba(0, 0, 0, 0.8)), url('assets/about.jpg')",
        'color-pattern':"linear-gradient(to right, #8a2387, #e94057, #f27121)"
      },
    },
  },
  plugins: [],
}

