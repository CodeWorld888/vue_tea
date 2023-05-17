<template>
    <div class="search-index">
        <Header></Header>
        <section>
            <div class="search-history" v-if="searchArr.length">
                <div>
                    <i class="iconfont icon-shijian"></i>
                    <span>历史记录</span>
                </div>
                <ul>
                    <li v-for="(item, index) in searchArr" :key="index">
                        {{ item }}
                    </li>
                </ul>
                <hr />
                <span class="clean" @click="deleteStorage()">清空历史记录</span>
            </div>
            <div v-else>暂无搜索数据</div>
        </section>
        <Tabbar />
    </div>
</template>

<script>
import Tabbar from '@/components/common/Tabbar.vue'
import Header from "@/components/search/Header.vue"
import { MessageBox } from 'mint-ui'
export default {
    data() {
        return {
            searchArr: [],
        }
    },
    components: { Tabbar, Header },
    created() {
        if (!localStorage.getItem('searchList')) return;
        this.searchArr = JSON.parse(localStorage.getItem('searchList'))
    },
    methods: {
        deleteStorage() {
            MessageBox({
                title: '提示',
                message: '确定执行此操作',
                showCancelButton: true
            }).then(res =>{
                if(res == 'confirm'){
                    localStorage.removeItem('searchList')
                    this.searchArr=[]
                }
            })
        },
    }
}
</script>

<style scoped>
.search-index {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}

section {
    flex: 1;
    background-color: #f5f5f5;
    overflow: hidden;
}

.search-history {
    padding: 10px;
}

.search-history span {
    font-size: 15px;
    font-weight: 500;
}

.search-history i {
    color: #b0352f;
}

.search-history ul {
    display: flex;
    flex-wrap: wrap;
    padding: 15px;
}

.search-history ul li {
    border: 1px solid #ccc;
    border-radius: 20px;
    font-size: 12px;
    padding: 8px;
    margin-right: 10px;
    margin-bottom: 10px;
}

.clean {
    display: block;
    text-align: center;
    padding-top: 5px;
}
</style>