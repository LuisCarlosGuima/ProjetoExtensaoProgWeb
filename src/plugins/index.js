/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
//import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import router from '../router'
//import store from '../store'
//import CKEditor from '@mayasabha/ckeditor4-vue3'

export function registerPlugins (app) {
  //loadFonts()
  app
    .use(vuetify)
    .use(router)
 //   .use(store)
//    .use(CKEditor)
}
