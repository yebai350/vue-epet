export default {
    path: "/handpick",
    component: () => import("views/handpick"),
    name: "handpick",
     meta: {
         flag: true,
         auth: false
     }
}