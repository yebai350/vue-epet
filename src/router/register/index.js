export default {
    path: "/register",
    component: () => import("views/register"),
    name: "register",
    title: "注册",
    meta: {
        flag: false,
        auth: false
    }
}