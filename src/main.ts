import { createApp } from 'vue';
import App from './App.vue';
import router from './router.ts';
import './style.scss';

const savedTheme = localStorage.getItem('theme-mode')
const theme = savedTheme === 'light-mode' ? 'light-mode' : 'dark-mode'
document.documentElement.classList.add(theme)

const app = createApp(App)

app.use(router)

app.mount('#app')
