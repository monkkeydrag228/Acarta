import { createApp } from 'vue'
import App from './components/App.vue'
import MyComponent from './components/HelloWorld.vue'

const app = createApp(App)
app.component("my-component", MyComponent)
app.mount('#app')