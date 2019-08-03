import Vue from "vue";
import Router from "vue-router";
import classify from "./classify"
import handpick from "./handpick"
import mine from "./mine"
import smbook from "./smbook"
import shopcar from "./shopcar"
Vue.use(Router)

export default new Router({
    routes:[
        classify,
        handpick,
        mine,
        smbook,
        shopcar
    ]
})