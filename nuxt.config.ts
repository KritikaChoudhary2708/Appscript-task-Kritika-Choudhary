
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  //...
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],
  css: [
    '~/assets/scss/main.scss' // Path to your fonts.css file
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  
  
})
