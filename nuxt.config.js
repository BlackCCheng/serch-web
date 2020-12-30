/*
 * @Author: your name
 * @Date: 2020-12-22 16:23:28
 * @LastEditTime: 2020-12-30 15:44:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /serch-web/nuxt.config.js
 */
const webpack = require('webpack')

let plugins = []

if(process.env.NODE_ENV === 'production'){
  plugins.push("transform-remove-console")
}

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: '我的',
    meta: [{
      charset: 'utf-8'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      hid: 'keywords',
      name: 'keywords',
      content: '1'
    },
    {
      hid: 'description',
      name: 'description',
      content: '123'
    }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }],
    script: [{
      src: '/js/jquery.min.js'
    }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/view-design',
    '@/plugins/api',
    '@/plugins/md5',
    '@/plugins/common',
    // '@/plugins/element',
    '@/plugins/baseUrl',
    '@/store/index',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],
  server: {
    port: 8080, // default: 3000
    host: process.env.NODE_ENV === 'production' ? '0.0.0.0' : 'localhost' // default: localhost, || 0.0.0.0
  },
  axios: {
    proxy: true // Can be also an object with default options
  },
  proxy: {
    "/login": {
      target: 'http://rightknights-back-login-service:8080',
      pathRewrite: {
        "^/login": ""
      },
      secure: false,
      ws: true, // proxy websockets
      changeOrigin: true, // needed for virtual hosted sites
    },
    "/home": {
      target: 'http://rightknights-back-index-service:8080',
      pathRewrite: {
        "^/home": ""
      },
      secure: false,
      ws: true, // proxy websockets
      changeOrigin: true, // needed for virtual hosted sites
    }
  },
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
