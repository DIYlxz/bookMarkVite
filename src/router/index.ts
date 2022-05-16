import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

const router = createRouter({
    //hash模式
    history: createWebHashHistory(),
    //路由
    routes: [
        {
            path: "/",
            component: ()=>import("../views/Home/index.vue"),
            children: [
                {
                    path: "",
                    name: "CommonlyUsed",
                    component: ()=> import("@/components/HomeShow/CommonlyUsed.vue"),
                },
            ],
        },
    ]
})

export default router