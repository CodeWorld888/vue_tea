<template>
    <div class="like">
        <Card><span>猜您喜欢</span></Card>        
        <ul>
            <li
                v-for="(item,index) in likeList"
                :key="index">
                <h2>
                    <img :src="item.imgUrl"/>
                </h2>
                <span>{{ item.name }}</span>
                <div class="price">
                    <span>￥</span>
                    <b>{{ item.price }}</b>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import Card from './Card.vue'
export default {
    components:{Card},
    props:{likeList:Array},
}
</script>

<style scoped>
    .like ul{
        display: flex;
        flex-wrap: wrap;
    }
    .like ul li{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
    }
    .like img{
        width: 176px;
        height: 176px;
    }
    .like span{
        width: 93%;
        font-size: 16px;
        color: #222;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .like ul li > div{
        width: 93%;
        padding: 5px;
        color: #b0352f;
    }
</style>