import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  components: {
    global: true,
    dirs: ['~/components/default', '~/components/shared', '~/components/templates'],
  },
  css: ['~/assets/css/global.css'],
  modules: ['@nuxt/image-edge', '@pinia/nuxt'],
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
  image: {
    imagekit: {
      baseURL: 'https://ik.imagekit.io/c2es1qasw',
    },
  },
})
