/*
 * @category  FCISProjectsStation
 * @author    Omar Elshopky <omar.elshopky202@gmail.com>
 * @copyright Copyright (c) 2022 Cybeus Stud Org
 */

import "./bootstrap";

import { createApp } from "vue";
import VueAxios from "vue-axios";
import axios from "axios";

import App from "./routes/App.vue";
import router from "./router";

createApp(App)
    .use(router)
    .use(VueAxios, axios)
    .mount("#app");
