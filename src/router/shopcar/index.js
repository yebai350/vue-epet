export default {
    path: "/shopcar",
    component: () => import("views/shopcar"),
    name: "shopcar",
    meta: {
        flag: true,
        auth: false
    }
}