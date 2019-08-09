/* import Vue from "vue";
import VueRouter from "vue-router";
import collect from "components/collect"
import recommend from "components/recommend"
import test from "components/test"
import video from "components/video"
Vue.use(VueRouter); */
export default{
    path: "/smbook",
    component: () => import("views/smbook"),
    name: "smbook",
   /*  children:[
        {
            path:"/collect",
            name:"收藏",
            component:collect
        },
        {
            path: "",
            name: "推荐",
            component: recommend
        },
        {
            path: "test",
            name: "达人测试",
            component:test
        },
        {
            path: "video",
            name: "养宠视频",
            component:video
        }
    ], */
     meta: {
         flag: true,
         auth: false
     }
}