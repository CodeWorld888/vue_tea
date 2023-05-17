<template>
    <div class="swiper-main">
        <swiper :options="swiperOption">
            <swiper-slide 
            v-for="(item,index) in swiperList"
            :key='index'>
            <h1>
            <img :src="item.imgUrl" />
            </h1>
        </swiper-slide>
        </swiper>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import {swiper,swiperSlide} from 'vue-awesome-swiper'
export default {
    name:'Swiper',
    props:{
        swiperList:Array,
    },
    components:{swiper,swiperSlide},
    data(){
        return {
            swiperOption:{
                autoplay:3000,
                speed:2000,
                pagination: {
				el: '.swiper-pagination'
			},
            },
        }
    }
}
</script>

<style scoped>
    .swiper-main{
        width:100%;
        height: 165px;
        position: relative;
    }
    .swiper-main img{
        width:100%;
        height: 165px;
    }
    .swiper-container{
        width: 100%;
        height: 165px;
    }
    .swiper-pagination{
        width: 100%;
        bottom: 0px;
    }
    ::v-deep .swiper-pagination-bullet-active{
        background-color: #b0352f;
    }
    ::v-deep .swiper-pagination-bullet{
        margin: 0 3px;
    }
</style>