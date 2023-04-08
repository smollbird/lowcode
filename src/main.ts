import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { setupStore } from './store';
import ElementPlus from 'element-plus';
import '@/assets/css/common.css';
import 'element-plus/dist/index.css';

const app = createApp(App);

setupStore(app);

app.use(router).use(ElementPlus);

app.mount('#app');
