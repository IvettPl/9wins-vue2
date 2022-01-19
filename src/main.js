import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import components from '@/components/UI';

import '@/assets/style/color-vars.scss'
import '@/assets/style/main.scss'



const app = createApp(App);

components.forEach(el => {
    app.component(el.name, el)
});

app.use(store);
app.use(router);
app.mount('#app');
