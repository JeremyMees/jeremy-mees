import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  components: {
    global: true,
    dirs: ['~/components/atoms', '~/components/molecules', '~/components/organisms'],
  },
  css: ['~/assets/css/global.css'],
  modules: ['@pinia/nuxt'],
  buildModules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: '~/tailwind.config.js',
    injectPosition: 0,
    viewer: false,
  },
  vite: {
    plugins: [svgLoader()],
  },
})
