import { defineConfig, mergeConfig } from "vite"

import eevConfig from "slidev-addon-eslint-editor-vue/vite.config"


const config =  defineConfig({
  // @ts-expect-error
  slidev: {
    serverRef: {
      state: {
        polls: {},
        users: {},
      },
    },
  },
})

// @ts-expect-error
export default mergeConfig(config, eevConfig)