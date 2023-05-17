import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


const routes = [
    {
        path:'/home',
        name:'Home',
        component:Home,
    },
    {
        path:'/',
        redirect:'/home',
    },
    {
        path:'/list',
        name:'List',
        component: ()=>
            import('../views/List.vue'),
    },
    {
        path:'/cart',
        name:'Cart',
        component: ()=>
            import('../views/Cart.vue'),
    },
    {
        path:'/my',
        name:'My',
        component: ()=>
            import('../views/My.vue'),
    },
    {
        path:'/search',
        component: ()=>
            import('../views/Search.vue'),
        children:[
            {
                path:'/',
                name:'index',
                component:()=>
                    import('../views/search/Search-index.vue')
            },
            {
                path:'list',
                name:'list',
                component: ()=>
                    import('../views/search/Search-List.vue'),
            }    
        ]
    },
]

const router = new VueRouter({
    mode:'history',
    base:process.env.BASE_URL,
    routes,
});

export default router;