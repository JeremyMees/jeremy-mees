import Cloudinary from 'cloudinary-vue'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(Cloudinary, {
    configuration: {
      cloudName: 'dlyd47zhw',
    },
  })
})
