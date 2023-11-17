import App from './App.vue'
import { createApp } from 'vue'
import router from './router'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createPinia } from 'pinia'

const app = createApp(App)

const vuetify = createVuetify({
    components,
    directives,
  })


app.use(createPinia())
app.use(router)
app.use(vuetify).mount('#app')
