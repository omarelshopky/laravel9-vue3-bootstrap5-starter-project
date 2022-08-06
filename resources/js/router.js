import { createWebHashHistory, createRouter } from 'vue-router';

import HomePage from './routes/HomePage.vue';

const history = createWebHashHistory();
const router = createRouter({
    history,
    routes: [
        {
            path: '/',
            component: HomePage,
        },
    ],
});

export default router;
