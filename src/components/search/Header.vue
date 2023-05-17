<template>
    <div class="header">
        <div class="search-return">
            <i class="iconfont icon-fanhui" @click="goback()"></i>
        </div>
        <div class="search-main">
            <i class="iconfont icon-fangdajing"></i>
            <form action="" onsubmit="return false" @keyup.enter="goSearchList()">
                <input v-model="searchVal" type="text" placeholder="搜索您喜欢的产品..." />
            </form>
        </div>
        <div class="search-btn" @click="goSearchList()">搜索</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchVal: this.$route.query.key || '',
            searchArr: [],
        }
    },
    methods: {
        goback() {
            this.$router.back()
        },
        goSearchList() {
            if (!this.searchVal.trim()) return;
            //判断之前有没有搜索的本地存储
            if (!localStorage.getItem('searchList')) {
                //没有
                localStorage.setItem('searchList', '[]')
            } else {
                this.searchArr = JSON.parse(localStorage.getItem('searchList', '[]'))
            }
            //增加数据
            this.searchArr.unshift(this.searchVal)
            //去重
            const newArr = new Set(this.searchArr)
            //给本地存储赋值
            localStorage.setItem('searchList', JSON.stringify(Array.from(newArr)))
            //路径如果没有变化，不跳转页面
            if (this.searchVal === this.$route.query.key) return;
            console.log(this.$route)
            if (this.$route.name == 'index') {
                this.$router.push({
                    name: 'list',
                    query: {
                        key: this.searchVal
                    },
                })
            } else {
                this.$router.replace({
                    name: 'list',
                    query: {
                        key: this.searchVal
                    },
                })
            }

        }
    }
}
</script>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #b0352f;
    color: #fff;
    width: 100%;
    height: 1.173333rem;
}

.search-return,
.search-btn {
    padding: 0 10px;
}

.search-btn {
    font-size: 16px;
}

.search-return i {
    font-size: 25px;
}

.search-main {
    display: flex;
    align-items: center;
    border-radius: 12px;
    width: 270px;
    height: 30px;
    background-color: #fff;
}

.search-main i {
    color: #565353;
    padding: 0 7px;
    font-size: 17px;
}

.search-main form {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.search-main form input {
    width: 100%;
}</style>