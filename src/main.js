import { createApp } from 'vue'
import './style.css'
import './cyberpunk.css'
import "./assets/fonts/LunarEscape.otf"
import App from './App.vue'
import Alpine from 'alpinejs'
 
window.Alpine = Alpine
Alpine.start()

createApp(App).mount('#app')
