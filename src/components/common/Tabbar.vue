<template>
    <div class="tabbar">
        <ul>
            <li
                v-for="(item,index) in routerList"
                :key="index"
                @click="switchTab(item.path)"
            >
                <img :src="$route.path.includes(item.path) ? item.selected : item.active" />
                <span :class="$route.path.includes(item.path) ? 'active' : 'item.active'">{{item.title}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            routerList:[
            {
                title:'首页',
                path:'/home',
                active:'/images/home.png',
                selected:'/images/home-select.png'
            },
            {
                title:'分类',
                path:'/list',
                active:'/images/list.png',
                selected:'/images/list-select.png'
            },
            {
                title:'购物车',
                path:'/cart',
                active:'/images/cart.png',
                selected:'/images/cart-select.png'
            },
            {
                title:'我的',
                path:'/my',
                active:'/images/my.png',
                selected:'/images/my-select.png',
            }
            ]
        }
    },
    methods:{
        switchTab(path){
			//判断点击的是不是同一个路由
			if(this.$route.path === path) return
            this.$router.replace(path)
        }
    }
}
</script>

<style scoped>
    .tabbar{
        /* position: fixed;
        left: 0;
        bottom: 0; */
        background-color: #fff;
        width: 100%;
        height: 1.6rem;
        z-index: 999;
    }
    .tabbar ul{
        display: flex;
        justify-content: space-around;
        width: 100%;
        height: 100%;
        align-items: center;
    }
    .tabbar ul li{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .tabbar ul li img{
        width: 31px;
        height: 31px;
    }
    .tabbar ul li span{
        font-size: 16px;
    }
    .active{
        color: red;
    }
</style>