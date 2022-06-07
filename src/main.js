import { createApp } from 'vue'
// import App from './App.vue'
// import WrapperComponent from './WrapperComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'
import router from './routers/index'

// createApp(App).mount('#app')
createApp(HeaderComponent).use(router).mount('#app')
