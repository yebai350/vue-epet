export default {
    path: "/classify",
    component: () => import("views/classify"),
    name: "classify",
     meta: {
         flag: true,
         auth: false
     }
}