<template>
    <div class="recommend">
        <Card></Card>
        <ul>
            <li
                v-for="(item,index) in recommendList"
                :key="index"> 
                <h2><img :src="item.imgUrl"/></h2>
                <div>
                    <h3>{{ item.name }}</h3>
                    <p>{{ item.content }}</p>
                    <div class="price">
                        <span>￥</span>
                        <b>{{ item.price }}</b>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import Card from './Card.vue'
export default {
    components:{Card},
    props:{recommendList:Array},
}
</script>

<style scoped>
    .recommend ul li{
        position: relative;
    }
    .recommend ul li > div{
        position: absolute;
        right: 0;
        top: 0;
        display: flex;
        flex-direction: column;
        padding: 30px;
        text-align:right;
    }
    .recommend ul li img{
        width: 360px;
        height: 144px;
        border-radius: 12px;
    }
    .recommend ul li h2{
        text-align: center;
    }
    .recommend ul li h3{
        font-size: 12px;
    }
    .recommend ul li p{
        font-size: 16px;
    }
    .price span{
        font-size: 14px;
    }
    .price{
        margin-top: 20px;
        margin-left: 50px;
        color: #b0352f;
    }
</style>