import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
    //重定向
    {
        path: '/',
        redirect: '/index'
    },

    //这是home页面
    {
        path: '/',
        component: () =>
            import ('../views/Home.vue'),
        children: [
            //底部的四个页面
            {
                path: '/index',
                component: () =>
                    import ('../views/Index.vue'),
            },
            {
                path: '/classify',
                component: () =>
                    import ('../views/Classify.vue'),
            },
            {
                path: '/cart',
                component: () =>
                    import ('../views/Cart.vue'),
            },
            {
                path: '/mine',
                component: () =>
                    import ('../views/Mine.vue'),
            },
        ]
    },
    //这是详情页 这样的话 下面是没有那四个按钮的


]

const router = new VueRouter({
    routes
})




export default router