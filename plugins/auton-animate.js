import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(autoAnimatePlugin)
})
