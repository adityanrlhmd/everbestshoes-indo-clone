import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {
  faBars,
  faSearch,
  faBagShopping,
  faX,
  faChevronDown
} from '@fortawesome/free-solid-svg-icons'

import {
  faHeart
} from '@fortawesome/free-regular-svg-icons'

import App from './App.vue'
import router from './router'

library.add(faBars, faSearch, faHeart, faBagShopping, faX, faChevronDown)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')