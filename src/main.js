import './assets/main.css'

import { createApp } from 'vue'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Particles from '@tsparticles/vue3';
import { loadSlim } from '@tsparticles/slim';
AOS.init({ duration: 1000, once: false });
import i18n from './i18n.js'

import App from './App.vue'

const myApp = createApp(App)


myApp.use(Particles, {
  init: async engine => {
    await loadSlim(engine);
  },
});
myApp.use(i18n)

myApp.mount('#app')
