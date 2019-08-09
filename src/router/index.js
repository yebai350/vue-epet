import Vue from "vue";
import VueRouter from "vue-router";
import classify from "./classify";
import handpick from "./handpick";
import mine from "./mine";
import smbook from "./smbook";
import shopcar from "./shopcar";
import search from "./search";
import login from "./login";
import register from "./register"
import set from "./set"
Vue.use(VueRouter)

export default new VueRouter({

    routes: [{
            path: "/",
            redirect: "/handpick"
        },
        classify,
        handpick,
        mine,
        smbook,
        shopcar,
        search,
        login,
        register,
        set
    ]
})